import axios from "axios";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { nameCheck, nameError, phoneCheck, phoneError } from "../validations/validations";

function FormPages() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const [nameErrorText, setNameErrorText] = useState('');
  const [phoneErrorText, setPhoneErrorText] = useState('');

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideForm = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setNameErrorText('');
        setPhoneErrorText('');
      }
    };

    document.addEventListener('mousedown', handleClickOutsideForm);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideForm);
    };
  }, []);

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);

    if (!nameCheck.test(value)) {
      setNameErrorText(nameError);
    } else {
      setNameErrorText('');
    }
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setPhone(value);

    if (!phoneCheck.test(value)) {
      setPhoneErrorText(phoneError);
    } else {
      setPhoneErrorText('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameErrorText === '' && phoneErrorText === '') {
      submitFeedback();
      setName('');
      setPhone('');
      setText('');
    }
  };

  function submitFeedback() {
    const BOT_TOKEN = "6266955084:AAGMFQOZ4l14F_HFXdiWg3f2wW4GWEh1D8A";
    const CHAT_ID = "-1001562545950";
    const text = `${document.getElementById("name").value}
  ${document.getElementById("comments").value}
 ${document.getElementById("phone").value}`;

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: text,
    });
  }

  return (
    <form
      noValidate
      ref={formRef}
      onSubmit={handleSubmit}
      id="feedback_form"
      method="post"
      action="#"
      encType="multipart/form-data"
      className="form_flex"
    >
      {nameErrorText && <p className="error">{nameErrorText}</p>}
      <div className="form_row">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      {phoneErrorText && <p className="error">{phoneErrorText}</p>}
      <div className="form_row">
        <label htmlFor="phone">Phone:</label>
        <br />
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className="form_row">
        <label htmlFor="comments">Comments:</label> <br />
        <textarea
          type="text"
          name="comments"
          id="comments"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button id="feedback_submit" type="submit" className="btn btn_foot">
        Send form
      </button>
    </form>
  );
}

export default FormPages;
