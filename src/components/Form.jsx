"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const theme = "black";
  const logo = theme === "black" ? "logo-white.png" : "logo-black.png";

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true); // Disable the button immediately after form submission

    emailjs
      .sendForm(
        "service_nugbu5h",
        "template_h0i4efh",
        form.current,
        "PCfsq0WoNEqmJ5Prw"
      )
      .then(
        () => {
          alert("Email Sent Successfully!");
          setFormValues({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 2000); // Re-enable the button after 2 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsButtonDisabled(false); // Re-enable the button if there's an error
        }
      );
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-3xl font-medium text-gray-800 max-w-3xl mx-auto">
            Let's work together to grow your business
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-2/3">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-black rounded-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="w-full py-4 px-4 rounded-md bg-white text-gray-800"
                  value={formValues.user_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  name="user_email"
                  className="w-full py-4 px-4 rounded-md bg-white text-gray-800"
                  value={formValues.user_email}
                  onChange={handleChange}
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="w-full py-4 px-4 rounded-md bg-white text-gray-800 mb-4"
                value={formValues.subject}
                onChange={handleChange}
              />

              <textarea
                placeholder="Message"
                name="message"
                className="w-full py-4 px-4 rounded-md bg-white text-gray-800 min-h-[200px] mb-4"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  value="Send"
                  className={`px-8 py-3 rounded-full text-white font-medium ${
                    isButtonDisabled
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  }`}
                  disabled={isButtonDisabled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-60 h-80 overflow-hidden group">
              <div className="absolute inset-0 flex flex-col items-center">
                <img src={`images/${logo}`} alt="Logo" className="w-60 h-60" />
                <h1 className="text-3xl text-[#0f1424] font-bold">Elevex Global</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
