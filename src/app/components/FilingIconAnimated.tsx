import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════
   Shared + per-icon keyframes
   ═══════════════════════════════════════════════════════ */
const animationStyles = `
/* ── shared ── */
@keyframes fi-reveal{
  0%,5%{opacity:0;}17%{opacity:1;}78%{opacity:1;}95%,100%{opacity:0;}
}

/* ── 01 File ── */
@keyframes fi-docDraw{
  0%,5%{opacity:0;stroke-dashoffset:1375;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes fi-foldDraw{
  0%,5%{opacity:0;stroke-dashoffset:100;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes fi-lineDraw{
  0%,5%{opacity:0;stroke-dashoffset:205;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes fi-partialDraw{
  0%,5%{opacity:0;stroke-dashoffset:105;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes fi-cursorBlink{
  0%,100%{opacity:1;transform:scaleY(1);}50%{opacity:.12;transform:scaleY(.2);}
}
@keyframes fi-ripple{
  0%{transform:scale(1);opacity:.6;}100%{transform:scale(3.4);opacity:0;}
}
@keyframes fi-docGlow{
  0%{stroke-opacity:1;}20%{stroke-opacity:.8;}47%{stroke-opacity:.97;}
  61%{stroke-opacity:.78;}80%{stroke-opacity:.9;}100%{stroke-opacity:1;}
}

/* ── 02 Monitor ── */
@keyframes mo-screenDraw{
  0%,5%{opacity:0;stroke-dashoffset:1065;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes mo-neckDraw{
  0%,5%{opacity:0;stroke-dashoffset:42;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes mo-baseDraw{
  0%,5%{opacity:0;stroke-dashoffset:140;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes mo-scanSweep{
  0%{transform:translateY(-70px);}50%{transform:translateY(70px);}100%{transform:translateY(-70px);}
}
@keyframes mo-focusPulse{
  0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.22);opacity:0.72;}
}
@keyframes mo-ripple{
  0%{transform:scale(1);opacity:.5;}100%{transform:scale(2.6);opacity:0;}
}
@keyframes mo-screenGlow{
  0%{stroke-opacity:1;}20%{stroke-opacity:.76;}47%{stroke-opacity:.96;}
  63%{stroke-opacity:.7;}82%{stroke-opacity:.9;}100%{stroke-opacity:1;}
}

/* ── 03 Unify ── */
@keyframes un-spokeDraw{
  0%,5%{opacity:0;stroke-dashoffset:145;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes un-hubOuterDraw{
  0%,5%{opacity:0;stroke-dashoffset:350;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes un-hubMidDraw{
  0%,5%{opacity:0;stroke-dashoffset:255;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes un-hubInnerDraw{
  0%,5%{opacity:0;stroke-dashoffset:130;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes un-dotBlink{
  0%,100%{opacity:1;transform:scale(1);}50%{opacity:.12;transform:scale(.2);}
}
@keyframes un-ripple{
  0%{transform:scale(1);opacity:.6;}100%{transform:scale(3.4);opacity:0;}
}
@keyframes un-orbital{to{transform:rotate(360deg);}}
@keyframes un-counterOrbital{to{transform:rotate(-360deg);}}
@keyframes un-scanTick{to{stroke-dashoffset:-350;}}
@keyframes un-hubGlow{
  0%{stroke-opacity:1;}20%{stroke-opacity:.8;}47%{stroke-opacity:.97;}
  61%{stroke-opacity:.78;}80%{stroke-opacity:.9;}100%{stroke-opacity:1;}
}

/* ── 04 Scale ── */
@keyframes sc-smallDraw{
  0%,5%{opacity:0;stroke-dashoffset:476;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes sc-arrowDraw{
  0%,5%{opacity:0;stroke-dashoffset:352;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes sc-bigDraw{
  0%,5%{opacity:0;stroke-dashoffset:1142;}
  17%{opacity:1;stroke-dashoffset:0;}78%{opacity:1;stroke-dashoffset:0;}
  95%,100%{opacity:0;stroke-dashoffset:0;}
}
@keyframes sc-pulseRing{
  0%{transform:scale(1);opacity:0.6;}100%{transform:scale(1.7);opacity:0;}
}
`;

