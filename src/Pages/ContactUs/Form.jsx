// Form.jsx
import React, { useState } from "react";
import classes from "./Form.module.css"; // Import the module-based CSS directly

const Form = (props) => {
  const [inputValues, setInputValues] = useState({
    Name: "",
    EmailId: "",
    PhoneNumber: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ecommerce-project-c47c1-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(inputValues),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data.");
      }

      console.log("Data submitted successfully:", inputValues);

      setIsSubmitted(true);

      // Clear input values
      setInputValues({
        Name: "",
        EmailId: "",
        PhoneNumber: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <section id="contact" className={classes.ContactSection}>
        <h2>Contact Us</h2>
        <div className={classes.FormContainer}>
          {isSubmitted ? (
            <p className={classes.ThankYouMessage}>Thank you for contacting us.</p>
          ) : (
            <form onSubmit={onSubmit} className={classes.ContactForm}>
              <label htmlFor="Name" className={classes.FormLabel}>
                Name
              </label>
              <input
                name="Name"
                id="Name"
                type="text"
                value={inputValues.Name}
                onChange={handleInput}
                className={classes.FormInput}
              />
              <label htmlFor="EmailId" className={classes.FormLabel}>
                Email ID
              </label>
              <input
                name="EmailId"
                id="EmailId"
                type="email" // Corrected type to "email"
                value={inputValues.EmailId}
                onChange={handleInput}
                className={classes.FormInput}
              />
              <label htmlFor="PhoneNumber" className={classes.FormLabel}>
                Phone Number
              </label>
              <input
                name="PhoneNumber"
                id="PhoneNumber"
                type="tel" // Assuming a phone number, use "tel"
                value={inputValues.PhoneNumber}
                onChange={handleInput}
                className={classes.FormInput}
              />
              <button
                type="submit"
                className={classes.FormBtn} // Add the class directly
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Form;
