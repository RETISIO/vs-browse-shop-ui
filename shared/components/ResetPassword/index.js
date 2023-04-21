import { useState } from 'react';
import { ResetPasswordModal } from '@retisio/sf-ui';
import { Modal } from 'react-bootstrap';
import { requestContructor }from '../../helpers/api';
import ForgotPassword from './ForgotPassword';

export function Index(props) {
  const [modal, updateModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [errorBanner, setErrorBanner] = useState(false);

  const handleSubmitForm = async(data) => {
    const resetPasswordData = await requestContructor(
      'forgotpassword',
      '',
      { method: 'POST', data },
    ).then((data) => {
      if(data) {
        props.close(false);
        updateModal(true);
      }
    })
      .catch((error) => {
        if (error?.status === 400) {
          setErrorBanner(true);
          setAlertMsg(error?.errors[0]?.message);
        }
      });
    return resetPasswordData;
  };

  return (
    <div>
      {props.children}
      <Modal
        show={props.open}
        onHide={() => {
          props.close(false);
        }}
      >
        <ResetPasswordModal
          onClose={() => {
            props.close(false);
          }}
          handleSubmitForm={(data) => handleSubmitForm(data)}
          {...{ errorBanner, setErrorBanner, alertMsg }}
        />
      </Modal>
      <ForgotPassword modal={modal} updateModal={updateModal} />
    </div>
  );
}
export default Index;
