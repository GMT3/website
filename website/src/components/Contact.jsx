import React, { useState } from 'react';
import { validateInput } from '../utils/form_validator';
import toast from 'react-hot-toast';
import API from '../utils/api';

const Contact = ({ refs }) => {
  const [contactDetails, setContactDetails] = useState({
    email: { value: '', touched: false, hasError: true, error: '' },
    subject: { value: '', touched: false, hasError: true, error: '' },
    message: { value: '', touched: false, hasError: true, error: '' },
    isFormValid: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in contactDetails) {
      const item = contactDetails[key];
      if (key === name && hasError) {
        isFormValid = false;
        console.log(key, name);
        break;
      } else if (key !== name && item && item.hasError) {
        isFormValid = false;
        console.log(key, name, item.hasError);
        break;
      }
    }

    setContactDetails({
      ...contactDetails,
      [name]: {
        ...contactDetails[name],
        value,
        hasError,
        error,
        touched: false,
      },
      isFormValid,
    });
  };

  const onFocusOut = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in contactDetails) {
      const item = contactDetails[key];
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        isFormValid = false;
        break;
      }
    }

    setContactDetails({
      ...contactDetails,
      [name]: {
        ...contactDetails[name],
        value,
        hasError,
        error,
        touched: true,
      },
      isFormValid,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!contactDetails.isFormValid) return toast.error('Form is invalid');

    const body = {
      email: contactDetails.email.value,
      subject: contactDetails.subject.value,
      message: contactDetails.message.value,
    };

    const res = API.post('/', body);

    toast.promise(res, {
      loading: 'Sending Message...',
      success: ({ data: { message } }) => {
        setContactDetails({
          email: { value: '', touched: false, hasError: true, error: '' },
          subject: { value: '', touched: false, hasError: true, error: '' },
          message: { value: '', touched: false, hasError: true, error: '' },
          isFormValid: false,
        });

        return message;
      },
      error: (err) => {
        if (err.response.status === 403) {
          return `${err.response.data}`;
        }
        if (err.response.status === 500) {
          return `${err.response.data}`;
        }
      },
    });
  };

  return (
    <>
      <section className="pb-20" ref={refs} id="contact">
        <div className="w-full md:px-32 py-11 flex flex-col justify-center items-center   ">
          <div className="p-3 w-2/3 break-words text-center">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
          </div>
          <div className="w-5/6">
            <p className="text-center">Let’s chat and get a quote!</p>
          </div>
        </div>
        <div className="flex justify-between py-11 px-5 md:px-16">
          <div className="hidden w-1/3 md:flex flex-col justify-center items-center">
            <h3 className="text-6xl">Get in touch</h3>
            <p>Don't be shy !!</p>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center md:justify-end">
            <div className=" md:w-2/3 bg-gray-100 shadow-lg p-10">
              <form action="" onSubmit={handleForm}>
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    name="email"
                    onChange={handleChange}
                    onBlur={onFocusOut}
                    value={contactDetails.email.value}
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  {contactDetails.email.touched &&
                  contactDetails.email.hasError ? (
                    <span className="text-sm text-red-600">
                      {contactDetails.email.error}
                    </span>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    name="subject"
                    onChange={handleChange}
                    onBlur={onFocusOut}
                    value={contactDetails.subject.value}
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  {contactDetails.subject.touched &&
                  contactDetails.subject.hasError ? (
                    <span className="text-sm text-red-600">
                      {contactDetails.subject.error}
                    </span>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    onBlur={onFocusOut}
                    value={contactDetails.message.value}
                    id=""
                    cols="30"
                    rows="10"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg   border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                  {contactDetails.message.touched &&
                  contactDetails.message.hasError ? (
                    <span className="text-sm text-red-600">
                      {contactDetails.message.error}
                    </span>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-900 w-full p-2 rounded-lg text-xl text-slate-300 hover:text-slate-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
