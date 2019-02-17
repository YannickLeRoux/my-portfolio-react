import React from 'react';
import ContactForm from '../ContactFormHook';

import '../../assets/css/Contact-Form-Clean.css';

const Contact = () => (
  <React.Fragment>
    <div className="contact-clean">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4 col-sm-12 my-auto text-center">
            <p className="text-center">
              {' '}
                Please let me know how I could help you!{' '}
              <span role="img" aria-label="hand writing emoji">
                  ✍️
              </span>{' '}
            </p>
            <p>
                Are you looking to add a highly motivated Junior Developer to your team ?{' '}
              <span role="img" aria-label="eager developer emoji">
                  🙋‍♂️
              </span>
            </p>
            <p>Do you just need a cool website? </p>

            <p className="text-center mb-2">I am looking forward to hearing from you!</p>
          </div>
          <div className="col-md-8 col-sm-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export { Contact };
