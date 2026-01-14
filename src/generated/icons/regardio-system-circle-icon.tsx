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
    viewBox="0 0 1024 1024"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      className="fill-lime-400"
      d="M872.95 511.91c-7.09 103.44-51.14 198.46-116.15 264.18-65.08 66.1-151.53 102.52-244.81 97.45-186.2-9.88-346.78-175.36-361.02-361.14-7.18-93.37 25.55-180.18 90.87-246.17 64.7-65.85 162.5-110.57 270.15-115.67 107.64-5.57 205.9 30.74 270.65 96.93 65.41 65.78 97.75 161.01 90.31 264.42"
    />
  </svg>
);
export default SvgRegardioSystemCircleIcon;
