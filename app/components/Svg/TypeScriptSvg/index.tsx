import { ReactElement } from "react";
import { SvgProps } from "..";

export default function TypeScriptSvg(props: Readonly<SvgProps>): ReactElement {
  return (
    <svg
      {...props}
      width="256px"
      height="256px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <title>TypeScript</title>
      <g>
        <path
          d="M20,0 L236,0 C247.045695,0 256,8.954305 256,20 L256,236 C256,247.045695 247.045695,256 236,256 L20,256 C8.954305,256 0,247.045695 0,236 L0,20 C0,8.954305 8.954305,0 20,0 Z"
          fill="#3178C6"
        />
        <path
          d="M150.518,200.475 L150.518,228.095 C155.01,230.397 160.323,232.123 166.456,233.274 C172.589,234.425 179.053,235 185.849,235 C192.471,235 198.763,234.367 204.723,233.101 C210.683,231.835 215.91,229.749 220.401,226.844 C224.893,223.938 228.449,220.14 231.07,215.45 C233.69,210.761 235,204.964 235,198.059 C235,193.053 234.251,188.665 232.754,184.896 C231.257,181.127 229.097,177.775 226.275,174.841 C223.454,171.906 220.07,169.274 216.126,166.943 C212.181,164.613 207.732,162.412 202.779,160.341 C199.151,158.844 195.898,157.392 193.018,155.982 C190.139,154.572 187.691,153.134 185.676,151.666 C183.66,150.199 182.105,148.645 181.011,147.005 C179.917,145.365 179.37,143.51 179.37,141.438 C179.37,139.539 179.859,137.828 180.838,136.303 C181.817,134.778 183.2,133.469 184.985,132.376 C186.77,131.282 188.958,130.434 191.55,129.829 C194.141,129.225 197.021,128.923 200.188,128.923 C202.492,128.923 204.925,129.096 207.487,129.441 C210.05,129.786 212.627,130.318 215.219,131.038 C217.81,131.757 220.329,132.663 222.777,133.757 C225.224,134.85 227.485,136.116 229.558,137.554 L229.558,111.747 C225.354,110.136 220.761,108.942 215.78,108.165 C210.799,107.388 205.083,107 198.633,107 C192.068,107 185.849,107.705 179.975,109.115 C174.101,110.524 168.932,112.725 164.469,115.717 C160.006,118.71 156.479,122.522 153.887,127.154 C151.296,131.786 150,137.324 150,143.769 C150,151.997 152.375,159.017 157.127,164.829 C161.878,170.64 169.09,175.56 178.765,179.588 C182.566,181.142 186.108,182.666 189.39,184.163 C192.673,185.659 195.509,187.212 197.899,188.823 C200.289,190.434 202.175,192.189 203.557,194.088 C204.939,195.987 205.63,198.145 205.63,200.562 C205.63,202.345 205.198,204 204.334,205.525 C203.471,207.049 202.16,208.373 200.404,209.495 C198.648,210.617 196.459,211.494 193.839,212.127 C191.219,212.76 188.152,213.077 184.639,213.077 C178.65,213.077 172.719,212.027 166.845,209.926 C160.97,207.826 155.528,204.676 150.518,200.475 L150.518,200.475 Z M104.482,131.742 L140,131.742 L140,109 L41,109 L41,131.742 L76.3447,131.742 L76.3447,233 L104.482,233 L104.482,131.742 Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}
