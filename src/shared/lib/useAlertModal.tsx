import { create, useModal } from '@ebay/nice-modal-react';
import { Modal } from '../ui/Modal/Modal';

type Props = {
  title: string;
  onButtonClick: () => void;
  buttonText?: string;
};

const AlertModalPresenter = (props: Props) => {
  const { title, onButtonClick, buttonText = 'Okay' } = props;

  return (
    <Modal>
      <span>{title}</span>
      <button onClick={onButtonClick}>{buttonText}</button>
    </Modal>
  );
};

export const AlertModal = create(AlertModalPresenter);

export const useAlertModal = () => {
  return useModal(AlertModal);
};
