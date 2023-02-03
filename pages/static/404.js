import React from 'react';

export default function errorRedirect() {
    return (
        <div className="error-page d-flex align-items-center justify-content-center">
            <div className="container">
                <h1 className="error-title text-center">
                    <span>404</span>
                </h1>
                <p className="error-description text-center">
                    <span>WE ARE SORRY, BUT THE PAGE YOU ARE LOOKING FOR CANNOT BE FOUND.</span>
                </p>
                <ul className="error-list">
                    <li>
                        <span>If you typed the URL directly, please make sure the spelling is correct.</span>
                    </li>
                    <li>
                        <span>If you clicked on a link to get here, we must have moved the content.</span>
                    </li>
                    <li>
                        <span>Please try our store search box above to search for an item.</span>
                    </li>
                    <li>
                        <span>If you are not sure how you got here, go back to the previous page or return to our store homepage.</span>
                    </li>

                </ul>
                <div className="error-action d-flex justify-content-center">
                    <a className="btn btn-action btn-action-md btn-action-default" href="">
                        <span>BACK</span>
                    </a>
                    <a className="btn btn-action btn-action-md btn-action-primary" href="">
                        <span>RETURN HOME</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
