import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemCircleIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps): React.JSX.Element => (
  <svg
    aria-labelledby={titleId}
    height="1em"
    id="Gestaltung"
    viewBox="0 0 1024 1024"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      className="fill-lime-400"
      d="M782.64 247.48c-64.75-66.19-163.01-102.5-270.65-96.93-107.65 5.09-205.45 49.82-270.15 115.67-65.32 65.99-98.05 152.8-90.87 246.17 14.24 185.78 174.81 351.26 361.02 361.14 93.28 5.07 179.73-31.34 244.81-97.45 65-65.71 109.06-160.74 116.15-264.18 7.44-103.42-24.9-198.64-90.31-264.42"
      id="regardio-system-circle-icon"
    />
  </svg>
);
export default SvgRegardioSystemCircleIcon;
