import React from "react";

// SVG de la máscara como data URL (evita errores de ruta).
const MASK = `data:image/svg+xml;utf8,
<svg width='510' height='277' viewBox='0 0 510 277' xmlns='http://www.w3.org/2000/svg'>
  <path d='M160 0C171.046 0 180 8.95431 180 20V25H498C504.627 25 510 30.3726 510 37V257C510 267.941 501.06 277 490.118 277H19.8824C8.94044 277 0 267.941 0 257V20C0 8.95431 8.95431 0 20 0H160Z' fill='white'/>
</svg>`;

const maskStyle = {
  WebkitMaskImage: `url("${MASK}")`,
  maskImage: `url("${MASK}")`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

const WorkCard = ({ title, image, color }) => {
  return (
    <div className="relative w-[510px] h-[277px]">
      {/* Sombra de color */}
      <div
        className="absolute inset-0 z-0"
        style={{
          ...maskStyle,
          backgroundColor: color,
          transform: "translate(10px, 10px)",
        }}
      />

      {/* Card con máscara */}
      <div className="absolute inset-0 z-10" style={maskStyle}>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Overlay*/}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
