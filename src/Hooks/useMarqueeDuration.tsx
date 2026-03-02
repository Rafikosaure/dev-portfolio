import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { MarqueeOptions } from "../types";

// Étend CSSProperties pour accepter les propriétés CSS personnalisées (--var)
interface CSSPropertiesWithVars extends CSSProperties {
  [key: `--${string}`]: string | number | undefined;
}

/** useLayoutEffect côté client, useEffect côté SSR (Next.js, etc.) */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Calcule la durée CSS d'une animation de type "marquee" pour garantir
 * une vitesse constante en px/s, quelle que soit la longueur de la liste.
 */
export function useMarqueeDuration({
  speed = 60,
  duplicationFactor = 2,
  minDuration = 6,
  maxDuration = 120,
  watchParent = true,
}: MarqueeOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<string | null>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const total = el.scrollWidth || 0; // largeur des 2 copies
      const single = duplicationFactor > 0 ? total / duplicationFactor : total;
      if (single <= 0 || !isFinite(single)) return;

      const seconds = single / speed;
      const clamped = Math.max(minDuration, Math.min(maxDuration, seconds));
      setDuration(`${clamped.toFixed(3)}s`);
    };

    compute();

    // Recalcule si la largeur change (contenu, fonts, responsive…)
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    if (watchParent && el.parentElement) ro.observe(el.parentElement);

    const onLoad = () => compute();
    window.addEventListener("load", onLoad);
    if (document.fonts?.ready) document.fonts.ready.then(compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, [speed, duplicationFactor, minDuration, maxDuration, watchParent]);

  // Pratique à coller dans style={}
  const style = useMemo<CSSPropertiesWithVars>(
    () => (duration ? { "--duration": duration } : {}),
    [duration]
  );

  return { ref, duration, style };
}
