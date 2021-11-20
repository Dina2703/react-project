import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
          <div className="row text-black-50">
              <div className="col-md-4 text-center my-4">
                  <h5>Locations</h5>
                  <ul className= "list-unstyled">
                      <li><a role="button" className="btn" href="/"><i className="fa fa-map-marker fa-lg" /> 9700 Medlock Road 138</a></li>
                      <li><a role="button" className="btn" href="/"><i className="fa fa-map-marker fa-lg" /> Johns Creek, GA 30022</a></li>
                      <li><a role="button" className="btn" href="/"><i className="fa fa-map-marker fa-lg" /> 2925 Lawrenceville Road</a></li>
                      <li><a  role="button" className="btn"  href="/"><i className="fa fa-map-marker fa-lg" /> Suwanee, GA 30024</a></li>
                  </ul>
              </div>
              <div className="col-md-4 text-center mt-4 ">
                  <h5>Contact</h5>
                  <ul className= "list-unstyled ">
                      <li><a role="button" className="btn" href="order.html" >Order Ahead Online!</a></li>
                      <li><a role="button" className="btn" href="tel:1-206-555-1234">(206)555-1234</a></li>
                      <li><a role="button" className="btn" href="mailto:example@domain.com">example@domain.com</a></li>
                  </ul>
                  <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-lg" /></a>{'  '} 
                  <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-lg" /></a>{'  '} 
                  <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg" /></a>{'  '} 
                  <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube fa-lg" /></a>{'  '} 
              </div>
              <div className="col-md-4  text-center">
                  <h4 className="my-4">Hours</h4>
                  <h6>Every Day</h6>
                  <h6>9am-9pm</h6>
                  <h6 className="py-3">Call Ahead For Holiday Hours!</h6>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer
