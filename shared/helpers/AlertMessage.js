/* eslint-disable linebreak-style */
import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

function AlertMessage({
  type, message, handleClose, isCloseIconHidden,
}) {
  return (
    <div
      className={`alert alert-dismissible hidden-print alert-${type}`}
      role="alert"
    >
      <button
        className="close"
        type="button"
        aria-label="Close"
        onClick={() => handleClose(false)}
      >
        {!isCloseIconHidden && <span aria-hidden="true">×</span>}
      </button>
      <Trans>{message}</Trans>
    </div>
  );
}

export default withTranslation()(AlertMessage);
