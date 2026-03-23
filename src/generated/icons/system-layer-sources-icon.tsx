import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemLayerSourcesIcon = ({
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
      className="fill-coral-400"
      d="M872.64 855.73C705.49 488.48 666.9 419.3 516.58 157.05c-5.57-9.72-18.81-9.24-24.35.49C362.09 386.03 296.88 503.12 151.26 848c-3.59 8.51.81 18.66 9.07 18.26l351.37-9.18c.28-.01.57-.01.85 0L863.56 874c8.26.4 12.9-9.85 9.07-18.26z"
    />
  </svg>
);
export default SvgSystemLayerSourcesIcon;
