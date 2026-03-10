import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemPursuitIcon = ({
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
      className="fill-yellow-400"
      d="M858.58 150.01c-119.95 4.46-350.74 33.56-350.74 33.56S281.54 159.01 165.42 157c-8.86-.15-15.75 7.48-15.41 16.13 8.77 225.78 21.91 443.86 7.57 678.02-.53 8.65 6.92 16.57 15.42 16.13 113.53-5.8 341.38-28.12 341.38-28.12S737.23 868.24 848.99 874c8.51-.07 15.41-7.29 15.42-16.14.28-230.68.64-461.26 9.58-691.72.35-8.83-6.55-16.47-15.41-16.14Z"
      id="regardio-system-pursuit-icon"
    />
  </svg>
);
export default SvgRegardioSystemPursuitIcon;
