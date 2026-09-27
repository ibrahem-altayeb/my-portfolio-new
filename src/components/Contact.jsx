import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.user_name.trim()) {
      errors.user_name = "Name is required!";
    }

    if (!formValues.user_email.trim()) {
      errors.user_email = "Email is required!";
    } else if (!emailRegex.test(formValues.user_email)) {
      errors.user_email = "Please enter a valid email address.";
    }

    if (!formValues.message.trim()) {
      errors.message = "Please enter a message!";
    }

    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_sw2md3d",
        "template_37uche3",
        {
          user_name: formValues.user_name,
          user_email: formValues.user_email,
          message: formValues.message,
        },
        {
          publicKey: "6UA-ndxrY0ZtOsiU0",
        }
      );

      console.log("EmailJS SUCCESS:", result);

      setStatus("success");

      setFormValues({
        user_name: "",
        user_email: "",
        message: "",
      });

      setFormErrors({});
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      console.error("Status:", error.status);
      console.error("Message:", error.text);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center p-4 pt-20"
    >
      <form
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#222]">
            Contact
          </p>

          <p className="py-4 mb-10">
            Submit the form below or email me at{" "}
            <a
              href="mailto:ibrahim.s.altayeb@gmail.com"
              className="underline hover:text-blue-600"
            >
              ibrahim.s.altayeb@gmail.com
            </a>
          </p>
        </div>

        {/* Name error */}
        {formErrors.user_name && (
          <p className="text-red-600 text-sm">
            {formErrors.user_name}
          </p>
        )}

        {/* Name */}
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          value={formValues.user_name}
          onChange={handleChange}
          className="bg-white p-2 my-4 border border-gray-300 rounded"
        />

        {/* Email error */}
        {formErrors.user_email && (
          <p className="text-red-600 text-sm">
            {formErrors.user_email}
          </p>
        )}

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={formValues.user_email}
          onChange={handleChange}
          className="bg-white p-2 my-4 border border-gray-300 rounded"
        />

        {/* Message error */}
        {formErrors.message && (
          <p className="text-red-600 text-sm">
            {formErrors.message}
          </p>
        )}

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          value={formValues.message}
          onChange={handleChange}
          className="bg-white p-2 my-4 resize-none h-[120px] md:h-[156px] border border-gray-300 rounded"
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSending}
          className="my-button border-2 px-4 py-3 my-8 mx-auto flex items-center rounded-lg"
        >
          {isSending ? "Sending..." : "Let's Collaborate"}
        </button>

        {/* Success message */}
        {status === "success" && (
          <p className="text-center text-green-600 font-medium">
            Message sent successfully! 🎉
          </p>
        )}

        {/* Error message */}
        {status === "error" && (
          <p className="text-center text-red-600 font-medium">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
