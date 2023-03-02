import React from 'react';
import { Button, Modal } from 'antd';
import { IMessageModalProps } from './types';
import { Text } from '../typography';
import { ModalContentWrapper } from './styled';
import { ReactSVG } from 'react-svg';
import NoDataImg from '../../../assets/svg/no-data.svg';

const MessageModal: React.FC<IMessageModalProps> = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      closable
      onCancel={() => setOpen(false)}
      onOk={() => setOpen(false)}
      footer={false}
    >
      <ModalContentWrapper>
        <div className='content-wrapper'>
          <ReactSVG src={NoDataImg} />
          <div className='content'>
            <Text variation='xl' weight='semiBold'>
              Coming Soon
            </Text>
            <Text variation='md' weight='normal'>
              The wait is almost over! We're putting the finishing touches on
              some amazing new features that we can't wait to release. Stay
              tuned for more information!
            </Text>
          </div>
        </div>
        <div className='button-wrapper'>
          <Button onClick={() => setOpen(false)}>Dismiss</Button>
          <Button onClick={() => setOpen(false)} type='primary'>
            Notify Me
          </Button>
        </div>
      </ModalContentWrapper>
    </Modal>
  );
};

export default MessageModal;
