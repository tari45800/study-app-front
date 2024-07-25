import { type ReactNode } from 'react';

type ButtonTheme = 'primary' | 'secondary';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: 'm' | 's';
  type?: 'submit';
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  children,
  isLoading,
  size = 'm',
  theme = 'primary',
  disabled,
  type,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${theme} ${size}`}
    >
      {isLoading ? 'loading' : children}
    </button>
  );
};
