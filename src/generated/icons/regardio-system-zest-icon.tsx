import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemZestIcon = ({
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
      className="fill-coral-400"
      d="M822.01 152.4c-1.1-2.52-4.37-3.21-6.37-1.33-158.41 147.85-405.77 113.49-561.45 290.44-118.41 134.6-106.36 234.27-101.11 260.14 16.3 80.44 93.47 148.49 202.18 167.36 46.6 8.09 93.25 6.09 136.21-4.04 20.44-4.82 40.03-11.49 58.38-19.82 251.03-100.53 412.48-370.12 272.16-692.73Z"
      id="regardio-system-zest-icon"
    />
  </svg>
);
export default SvgRegardioSystemZestIcon;
