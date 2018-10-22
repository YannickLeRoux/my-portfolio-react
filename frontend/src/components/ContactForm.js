import React, { Component } from 'react';
import FormInput from './FormInput';
import Button from './Button';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Thank you for contacting me! I'll get back to you asap"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { name, email, message } = this.state;

    return (
      <form  onSubmit={this.handleSubmit}>
        <h2 className="text-center">Contact Form</h2>
        <FormInput
          inputName="name"
          inputLabel="Your Name:"
          inputType="text"
          inputValue={ name }
          onInputChange={this.handleChange} />

        <FormInput
          inputName="email"
          inputLabel="Your Email:"
          inputType="email"
          inputValue={email}
          onInputChange={this.handleChange} />


        <p className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea onChange={this.handleChange} className="form-control" id="message" name="message" value={message}></textarea>
        </p>
        <p className="form-group">
          <Button type="submit">Send</Button>
        </p>
      </form>

    );

  }
};

export default ContactForm;