import { useRef, useState, useEffect } from "react";

export interface StatCard {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
  labelColor?: string;
  valueColor?: string;
}

export interface NumberHighlightsProps {
  title?: string;
  titleColor?: string;
  titleElement?: React.ReactNode;
  bgColor?: string;
  cards: StatCard[];
  animate?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  gap?: number;
}

function splitValueAndSuffix(value: string): { number: string; suffix: string } {
  const match = value.match(/^(.+?)(\+)$/);
  if (match) return { number: match[1], suffix: match[2] };
  return { number: value, suffix: "" };
}

export function NumberHighlights({
  title,
  titleColor = "#f5f5f5",
  titleElement,
  bgColor = "#300067",
  cards,
  animate = true,
  paddingTop = 120,
  paddingBottom = 120,
  gap = 64,
}: NumberHighlightsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animate]);

  const getCardStyle = (index: number): React.CSSProperties =>
    animate
      ? {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(80px)",
          transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
          flex: "1 0 0",
          minWidth: 0,
          minHeight: 0,
        }
      : { flex: "1 0 0", minWidth: 0, minHeight: 0 };

  return (
    <div
      ref={ref}
      className="content-stretch flex flex-col items-start overflow-clip px-[80px] relative shrink-0 w-[1440px]"
      style={{ backgroundColor: bgColor, paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px`, gap: `${gap}px` }}
      data-name="Number Highlights"
    >
      {titleElement
        ? titleElement
        : title && (
            <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[36px]" style={{ color: titleColor }}>
              {title}
            </p>
          )}
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Highlights">
        {cards.map((card, index) => {
          const { number, suffix } = splitValueAndSuffix(card.value);
          const labelColor = card.labelColor ?? "#f5f5f5";
          const valueColor = card.valueColor ?? "#f5f5f5";

          return (
            <div key={index} style={getCardStyle(index)}>
              <div
                className="flex-[1_0_0] h-[317px] min-h-px min-w-px relative rounded-[4px]"
                style={{ backgroundColor: card.bgColor }}
                data-name="Container"
              >
                <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[16px] px-[24px] relative size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
                    {card.icon}
                    <p
                      className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] uppercase"
                      style={{ color: labelColor }}
                    >
                      {card.label}
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                    <p
                      className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[48px] tracking-[0.3955px] whitespace-nowrap"
                      style={{ color: valueColor }}
                    >
                      <span className="leading-none">{number}</span>
                      {suffix && (
                        <sup className="text-[48px] top-[-0.3em] relative">{suffix}</sup>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
