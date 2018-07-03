import React from 'react';
import FormInput from './FormInput';

const ContactForm = () => {
  return (
    <form  name="contact" method="POST" netlify>
      <h2 className="text-center">Contact Form</h2>
      <FormInput
        name="name"
        label="Your Name:"
        type="text" />

      <FormInput
        name="email"
        label="Your Email:"
        type="email" />

      <p className="form-group">
        <label for="message">Message:</label>
        <textarea className="form-control" id="message" name="message"></textarea>
      </p>
      <p className="form-group">
        <button className="btn btn-primary btn-lg hero-button"type="submit">Send</button>
      </p>
    </form>

  );
};

export default ContactForm;