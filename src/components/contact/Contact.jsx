import React from "react";
import "./contact.scss";
import PageHeader from "../pageHeader/PageHeader";
import FeaturesComposition from "../featuresComposition/FeaturesComposition";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <div>
      <PageHeader page={"Contact"} role={"Contact"} />
      <div className="container">
        <div className="header">
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="body">
          <div className="contact-address">
            <div className="icon-info">
              <img src="../../../src/assets/icons/location.svg" alt="" />
              <div className="info">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="icon-info">
              <img
                src="../../../src/assets/icons/phone.svg"
                alt=""
                className="phone"
              />
              <div className="info">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="icon-info">
              <img src="../../../src/assets/icons/time.svg" alt="" />
              <div className="info">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                subject: "",
                message: "",
                countryRegion: "",
                streetAddress: "",
                townCity: "",
                province: "",
                zipCode: "",
                phone: "",
                additionalInfo: "",
                paymentOption: "",
              }}
              validationSchema={DisplayingErrorMessagesSchema}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="fullName">Your Name</label>
                      <Field name="fullName" placeholder="Abc" />
                      {touched.fullName && errors.fullName && (
                        <div className="error">{errors.fullName}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <Field name="email" placeholder="Abc@def.com" />
                      {touched.email && errors.email && (
                        <div className="error">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <Field name="subject" placeholder="This is an optional" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <Field
                        name="message"
                        component="textarea"
                        placeholder="Hi! i’d like to ask about"
                      />
                    </div>
                    <button type="button">Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <FeaturesComposition />
    </div>
  );
};

export default Contact;