/* ═══════════════════════════════════════════════════════
   01 — File
   ═══════════════════════════════════════════════════════ */
function FileSvg() {
  return (
    <svg width="380" height="460" viewBox="0 0 380 460" fill="none">
      {/* dim reference shapes */}
      <path d="M42,22 L282,22 L322,62 L322,438 L42,438 Z"
            stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15" fill="none"/>
      <line x1="82" y1="152" x2="282" y2="152" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15"/>
      <line x1="82" y1="212" x2="282" y2="212" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15"/>
      <line x1="82" y1="272" x2="282" y2="272" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15"/>
      <line x1="82" y1="332" x2="182" y2="332" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15"/>
      <line x1="82" y1="392" x2="282" y2="392" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15"/>

      <path d="M182,438 L42,438 L42,22 L282,22 L322,62 L322,438 Z"
            stroke="#8740FF" strokeWidth="1.8" fill="none"
            style={{ strokeDasharray: 1375, animation: 'fi-docDraw 7s linear 0s infinite, fi-docGlow 4s ease-in-out 2.5s infinite' }}/>
      <path d="M282,22 L282,62 L322,62"
            stroke="#AF63FF" strokeWidth="1.8" fill="none"
            style={{ strokeDasharray: 100, animation: 'fi-foldDraw 7s linear 0.18s infinite' }}/>

      <line x1="82" y1="152" x2="282" y2="152" stroke="#8740FF" strokeWidth="1.8"
            style={{ strokeDasharray: 205, animation: 'fi-lineDraw 7s linear 0.42s infinite' }}/>
      <line x1="82" y1="212" x2="282" y2="212" stroke="#8740FF" strokeWidth="1.8"
            style={{ strokeDasharray: 205, animation: 'fi-lineDraw 7s linear 0.62s infinite' }}/>
      <line x1="82" y1="272" x2="282" y2="272" stroke="#8740FF" strokeWidth="1.8"
            style={{ strokeDasharray: 205, animation: 'fi-lineDraw 7s linear 0.82s infinite' }}/>

      <line x1="82" y1="332" x2="182" y2="332" stroke="#AF63FF" strokeWidth="1.8"
            style={{ strokeDasharray: 105, animation: 'fi-partialDraw 7s linear 1.02s infinite' }}/>

      <g style={{ animation: 'fi-reveal 7s linear 1.42s infinite' }}>
        <circle cx="182" cy="332" r="6" stroke="#AF63FF" strokeWidth="1.8" fill="none"
                style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'fi-reveal 7s linear 1.42s infinite, fi-ripple 2.2s ease-out 2.4s infinite' }}/>
        <line x1="182" y1="322" x2="182" y2="342" stroke="#C694FE" strokeWidth="1.8"
              style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'fi-cursorBlink 0.7s ease-in-out 2.2s infinite' }}/>
      </g>

      <line x1="82" y1="392" x2="282" y2="392" stroke="#8740FF" strokeWidth="1.8"
            style={{ strokeDasharray: 205, animation: 'fi-lineDraw 7s linear 1.22s infinite' }}/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   02 — Monitor
   ═══════════════════════════════════════════════════════ */
