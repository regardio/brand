import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemPursuitIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      d="M848.99 874c-111.76-5.76-334.61-34.84-334.61-34.84S286.52 861.48 173 867.28c-8.5.43-15.95-7.48-15.42-16.13 14.34-234.16 1.2-452.24-7.57-678.02-.34-8.65 6.55-16.28 15.41-16.13 116.12 2 342.42 26.57 342.42 26.57s230.8-29.09 350.74-33.56c8.86-.33 15.76 7.3 15.41 16.14-8.95 230.46-9.31 461.04-9.58 691.72 0 8.84-6.91 16.07-15.42 16.14z"
    />
  </svg>
);
export default SvgRegardioSystemPursuitIcon;
