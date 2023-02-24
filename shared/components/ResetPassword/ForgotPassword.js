import { Modal } from 'react-bootstrap';

function ForgotPassword(props) {
  return (
    <div>
        {props.children}
        <Modal
            show={props.modal}
            onHide={() => {
              props.updateModal(false);
            }}
          >
         <form autoComplete="off" noValidate="">
			<div className="modal-content">
				<div className="modal-header">
					<button className="close close-popup" type="button" data-dismiss="modal" aria-label="Close" onClick={() => props.updateModal(false)}><i className="fa fa-times-circle" aria-hidden="true"></i></button>
					<span className="modal-title">Forgot Your Password?</span>
				</div>
				<div className="modal-body">
					<div className="modal-inner">
						<p>A new secure reset password link has been sent.  Please be sure to check your email &apos;Spam&apos;/&apos;Junk&apos; folder as well.</p>
						<p>If you do not receive it, please contact Customer Service at info@allenbrothers.com or 1.800.548.7777</p>
					</div>
				</div>
				<div className="modal-footer">
					<hr />
					<div className="modal-footer-inner">
						<button className="btn btn-action btn-action-md btn-action-primary" type="button" data-dismiss="modal"  onClick={() => props.updateModal(false)}>Close</button>
					</div>
				</div>
			</div>
		</form>
        </Modal>
    </div>
  )
}
export default ForgotPassword;
