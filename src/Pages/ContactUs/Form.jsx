// Remove the import statement for 'classes'
import React, { useState } from "react";
import "./Form.module.css";

const Form = (props) => {
  const [inputValues, setInputValues] = useState({
    Name: "",
    EmailId: "",
    PhoneNumber: "",
  });

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
      <section id="contact">
        <h2>Contact Us</h2>
        <div className="Form__div">
          <form onSubmit={onSubmit}>
            <label htmlFor="Name">Name</label>
            <input
              name="Name"
              id="Name"
              type="text"
              value={inputValues.Name}
              onChange={handleInput}
            />
            <label htmlFor="EmailId">Email ID</label>
            <input
              name="EmailId"
              id="EmailId"
              type="text"
              value={inputValues.EmailId}
              onChange={handleInput}
            />
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
              name="PhoneNumber"
              id="PhoneNumber"
              type="number"
              value={inputValues.PhoneNumber}
              onChange={handleInput}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "15px",
                border: "none",
                cursor: "pointer",
                width: "40%",
                fontSize: "1.2em",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
