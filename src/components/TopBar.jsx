import React from 'react';

function TopBar() {
  return (
    <div>
        <div className="top-bar">
        <div className="container">
            <div className="col-12 ml-4 ml-lg-1 text-right">
                <a role="button" className="btn btn-link" href="tel:1-206-555-1234"><i className="fa fa-phone fa-lg text-light" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Call us at <br/> <strong>1-206-555-1234</strong> " /></a>
                <a role="button" className="btn btn-link" href="mailto:example@domain.com"><i className="fa fa-envelope fa-lg text-light" data-toggle="tooltip" data-html="true" data-placement="bottom" title="Text us <br/> <strong>examp@domain.com</strong> " /></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
