import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <h1>Contact me</h1>
      <div className="contact-clean">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-4 col-sm-12 my-auto text-center">
              <p className="text-center"> Please let me know how I could help you! ✍️ </p>
              <p>Are you looking to add a highly motivated Junior Developer to your team ? 🙋‍♂️</p>
              <p>Do you just need a cool website? </p>

              <p className="text-center mb-2">I am looking forward to hearing from you!</p>
            </div>
            <div className="col-md-8 col-sm-12">

              <form method="post" noValidate>
                <h2 className="text-center">Contact Form</h2>
                <div className="form-group">
                  <div className="form-group">
                    <button className="btn btn-primary btn-lg hero-button" type="submit"> Send </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

};



export { Contact };
