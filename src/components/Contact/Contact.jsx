import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsFormSubmitted(true);

    if (Object.keys(formErrors).length === 0 && isFormSubmitted) {
      setLoading(true);
      setFormErrors(false);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!values.name) {
      errors.name = "Please Enter Your Name!";
    }
    if (!values.email) {
      errors.email = "Please Enter Your Email!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email!";
    }
    return errors;
  };

  return (
    <>
      <div id="Contact" className="contactcontainer">
        <div className="wrapper">
          <div className="contact">
            <h2 className="contactcontainer sub-heading">Contact Us</h2>

            {formErrors ? (
              <div className="contact-form contactflex">
                <div className="contactflex">
                  <input
                    className="p-text"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                  />
                  <p>{formErrors.name}</p>
                </div>
                <div className="contactflex">
                  <input
                    className="p-text"
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                  />
                  <p>{formErrors.email}</p>
                </div>
                <div>
                  <textarea
                    className="p-text"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                  />
                </div>
                <button
                  type="button"
                  className="btn-dark"
                  onClick={handleSubmit}
                >
                  {!loading ? "Send Message" : "Sending..."}
                </button>
              </div>
            ) : (
              <div>
                <h3 className="contact-msg">Thank you for getting in touch!</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
