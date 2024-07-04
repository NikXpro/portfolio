import React from "react";
import "./ContactForm.scss";

export const ContactForm: React.FC = () => {
  return (
    <form className="contact-form">
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <textarea
          id="message"
          name="message"
          className="form-control textarea"
          rows={5}
          placeholder="Message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
