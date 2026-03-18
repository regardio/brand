import { Button as BaseButton } from '@regardio/react/button';
import { cn } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

/**
 * Regardio branded button component
 *
 * Design: Flat blue, no border, ample padding, Georama bold font
 * This represents the Regardio visual identity and should be used
 * consistently across all Regardio applications.
 */

export interface ButtonProps extends ComponentProps<typeof BaseButton> {
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps): React.JSX.Element => {
  return (
    <BaseButton
      className={cn(
        'px-6',
        'py-3',
        'text-base',
        'font-bold',
        'rounded-lg',
        'focus-visible:ring-2',
        'focus-visible:ring-ring',
        'focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export type { ButtonVariant } from '@regardio/react/button';
