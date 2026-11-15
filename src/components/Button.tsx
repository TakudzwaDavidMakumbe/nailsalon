import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  onClick?: () => void;
}

interface ActionButtonProps extends BaseProps {
  to?: undefined;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#644e43] text-[#f8f5ef] hover:bg-[#503b32] border border-transparent shadow-none',
  secondary:
    'bg-transparent text-[#251d1b] border border-[#644e43] hover:bg-[#efe8df]',
  ghost:
    'bg-transparent text-[#251d1b] border border-transparent hover:bg-[#efe8df]',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-[6px] px-5 py-2.5 text-[14px] font-medium tracking-[-0.01em] whitespace-nowrap shrink-0 transition-all duration-300 ease-out active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#644e43] disabled:opacity-50 disabled:cursor-not-allowed';

export function StudioButton(props: LinkButtonProps | ActionButtonProps) {
  const variant = props.variant ?? 'primary';
  const classes = `${baseClasses} ${variantClasses[variant]} ${props.className ?? ''}`;

  if (typeof props.to === 'string') {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
    >
      {props.children}
    </button>
  );
}
