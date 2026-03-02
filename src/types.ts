import type { MouseEvent } from "react";

// ─── Domain: Projects ─────────────────────────────────────────────────────────

export interface Project {
  id: string;
  shortTitle: string;
  title: string;
  cover: string;
  description: string;
  technologies: string;
  urlSite: string;
  urlRepo: string;
  pictures?: string[];
}

// ─── Domain: Skills ───────────────────────────────────────────────────────────

export interface SkillItem {
  id: string;
  name: string;
  picture: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

// ─── Theme Context ────────────────────────────────────────────────────────────

export type ColorMainMode = "light" | "dark";
export type ColorElementMode = "" | "-dark";

export interface ThemeContextValue {
  colorMainMode: ColorMainMode;
  colorElementMode: ColorElementMode;
  toggleTheme: (e: MouseEvent<HTMLElement>) => void;
  getStoredTheme: () => void;
}

// ─── Marquee Hook ─────────────────────────────────────────────────────────────

export interface MarqueeOptions {
  speed?: number;
  duplicationFactor?: number;
  minDuration?: number;
  maxDuration?: number;
  watchParent?: boolean;
}
