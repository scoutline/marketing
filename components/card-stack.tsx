'use client';

import { useState, useEffect } from 'react';

// Each card: name, background color, a subtle texture/pattern element
const CARDS = [
  {
    id: 'vault',
    name: 'The Vault',
    sub: 'Secure Storage',
    // Deep burnt orange — warm, serious
    bg: 'bg-[#8B3A1A]',
    textColor: 'text-orange-100',
    subColor: 'text-orange-200/60',
    // Default tilt ratios for calculation
    rotateVal: -14,
    zIndex: 'z-10',
    // Subtle texture: diagonal line pattern via background
    pattern: 'diagonal-lines',
  },
  {
    id: 'maverick',
    name: 'Maverick',
    sub: 'AI Case Intelligence',
    // Deep royal blue
    bg: 'bg-[#1A3A6B]',
    textColor: 'text-blue-100',
    subColor: 'text-blue-200/60',
    rotateVal: -5,
    zIndex: 'z-20',
    pattern: 'grid-dots',
  },
  {
    id: 'scout',
    name: 'Scout',
    sub: 'Semantic Search',
    // Forest green
    bg: 'bg-[#1C4A2E]',
    textColor: 'text-green-100',
    subColor: 'text-green-200/60',
    rotateVal: 4,
    zIndex: 'z-20',
    pattern: 'grid-dots',
  },
  {
    id: 'provisos',
    name: 'Provisos',
    sub: 'Drafting Tools',
    // Dark charcoal — almost black but warm
    bg: 'bg-[#2A2A28]',
    textColor: 'text-neutral-200',
    subColor: 'text-neutral-400/60',
    rotateVal: 12,
    zIndex: 'z-10',
    pattern: 'rectangle-outline',
  },
];

// Pattern SVGs — inline, subtle, low-opacity
function CardPattern({ type }: { type: string }) {
  if (type === 'diagonal-lines') {
    return (
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="diag" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 12L12 0" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
    );
  }
  if (type === 'grid-dots') {
    return (
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    );
  }
  if (type === 'horizontal-lines') {
    return (
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hlines" x="0" y="0" width="100%" height="14" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hlines)" />
      </svg>
    );
  }
  if (type === 'rectangle-outline') {
    return (
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 200 280"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect x="20" y="20" width="160" height="240" stroke="white" strokeWidth="1" fill="none" rx="2" />
        <rect x="36" y="36" width="128" height="208" stroke="white" strokeWidth="0.5" fill="none" rx="1" />
      </svg>
    );
  }
  return null;
}

export function CardStack() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive values
  const cardWidth = isMobile ? 120 : 160;
  const cardHeight = isMobile ? 168 : 220;
  const spreadWidth = isMobile ? 220 : 320;
  const containerHeight = isMobile ? 240 : 320;

  return (
    /*
      Container: wide enough to show the fanned spread
      The cards overlap — position them with negative margin or absolute offset
      Use flex with tight spacing so cards visually fan out left-to-right
    */
    <div
      className="relative flex items-end justify-center"
      style={{
        width: '100%',
        maxWidth: '680px',
        height: `${containerHeight}px`,
        margin: '0 auto',
      }}
    >
      {CARDS.map((card, i) => {
        // Each card offset: fan spread from center
        const totalCards = CARDS.length;
        const step = spreadWidth / (totalCards - 1);
        const offsetX = -spreadWidth / 2 + i * step;

        return (
          <div
            key={card.id}
            className={`
              absolute
              ${card.bg}
              ${card.zIndex}
              transition-all duration-400 ease-out
              cursor-default
              rounded-[6px]
              overflow-hidden
            `}
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              left: `calc(50% + ${offsetX}px - ${cardWidth / 2}px)`,
              bottom: 0,
              transform: `rotate(${card.rotateVal}deg) translateY(${hoveredId === card.id ? '-20px' : '0'})`,
              // Lift hovered card AND slightly depress others
              filter: hoveredId && hoveredId !== card.id
                ? 'brightness(0.75)'
                : 'brightness(1)',
              zIndex: hoveredId === card.id ? 50 : i + 10,
            }}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Subtle texture pattern */}
            <CardPattern type={card.pattern} />

            {/* Card content — name at bottom left */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <span className={`font-sans text-[8px] sm:text-[10px] tracking-wider uppercase font-semibold mb-0.5 ${card.subColor}`}>
                {card.sub}
              </span>
              <span className={`font-serif text-sm sm:text-base font-medium leading-tight ${card.textColor}`}>
                {card.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
