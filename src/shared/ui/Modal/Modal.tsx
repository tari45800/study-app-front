import { useModal } from '@ebay/nice-modal-react';
import { type ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export function Modal(props: Props) {
  const modal = useModal();

  // useEffect(() => {
  //   document.addEventListener('keydown', onEscapeKeyClick)

  //   return () => {
  //     document.removeEventListener('keydown', onEscapeKeyClick)
  //   }
  // }, [])

  // const onEscapeKeyClick = () => modal.remove();

  return (
    <ModalContainer>
      <div className="overlay" onClick={() => modal.remove()}></div>
      <div className="modal">
        <button className="x" onClick={() => modal.remove()}>
          x
        </button>
        {props.children}
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  .overlay {
    position: fixed;
    inset: 0;
    background: #0007;
    z-index: 1000;
  }

  .modal {
    min-height: 200px;
    width: 320px;
    padding: var(--spacing-large);

    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background: white;
    box-shadow: 0 2px 8px 0 rgba(34, 60, 80, 0.4);
    color: #303644;
    z-index: 1001;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .x {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;
