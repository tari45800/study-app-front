import { type ReactNode } from 'react';
import styled from 'styled-components';

type ButtonTheme = 'primary' | 'secondary' | 'icon';

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: 'l' | 'm' | 's';
  type?: 'submit';
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  children,
  isLoading,
  size = 'l',
  theme = 'secondary',
  disabled,
  type,
}: Props) => {
  return (
    <ButtonContainer>
      <div className={`buttonHover ${theme} ${size}`}>
        <button type={type} disabled={disabled} onClick={onClick}>
          {isLoading ? 'loading' : children}
        </button>
      </div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5rem;

  .l {
  }
  .m {
  }
  .s {
  }

  .buttonHover {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 2.5rem;
    border-radius: 0.5rem;
    transition: 0.2s;
    cursor: pointer;
  }

  button {
    font-weight: 600;
    transition: 0.2s;
    width: 100%;
    height: 100%;
    padding: 0.7rem;
  }

  .primary {
    background-color: var(--prime-color);

    button {
      color: white;
    }
  }

  .secondary {
    background-color: var(--button-color);
    border: 0.05rem solid var(--header-icon-color);

    button {
      color: var(--button-text-color);
    }
  }

  .icon {
    background-color: var(--blur-button-color);

    button {
      color: var(--blur-button-text-color);
      font-weight: bold;
    }
  }

  .buttonHover:hover button {
    font-size: 0.8rem;
  }

  .buttonHover:hover {
    width: calc(100% - 0.2rem);
    height: 2.3rem;
  }
`;
