import React, { useState } from 'react';
import FormInput from './FormInput';
import Button from './Button';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message
      })
    })
      .then(() => alert("Thank you for contacting me! I'll get back to you asap"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">Contact Form</h2>
      <FormInput
        inputName="name"
        inputLabel="Your Name:"
        inputType="text"
        inputValue={name}
        onInputChange={e => setName(e.target.value)}
      />

      <FormInput
        inputName="email"
        inputLabel="Your Email:"
        inputType="email"
        inputValue={email}
        onInputChange={e => setEmail(e.target.value)}
      />

      <p className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          onChange={e => setMessage(e.target.value)}
          className="form-control"
          id="message"
          name="message"
          value={message}
        />
      </p>
      <p className="form-group">
        <Button type="submit">Send</Button>
      </p>
    </form>
  );
};

export default ContactForm;
