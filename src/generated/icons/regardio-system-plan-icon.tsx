import type React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRegardioSystemPlanIcon = ({
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
      className="fill-blue-400"
      d="M839.03 243.95a5104 5104 0 0 0-147.84-91c-7.05-4.18-15.66-3.89-22.53.7-47.92 31.99-96.35 63.8-145.48 95.7-7.04 4.57-15.79 4.82-22.82.68-49.13-28.89-97.56-56.69-145.48-83.72-6.87-3.88-15.48-3.44-22.53 1.12-49.26 31.87-98.87 64.03-147.95 95.94-6.9 4.48-11.26 12.24-11.48 20.39-1.55 57.15-3.38 114.26-5.48 171.34-4.49 121.69-10.26 243.21-17.39 364.57-1.09 17.66 18.46 29.84 34.93 21.82 45.43-22.2 90.05-44.78 134.46-68.11 7.52-3.95 16.71-3.57 24.07 1.01 51.38 32 103.55 64.01 156.05 95.89 7.53 4.57 16.87 4.95 24.4.97 52.51-27.78 104.72-56.75 156.12-86.81 7.37-4.31 16.56-4.16 24.09.42 44.47 27.06 89.19 54.12 134.8 81.57 16.54 9.96 36.12-1.57 34.97-20.78-7.51-131.78-13.49-263.5-18.02-395.15-2.13-61.75-3.94-123.49-5.45-185.21-.21-8.8-4.56-16.93-11.45-21.33z"
    />
  </svg>
);
export default SvgRegardioSystemPlanIcon;
