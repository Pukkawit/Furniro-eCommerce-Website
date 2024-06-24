import React, { useEffect, useState } from "react";
import "./footer.scss";
import Menu from "../nav/menuItems/Menu";
import { navMenuLists } from "../nav/menuItems/navMenuLists";
import { helpMenuLists } from "./helpMenuList";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (emailSuccess) {
      const timer = setTimeout(() => {
        setEmailSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [emailSuccess]);

  const validateEmail = (event) => {
    const { value } = event.target;
    setEmail(value);

    if (!emailRegex.test(event.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
      try {
        // Fetch all emails
        const response = await axios.get(
          "http://localhost:3001/NewsletterEmails"
        );
        const existingEmails = response.data;

        // Check if the email exists
        const emailExists = existingEmails.some(
          (entry) => entry.id === email.toLowerCase()
        );

        if (emailExists) {
          setEmailError("Email is already subscribed.");
        } else {
          await axios.post("http://localhost:3001/NewsletterEmails", {
            id: email,
          });
          setEmail("");
          setEmailSuccess("Your email has been received. Thanks!");
        }
      } catch (error) {
        setEmailError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div id="footer">
      <main>
        <div className="column">
          <h3>Furniro.</h3>
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="menu-lists" id="menuFooter">
          <div className="column">
            <p>Links</p>
            <Menu menuItems={navMenuLists} id="menu" />
          </div>
          <div className="column">
            <p>Help</p>
            <Menu helpMenuItems={helpMenuLists} />
          </div>
        </div>
        <div className="column newsLetter">
          <div className="newsletterForm">
            <p>Newsletter</p>
            <form onSubmit={handleSubmit}>
              <input
                onChange={validateEmail}
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                name="newsletter-email"
                id="newsletter-email"
              />
              <button>Subscribe</button>
            </form>
          </div>
          {emailError && <div className="errorEmail">{emailError}</div>}
          {emailSuccess && <div className="successEmail">{emailSuccess}</div>}
        </div>
      </main>

      <footer>
        <p>2023 Furniro. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
