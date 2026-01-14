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
    viewBox="0 0 1024 1024"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      className="fill-pink-400"
      d="M521.71 256.09c-127.45 1.58-258.54 38.1-357.42 119.79-4.51 3.71-7.24 10.09-7.26 16.89-.24 115.08-2.54 230.12-7.01 345.1-.62 15.17 12.44 25.03 23.37 17.67 100.9-68.11 214.59-107.96 338.51-107.14 123.94 1.07 237.55 43.06 338.7 116.78 10.97 7.96 24.03-1.9 23.37-17.7-4.7-119.73-7.07-239.47-7.19-359.23 0-7.08-2.73-13.68-7.24-17.46-98.86-83.42-210.34-116.77-337.83-114.7"
    />
  </svg>
);
export default SvgRegardioSystemBridgeIcon;
