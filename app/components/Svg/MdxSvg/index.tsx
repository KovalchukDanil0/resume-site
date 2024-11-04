import { ReactElement } from "react";
import { SvgProps } from "..";

export default function MdxSvg(props: Readonly<SvgProps>): ReactElement {
  return (
    <svg
      {...props}
      width="512px"
      height="212px"
      viewBox="0 0 512 212"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M19.4782609,2.7826087 L492.521739,2.7826087 C501.742493,2.7826087 509.217391,10.2575068 509.217391,19.4782609 L509.217391,192 C509.217391,201.220754 501.742493,208.695652 492.521739,208.695652 L19.4782609,208.695652 C10.2575068,208.695652 2.7826087,201.220754 2.7826087,192 L2.7826087,19.4782609 C2.7826087,10.2575068 10.2575068,2.7826087 19.4782609,2.7826087 Z"
          fill="#FFFFFF"
        />
        <path
          d="M19.4782609,0 L492.521739,0 C503.279286,0 512,8.72071444 512,19.4782609 L512,192 C512,202.757546 503.279286,211.478261 492.521739,211.478261 L19.4782609,211.478261 C8.72071444,211.478261 0,202.757546 0,192 L0,19.4782609 C0,8.72071444 8.72071444,0 19.4782609,0 Z M19.4782609,5.56521739 C11.7942991,5.56521739 5.56521739,11.7942991 5.56521739,19.4782609 L5.56521739,192 C5.56521739,199.683962 11.7942991,205.913043 19.4782609,205.913043 L492.521739,205.913043 C500.205701,205.913043 506.434783,199.683962 506.434783,192 L506.434783,19.4782609 C506.434783,11.7942991 500.205701,5.56521739 492.521739,5.56521739 L19.4782609,5.56521739 Z"
          fill="#EAEAEA"
        />
        <polygon
          fill="#000000"
          points="272.695652 40.2031304 272.694464 125.098667 303.878525 93.920837 319.61875 109.662235 261.97675 167.299939 203.607855 108.931044 219.348667 93.1902318 250.433594 124.275014 250.434783 40.2031304"
        />
        <polygon
          fill="#000000"
          points="72.1623188 162.979246 72.1623188 97.2318069 112.416825 137.489219 152.976696 96.9322596 152.976696 162.31513 175.237565 162.31513 175.237565 43.192494 112.417958 106.007592 49.9014493 43.4865699 49.9014493 162.979246"
        />
        <polygon
          fill="#F9AC00"
          points="447.84683 36.6511988 463.587373 52.3922795 416.437797 99.5394783 462.136706 145.239721 446.396163 160.980801 400.695652 115.281623 354.995141 160.980801 339.254598 145.239721 384.949797 99.5394783 337.803931 52.3922795 353.544474 36.6511988 400.695652 83.7973333"
        />
      </g>
    </svg>
  );
}
