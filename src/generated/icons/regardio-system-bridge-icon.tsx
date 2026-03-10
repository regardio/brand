import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemBridgeIcon = ({
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
      className="fill-pink-400"
      d="M521.71 150c-128.74-.13-251.85 52.62-350.73 141.87-4.51 4.05-7.24 11.02-7.26 18.46-.24 125.74-9.23 408.54-13.7 534.17-.62 16.57 13.04 28.1 23.37 19.31 88.58-75.33 214.67-141.16 338.59-140.26 123.94 1.17 256.02 60.93 338.62 146.8 9.7 10.08 24.03-2.07 23.37-19.34-4.7-130.82-16.54-410.62-16.67-541.46 0-7.74-2.73-14.95-7.24-19.08-98.86-91.14-180.1-140.59-328.36-140.46Z"
      id="regardio-system-bridge-icon"
    />
  </svg>
);
export default SvgRegardioSystemBridgeIcon;
