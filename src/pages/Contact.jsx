import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const result = await fetch(
      "https://contact-form-mailer-v1.herokuapp.com/api/v1/sendmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await result.json();
    if (data.success) {
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsDisabled(false);
    } else {
      toast.error(data.message);
      setIsDisabled(false);
    }
  };

  return (
    <div className="font-gothaml">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className=" [&>input]:w-3/4  [&>input]:text-primaryBlack [&>input]:px-2 [&>input]:py-1 [&>input]:outline-none [&>input]:text-sm  [&>input]:font-bold [&>p]:mt-4 "
      >
        <p className="text-sm">Name *</p>
        <input
          type="text"
          name="name"
          required
          className="w-3/4"
          onChange={handleChange}
          value={formData.name}
        />
        <p>Email *</p>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <p>Message *</p>
        <textarea
          name="message"
          className="w-3/4 h-24 px-2 py-1 text-sm text-primaryBlack font-bold outline-none"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button
          className={`block mt-4 bg-white text-primaryBlack font-bold text-sm px-4 py-2 rounded-md `}
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
      <p className="text-sm mt-8 -mb-8">
        if email not submitted ping me at
        <br /> mail(dot)nirajacharya(at)gmail(dot)com
      </p>
    </div>
  );
};

export default Contact;
