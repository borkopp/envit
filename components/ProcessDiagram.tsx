import {motion} from "framer-motion";

export function ProcessDiagram() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl">
      <svg viewBox="0 0 800 400" className="w-full h-auto" style={{maxHeight: "400px"}}>
        {/* Boxes */}
        <g>
          {/* Contaminated soil */}
          <rect x="50" y="100" width="180" height="60" rx="30" fill="#475569" />
          <text x="140" y="138" textAnchor="middle" className="fill-white text-[16px]">
            Contaminated soil
          </text>

          {/* Advanced soil washing */}
          <rect x="300" y="170" width="200" height="60" rx="30" fill="#65a30d" />
          <text x="400" y="208" textAnchor="middle" className="fill-white text-[16px]">
            Advanced soil washing
          </text>

          {/* Process solutions */}
          <rect x="570" y="170" width="180" height="60" rx="30" fill="#475569" />
          <text x="660" y="208" textAnchor="middle" className="fill-white text-[16px]">
            Process solutions
          </text>

          {/* Clean soil */}
          <rect x="50" y="240" width="180" height="60" rx="30" fill="#65a30d" />
          <text x="140" y="278" textAnchor="middle" className="fill-white text-[16px]">
            Clean soil
          </text>

          {/* Recycling process */}
          <rect x="570" y="100" width="180" height="60" rx="30" fill="#475569" />
          <text x="660" y="138" textAnchor="middle" className="fill-white text-[16px]">
            Recycling process
          </text>

          {/* Solid waste */}
          <rect x="570" y="240" width="180" height="60" rx="30" fill="#475569" />
          <text x="660" y="278" textAnchor="middle" className="fill-white text-[16px]">
            Solid waste
          </text>
        </g>

        {/* Arrows */}
        <g>
          {/* Contaminated soil to Advanced soil washing */}
          <path
            d="M230 130 L270 130 Q280 130 280 140 L280 190 Q280 200 300 200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Advanced soil washing to Process solutions */}
          <path
            d="M500 200 L550 200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Advanced soil washing to Clean soil */}
          <path
            d="M300 200 L280 200 Q270 200 270 210 L270 270 Q270 270 230 270"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Process solutions to Recycling process */}
          <path
            d="M660 170 L660 160"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Recycling process to Advanced soil washing */}
          <path
            d="M570 130 L520 130 Q510 130 510 140 L510 190 Q510 200 500 200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Process solutions to Solid waste */}
          <path
            d="M660 230 L660 240"
            fill="none"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="black" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
