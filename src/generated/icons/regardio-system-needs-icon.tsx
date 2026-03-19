import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemNeedsIcon = ({
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
      className="fill-yellow-400"
      d="M513.22 155.71c163.86 303.8 129.87 268.01 359.22 700.15 4.31 8.12-.81 18.53-9.07 18.13l-350.8-16.8c-.28-.01-.57-.01-.85 0l-351.15 9.12c-8.25.4-13.25-9.95-9.07-18.13 179.32-351.09 146.99-289.15 343.58-691.47 4.07-8.33 13.74-9.16 18.14-1"
    />
  </svg>
);
export default SvgRegardioSystemNeedsIcon;
