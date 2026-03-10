import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemFacetIcon = ({
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
      className="fill-teal-400"
      d="M873.99 712.39c-4.67-117.61-11.57-283.57-13.85-401.21-.12-5.87-3.55-11.32-9.05-14.29-110.07-59.6-207.17-94.49-330.36-145.33-5.65-2.33-12.07-1.96-17.8.55-123.05 53.78-219.01 81.35-329.17 141.03-5.49 2.97-8.94 8.21-9.06 13.74-2.34 110.82-10.27 296.34-14.69 407.01-.22 5.52 2.85 11.09 8.51 13.73 117.44 54.91 221.29 91.41 343.86 144.1 6.02 2.59 13.08 3.25 18.9.56 124.9-57.62 224.6-90.44 344.21-145.6 5.68-2.62 8.72-8.42 8.49-14.29Z"
      id="regardio-system-facet-icon"
    />
  </svg>
);
export default SvgRegardioSystemFacetIcon;
