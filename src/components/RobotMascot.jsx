import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const EYE_LIMIT_X = 6;
const EYE_LIMIT_Y = 5;

export default function RobotMascot({ focusState }) {
  const mascotRef = useRef(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [blinking, setBlinking] = useState(false);
  const animFrameRef = useRef(null);
  const blinkTimerRef = useRef(null);

  // Eye tracking via mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (focusState === 'password') return;
      if (!mascotRef.current) return;

      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const factor = Math.min(dist / 300, 1);

      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(() => {
        setEyeOffset({
          x: (dx / dist) * EYE_LIMIT_X * factor,
          y: (dy / dist) * EYE_LIMIT_Y * factor,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [focusState]);

  // Auto-blink every 3-5 seconds
  useEffect(() => {
    const scheduleBlink = () => {
      blinkTimerRef.current = setTimeout(() => {
        setBlinking(true);
        setTimeout(() => setBlinking(false), 150);
        scheduleBlink();
      }, 3000 + Math.random() * 2000);
    };
    scheduleBlink();
    return () => clearTimeout(blinkTimerRef.current);
  }, []);

  const isPasswordFocus = focusState === 'password';
  const isEmailFocus = focusState === 'email';
  const headTilt = isEmailFocus ? -8 : 0;
  const antennaBounce = isEmailFocus ? -4 : 0;

  return (
    <div ref={mascotRef} className="flex flex-col items-center">
      <svg
        width="130"
        height="150"
        viewBox="0 0 130 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 8px 24px rgba(65,63,160,0.18))',
          transform: `rotate(${headTilt}deg)`,
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <defs>
          <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#6B69C1" />
            <stop offset="100%" stopColor="#2E2C7A" />
          </radialGradient>
          <radialGradient id="faceGrad" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#7B79D1" />
            <stop offset="100%" stopColor="#413FA0" />
          </radialGradient>
          <radialGradient id="eyeGlowL" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A8F0FF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </radialGradient>
          <radialGradient id="eyeGlowR" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A8F0FF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="leftEyeClip">
            <ellipse cx="44" cy="72" rx="13" ry="13" />
          </clipPath>
          <clipPath id="rightEyeClip">
            <ellipse cx="86" cy="72" rx="13" ry="13" />
          </clipPath>
        </defs>

        {/* Antenna */}
        <g style={{ transform: `translateY(${antennaBounce}px)`, transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>
          <line x1="65" y1="14" x2="65" y2="30" stroke="#413FA0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="65" cy="10" r="6" fill="#38BDF8" filter="url(#glow)" />
          <circle cx="65" cy="10" r="6" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.4">
            <animate attributeName="r" values="6;11;6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Neck */}
        <rect x="55" y="118" width="20" height="10" rx="4" fill="#2E2C7A" />

        {/* Body */}
        <rect x="25" y="125" width="80" height="20" rx="10" fill="url(#bodyGrad)" />
        <rect x="45" y="131" width="14" height="8" rx="3" fill="#38BDF8" opacity="0.3" />
        <rect x="71" y="131" width="14" height="8" rx="3" fill="#38BDF8" opacity="0.3" />
        <circle cx="65" cy="135" r="4" fill="#38BDF8" opacity="0.6" filter="url(#glow)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* Head */}
        <rect x="18" y="30" width="94" height="90" rx="22" fill="url(#faceGrad)" />
        <ellipse cx="50" cy="42" rx="22" ry="8" fill="white" opacity="0.08" />

        {/* Ear bolts */}
        <circle cx="18" cy="72" r="6" fill="#2E2C7A" />
        <circle cx="18" cy="72" r="3" fill="#38BDF8" opacity="0.5" />
        <circle cx="112" cy="72" r="6" fill="#2E2C7A" />
        <circle cx="112" cy="72" r="3" fill="#38BDF8" opacity="0.5" />

        {/* Eye sockets */}
        <ellipse cx="44" cy="72" rx="16" ry="16" fill="#1a1850" />
        <ellipse cx="86" cy="72" rx="16" ry="16" fill="#1a1850" />

        {isPasswordFocus ? (
          <>
            <g style={{ animation: 'slideDownL 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards' }}>
              <style>{`
                @keyframes slideDownL {
                  from { transform: translateY(-30px); opacity: 0; }
                  to   { transform: translateY(0);     opacity: 1; }
                }
                @keyframes slideDownR {
                  from { transform: translateY(-30px); opacity: 0; }
                  to   { transform: translateY(0);     opacity: 1; }
                }
              `}</style>
              <rect x="26" y="56" width="36" height="30" rx="10" fill="#2E2C7A" stroke="#38BDF8" strokeWidth="1.5" />
              <line x1="34" y1="56" x2="34" y2="86" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
              <line x1="44" y1="56" x2="44" y2="86" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
              <line x1="54" y1="56" x2="54" y2="86" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
            </g>
            <g style={{ animation: 'slideDownR 0.35s cubic-bezier(0.34,1.56,0.64,1) 0.05s forwards', opacity: 0 }}>
              <rect x="68" y="56" width="36" height="30" rx="10" fill="#2E2C7A" stroke="#38BDF8" strokeWidth="1.5" />
              <line x1="76" y1="56" x2="76" y2="86" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
              <line x1="86" y1="56" x2="86" y2="86" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
              <line x1="96" y1="56" x2="96" y2="86" stroke="#38BDF8" strokeWidth="1" opacity="0.3" />
            </g>
            <text x="52" y="62" fontSize="10" textAnchor="middle" fill="#38BDF8" opacity="0.7">👀</text>
          </>
        ) : (
          <>
            <ellipse cx="44" cy="72" rx="13" ry={blinking ? 1 : 13} fill="url(#eyeGlowL)"
              style={{ transition: 'ry 0.08s ease' }} />
            {!blinking && (
              <g clipPath="url(#leftEyeClip)">
                <circle cx={44 + eyeOffset.x} cy={72 + eyeOffset.y} r="6" fill="#0EA5E9"
                  style={{ transition: 'cx 0.08s linear, cy 0.08s linear' }} />
                <circle cx={44 + eyeOffset.x + 2} cy={72 + eyeOffset.y - 2} r="2" fill="white" opacity="0.9"
                  style={{ transition: 'cx 0.08s linear, cy 0.08s linear' }} />
              </g>
            )}
            <ellipse cx="86" cy="72" rx="13" ry={blinking ? 1 : 13} fill="url(#eyeGlowR)"
              style={{ transition: 'ry 0.08s ease' }} />
            {!blinking && (
              <g clipPath="url(#rightEyeClip)">
                <circle cx={86 + eyeOffset.x} cy={72 + eyeOffset.y} r="6" fill="#0EA5E9"
                  style={{ transition: 'cx 0.08s linear, cy 0.08s linear' }} />
                <circle cx={86 + eyeOffset.x + 2} cy={72 + eyeOffset.y - 2} r="2" fill="white" opacity="0.9"
                  style={{ transition: 'cx 0.08s linear, cy 0.08s linear' }} />
              </g>
            )}
          </>
        )}

        {/* Mouth */}
        {isPasswordFocus ? (
          <ellipse cx="65" cy="103" rx="7" ry="5" fill="#1a1850" stroke="#38BDF8" strokeWidth="1" />
        ) : isEmailFocus ? (
          <path d="M52 101 Q65 112 78 101" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        ) : (
          <path d="M55 102 Q65 109 75 102" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" fill="none" />
        )}

        {/* Blush */}
        {isPasswordFocus && (
          <>
            <ellipse cx="32" cy="90" rx="8" ry="5" fill="#FF6B9D" opacity="0.35" />
            <ellipse cx="98" cy="90" rx="8" ry="5" fill="#FF6B9D" opacity="0.35" />
          </>
        )}

        {/* Typing dots */}
        {isEmailFocus && (
          <g>
            <circle cx="53" cy="116" r="2.5" fill="#38BDF8">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.9s" begin="0s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="116" r="2.5" fill="#38BDF8">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.9s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="77" cy="116" r="2.5" fill="#38BDF8">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.9s" begin="0.6s" repeatCount="indefinite" />
            </circle>
          </g>
        )}
      </svg>

      {/* Status label */}
      <div
        className="mt-2 text-xxs font-semibold tracking-wide px-3 py-1 rounded-full text-center"
        style={{
          backgroundColor: isPasswordFocus ? 'rgba(255,107,157,0.15)' : 'rgba(56,189,248,0.12)',
          color: isPasswordFocus ? '#FF6B9D' : '#38BDF8',
          transition: 'all 0.3s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {isPasswordFocus ? '🙈 Privacy mode' : isEmailFocus ? '👀 Watching you type...' : '👋 Hello there!'}
      </div>
    </div>
  );
}

RobotMascot.propTypes = {
  focusState: PropTypes.oneOf(['email', 'password', null]),
};

RobotMascot.defaultProps = {
  focusState: null,
};