import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" action="/submit" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="eg:Preetham Kumar"
            type="text"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="eg:dinopreetham@gmail.com"
            type="email"
            required
          />
          <label htmlFor="message">Feedback</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