function MonitorSvg() {
  return (
    <svg width="360" height="300" viewBox="0 0 360 300" fill="none">
      {/* screen outline */}
      <rect x="15" y="15" width="330" height="200" rx="2"
            stroke="#8740FF" strokeWidth="1.8" fill="none"
            style={{ strokeDasharray: 1065, animation: 'mo-screenDraw 7s linear 0s infinite, mo-screenGlow 3s ease-in-out 2.2s infinite' }}/>
      {/* neck */}
      <line x1="180" y1="215" x2="180" y2="252" stroke="#8740FF" strokeWidth="1.8"
            style={{ strokeDasharray: 42, animation: 'mo-neckDraw 7s linear 0.22s infinite' }}/>
      {/* base */}
      <line x1="112" y1="252" x2="248" y2="252" stroke="#8740FF" strokeWidth="1.8"
            style={{ strokeDasharray: 140, animation: 'mo-baseDraw 7s linear 0.38s infinite' }}/>
      {/* scan group */}
      <g style={{ animation: 'fi-reveal 7s linear 0.58s infinite' }}>
        <g style={{ animation: 'mo-scanSweep 2.6s ease-in-out 1s infinite' }}>
          <line x1="15" y1="115" x2="345" y2="115"
                stroke="#8740FF" strokeWidth="1.8" strokeOpacity=".65"/>
          <circle cx="180" cy="115" r="22" stroke="#AF63FF" strokeWidth="1.8" fill="none"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'mo-ripple 2.6s ease-out 1.2s infinite' }}/>
          <circle cx="180" cy="115" r="22" stroke="#AF63FF" strokeWidth="1.8" fill="none"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'mo-focusPulse 2.6s ease-in-out 1s infinite' }}/>
        </g>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   03 — Unify
   ═══════════════════════════════════════════════════════ */
const UNIFY_NODES = [
  { cx: 342, cy: 200 }, // E
  { cx: 301, cy: 301 }, // SE
  { cx: 200, cy: 342 }, // S
  { cx: 99,  cy: 301 }, // SW
  { cx: 58,  cy: 200 }, // W
  { cx: 99,  cy: 99  }, // NW
  { cx: 200, cy: 58  }, // N
  { cx: 301, cy: 99  }, // NE
];

function UnifySvg() {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
      {/* dim reference rings */}
      <circle cx="200" cy="200" r="55" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15" fill="none"/>
      <circle cx="200" cy="200" r="40" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15" fill="none"/>
      <circle cx="200" cy="200" r="20" stroke="#8740FF" strokeWidth=".6" strokeOpacity=".15" fill="none"/>

      {/* 8 spokes */}
      {UNIFY_NODES.map((n, i) => (
        <line key={`spoke-${i}`} x1={n.cx} y1={n.cy} x2="200" y2="200"
              stroke="#8740FF" strokeWidth="1.8"
              style={{ strokeDasharray: 145, animation: `un-spokeDraw 7s linear ${0.38 + i * 0.09}s infinite` }}/>
      ))}

      {/* hub outer ring */}
      <circle cx="200" cy="200" r="55" stroke="#8740FF" strokeWidth="1.8" fill="none"
              style={{ strokeDasharray: 350, animation: 'un-hubOuterDraw 7s linear 1.10s infinite, un-hubGlow 4s ease-in-out 2.5s infinite' }}/>

      {/* orbital arc */}
      <g style={{ transformOrigin: '200px 200px', animation: 'un-orbital 12s linear 0s infinite' }}>
        <circle cx="200" cy="200" r="55" stroke="#AF63FF" strokeWidth="1.8" fill="none"
                strokeDasharray="288 57"
                style={{ animation: 'fi-reveal 7s linear 1.40s infinite' }}/>
      </g>

      {/* scan tick */}
      <g style={{ transformOrigin: '200px 200px', animation: 'un-scanTick 1.8s linear 0s infinite' }}>
        <circle cx="200" cy="200" r="55" stroke="#C694FE" strokeWidth="1.5" fill="none"
                strokeLinecap="round"
                strokeDasharray="22 328"
                style={{ animation: 'fi-reveal 7s linear 1.48s infinite' }}/>
      </g>

      {/* hub middle ring */}
      <circle cx="200" cy="200" r="40" stroke="#8740FF" strokeWidth="1.8" fill="none"
              style={{ strokeDasharray: 255, animation: 'un-hubMidDraw 7s linear 1.20s infinite' }}/>

      {/* hub inner ring — counter-spin */}
      <g style={{ transformOrigin: '200px 200px', animation: 'un-counterOrbital 20s linear 0s infinite' }}>
        <circle cx="200" cy="200" r="20" stroke="#C694FE" strokeWidth="1.8" fill="none"
                style={{ strokeDasharray: 130, animation: 'un-hubInnerDraw 7s linear 1.30s infinite' }}/>
      </g>

      {/* center dot */}
      <circle cx="200" cy="200" r="4" fill="#AF63FF"
              style={{ animation: 'fi-reveal 7s linear 1.30s infinite' }}/>

      {/* 8 nodes */}
      {UNIFY_NODES.map((n, i) => (
        <g key={`node-${i}`} style={{ animation: `fi-reveal 7s linear ${0.15 + i * 0.07}s infinite` }}>
          <circle cx={n.cx} cy={n.cy} r="10" stroke="#8740FF" strokeWidth="1.5" fill="none"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: `un-ripple 2.2s ease-out ${2.4 + i * 0.27}s infinite` }}/>
          <circle cx={n.cx} cy={n.cy} r="10" stroke="#8740FF" strokeWidth="1.8" fill="none"/>
          <circle cx={n.cx} cy={n.cy} r="4" fill="#AF63FF"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'un-dotBlink 2.2s ease-in-out 2.4s infinite' }}/>
        </g>
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   04 — Scale
   ═══════════════════════════════════════════════════════ */
