import { useState } from 'react';
import { ResetPasswordModal } from "@retisio/sf-ui";
import { Modal } from 'react-bootstrap';
import requestContructor from '../../helpers/api';
import ForgotPassword from "./ForgotPassword";

export function Index(props) {
  const [ modal, updateModal ] = useState(false);
  const handleSubmitForm = async(data) => {
    const resetPasswordData = await requestContructor.request('forgotpassword',
      {method:'POST',data: data},'').then((data) => {
        if(data){
          props.close(false);
          updateModal(true);
        }});
      return resetPasswordData;
    }

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
          />
        </Modal>
        <ForgotPassword modal={modal} updateModal={updateModal} />
    </div>
  )
}
export default Index;
