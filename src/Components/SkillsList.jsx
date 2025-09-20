import { useState } from "react";
import { useMarqueeDuration } from "../Hooks/useMarqueeDuration";

function SkillsList({ data, animDirection, speedPxPerSec = 60 }) {
    const skills = data.skills;
    const [isInteracting, setIsInteracting] = useState(false);

    const cardW = 200; // largeur carte
    const gap = 20;
    const n = skills.length;
    const singleWidth = n * cardW + Math.max(0, n - 1) * gap;
    const speed = 60;         // px/s, vitesse globale
    const initialDuration = `${Math.max(6, Math.min(120, singleWidth / speed)).toFixed(3)}s`;

    // Même vitesse partout
    const { ref, style } = useMarqueeDuration({ speed: speedPxPerSec, duplicationFactor: 2 });

    return (
        <>
        <h3 className='competences-title'>{data.title}</h3>
        <div
            className='competences-main'
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
        >
            <div
            ref={ref}
            className='competences-list-wrapper'
            style={{
                animationPlayState: isInteracting ? 'paused' : 'running',
                animationDirection: animDirection, // "normal" | "reverse"
                animationDuration: initialDuration, // fallback
                ...style,                          // --duration calculée
            }}
            >
            {skills.map((item) => (
                <span className="list-item-competence" key={item.id}>
                <img className='list-icon' src={item.picture} alt={item.name} />
                {item.name}
                </span>
            ))}
            {skills.map((item) => (
                <span className="list-item-competence" key={`${item.id}-clone`}>
                <img className='list-icon' src={item.picture} alt={item.name} />
                {item.name}
                </span>
            ))}
            </div>
        </div>
        </>
    );
}

export default SkillsList;