function ScaleSvg() {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" overflow="visible">
      {/* dim reference shapes */}
      <rect x="95" y="18" width="280" height="286"
            stroke="#8740FF" strokeWidth=".6" strokeOpacity=".12" fill="none"/>
      <rect x="15" y="263" width="115" height="118"
            stroke="#8740FF" strokeWidth=".6" strokeOpacity=".12" fill="none"/>

      {/* pulse rings */}
      <rect x="95" y="18" width="280" height="286" stroke="#8740FF" strokeWidth="1.5" fill="none"
            style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'fi-reveal 7s linear 1.6s infinite, sc-pulseRing 1.9s ease-out 2.4s infinite' }}/>
      <rect x="95" y="18" width="280" height="286" stroke="#8740FF" strokeWidth="1.5" fill="none"
            style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'fi-reveal 7s linear 1.6s infinite, sc-pulseRing 1.9s ease-out 3.1s infinite' }}/>
      <rect x="95" y="18" width="280" height="286" stroke="#8740FF" strokeWidth="1.5" fill="none"
            style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'fi-reveal 7s linear 1.6s infinite, sc-pulseRing 1.9s ease-out 3.8s infinite' }}/>

      {/* small rect */}
      <path d="M15,322 L15,263 L130,263 L130,381 L15,381 Z"
            stroke="#8740FF" strokeWidth="1.8" fill="none"
            style={{ strokeDasharray: 476, animation: 'sc-smallDraw 7s linear 0.15s infinite' }}/>

      {/* arrow */}
      <line x1="130" y1="263" x2="375" y2="18" stroke="#AF63FF" strokeWidth="1.8"
            style={{ strokeDasharray: 352, animation: 'sc-arrowDraw 7s linear 0.48s infinite' }}/>

      {/* arrowhead */}
      <path d="M348,18 L375,18 L375,45"
            stroke="#C694FE" strokeWidth="1.8" fill="none" strokeLinecap="square"
            style={{ animation: 'fi-reveal 7s linear 0.75s infinite' }}/>

      {/* large rect */}
      <path d="M95,161 L95,18 L375,18 L375,304 L95,304 Z"
            stroke="#8740FF" strokeWidth="1.8" fill="none"
            style={{ strokeDasharray: 1142, animation: 'sc-bigDraw 7s linear 0.88s infinite' }}/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   Main export
   ═══════════════════════════════════════════════════════ */
interface FilingIconAnimatedProps {
  activeStep?: number;
}

export function FilingIconAnimated({ activeStep = 0 }: FilingIconAnimatedProps) {
  // Force remount on step change to restart all CSS animations
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((k) => k + 1);
  }, [activeStep]);

  const svgs = [<FileSvg />, <MonitorSvg />, <UnifySvg />, <ScaleSvg />];
  const clampedStep = Math.min(Math.max(activeStep, 0), svgs.length - 1);

  return (
    <div className="flex items-center justify-center h-[628px] w-[476px] rounded-[4px]">
      <style>{animationStyles}</style>
      <div key={key} className="flex items-center justify-center">
        {svgs[clampedStep]}
      </div>
    </div>
  );
}