import { useModal, create as createModal } from '@ebay/nice-modal-react';
import { Button, Modal } from '../ui';
import styled from 'styled-components';

type Props = {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
};

const ConfirmModalPresenter = (props: Props) => {
  const {
    title,
    onConfirm,
    onCancel,
    confirmText = '네',
    cancelText = '아니요',
  } = props;

  return (
    <Modal>
      <ConfirmModalPresenterContainer>
        <div>{title}</div>
        <div className="modalButtonBox">
          <Button onClick={onConfirm}>{confirmText}</Button>
          <Button theme="icon" onClick={onCancel}>
            {cancelText}
          </Button>
        </div>
      </ConfirmModalPresenterContainer>
    </Modal>
  );
};

const ConfirmModalPresenterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .modalButtonBox {
    width: 100%;
    display: flex;
    gap: 1rem;
  }
`;

export const ConfirmModal = createModal(ConfirmModalPresenter);

export const useConfirmModal = () => {
  return useModal(ConfirmModal);
};
