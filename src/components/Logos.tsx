import React from 'react';

/**
 * Direct public folder assets as uploaded by the user in /public:
 * Added cache-buster (?v=3) so browser immediately shows latest files
 * - /SBLogo.png  (SASI IEEE Student Branch - STB64284)
 * - /CS.png      (SASI IEEE Computer Society Chapter - SBC64284)
 * - /aps.png     (SASI IEEE APS Chapter - SBC64284D)
 * - /sps.png     (SASI IEEE SPS Chapter - SBC64284B)
 * - /Wie.jpeg    (IEEE Women in Engineering Affinity Group)
 */
export const EXACT_LOGOS = {
  sb: '/SBLogo.png?v=3',
  cs: '/CS.png?v=3',
  aps: '/aps.png?v=3',
  sps: '/sps.png?v=3',
  wie: '/Wie.jpeg?v=3',
};

// 1. EXACT USER UPLOAD FROM /public/SBLogo.png
export const ExactStudentBranchLogo: React.FC<{ className?: string; imgClassName?: string }> = ({
  className = "p-1",
  imgClassName = "h-12 sm:h-14 w-auto object-contain"
}) => (
  <div className={`inline-flex items-center justify-center bg-white rounded-xl select-none ${className}`}>
    <img
      src="/SBLogo.png?v=3"
      alt="SASI IEEE Student Branch - STB64284"
      className={imgClassName}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  </div>
);

// 2. EXACT USER UPLOAD FROM /public/CS.png
export const ExactComputerSocietyLogo: React.FC<{ className?: string; imgClassName?: string }> = ({
  className = "p-1",
  imgClassName = "h-12 sm:h-14 w-auto object-contain"
}) => (
  <div className={`inline-flex items-center justify-center bg-white rounded-xl select-none ${className}`}>
    <img
      src="/CS.png?v=3"
      alt="SASI IEEE SB Chapter - SBC64284 (Computer Society)"
      className={imgClassName}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  </div>
);

// 3. EXACT USER UPLOAD FROM /public/aps.png
export const ExactApsLogo: React.FC<{ className?: string; imgClassName?: string }> = ({
  className = "p-1",
  imgClassName = "h-12 sm:h-14 w-auto object-contain"
}) => (
  <div className={`inline-flex items-center justify-center bg-white rounded-xl select-none ${className}`}>
    <img
      src="/aps.png?v=3"
      alt="SASI IEEE APS Chapter - SBC64284D (Antennas and Propagation Society)"
      className={imgClassName}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  </div>
);

// 4. EXACT USER UPLOAD FROM /public/sps.png
export const ExactSpsLogo: React.FC<{ className?: string; imgClassName?: string }> = ({
  className = "p-1",
  imgClassName = "h-12 sm:h-14 w-auto object-contain"
}) => (
  <div className={`inline-flex items-center justify-center bg-white rounded-xl select-none ${className}`}>
    <img
      src="/sps.png?v=3"
      alt="SASI IEEE SB Chapter - SBC64284B (Signal Processing Society)"
      className={imgClassName}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  </div>
);

// 5. EXACT USER UPLOAD FROM /public/Wie.jpeg
export const ExactWieLogo: React.FC<{ className?: string; imgClassName?: string }> = ({
  className = "p-1",
  imgClassName = "h-12 sm:h-14 w-auto object-contain"
}) => (
  <div className={`inline-flex items-center justify-center bg-white rounded-xl select-none ${className}`}>
    <img
      src="/Wie.jpeg?v=3"
      alt="IEEE Women in Engineering Affinity Group"
      className={imgClassName}
      referrerPolicy="no-referrer"
      loading="eager"
    />
  </div>
);

// Scrolling Ribbon containing all 5 exact uploaded logos from /public
export const LogosRibbon: React.FC = () => {
  const logos = [
    { id: 'sb', name: 'SASI IEEE Student Branch - STB64284', src: '/SBLogo.png?v=3' },
    { id: 'cs', name: 'SASI IEEE Computer Society Chapter - SBC64284', src: '/CS.png?v=3' },
    { id: 'aps', name: 'SASI IEEE AP-S Chapter - SBC64284D', src: '/aps.png?v=3' },
    { id: 'sps', name: 'SASI IEEE SPS Chapter - SBC64284B', src: '/sps.png?v=3' },
    { id: 'wie', name: 'IEEE Women in Engineering (WIE)', src: '/Wie.jpeg?v=3' },
  ];

  // Duplicated for seamless infinite horizontal marquee
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-white/95 backdrop-blur-md border-y border-slate-200 py-3 shadow-xs select-none">
      {/* Subtle edge gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicatedLogos.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex items-center justify-center mx-3 sm:mx-6 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#00629B]/40 hover:scale-105 transition-all duration-300 shrink-0"
            title={item.name}
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-10 sm:h-12 w-auto max-w-[220px] object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Aliases for seamless component imports
export const SasiSunGear = ExactStudentBranchLogo;
export const ExactSasiLogo = ExactStudentBranchLogo;
export const SasiSbLogo = ExactStudentBranchLogo;
export const ComputerSocietyLogo = ExactComputerSocietyLogo;
export const ApsLogo = ExactApsLogo;
export const SpsLogo = ExactSpsLogo;
export const WieLogo = ExactWieLogo;
