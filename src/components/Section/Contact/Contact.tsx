import { Icon } from "@components/Ui";
import { Input } from "@components/Ui/Input/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import "./Contact.scss";

export const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (e.target.value.trim()) {
      setFullNameError(false);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.trim()) {
      setEmailError(false);
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (e.target.value.trim()) {
      setMessageError(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    if (!fullName.trim()) {
      setFullNameError(true);
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError(true);
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError(true);
      hasError = true;
    }

    if (!hasError) {
      // Submit the form or perform any other action
    }
  };

  return (
    <div className="contact">
      <h1 className="form-title">Me contacter</h1>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Full Name"
            value={fullName}
            name="fullName"
            error={fullNameError}
            onChange={handleFullNameChange}
            placeholder="Please enter your full name"
          />
          <Input
            type="email"
            label="Email"
            value={email}
            name="email"
            error={emailError}
            onChange={handleEmailChange}
            placeholder="Please enter your email"
          />
          <Input
            type="text"
            label="Message"
            value={message}
            name="message"
            error={messageError}
            onChange={handleMessageChange}
            placeholder="Please enter your message"
          />
          <button type="submit">Submit</button>
        </form>
        <div className="qrcode">
          <Icon
            id="qrcode"
            style={{ width: "20rem", height: "20rem", fill: "white" }}
          />
        </div>
      </div>
    </div>
  );
};
