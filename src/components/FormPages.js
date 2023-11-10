import axios from "axios";
import React, { useState } from "react";

function FormPages() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback();
    setName("");
    setPhone("");
    setText("");
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
      onSubmit={handleSubmit}
      id="feedback_form"
      method="post"
      action="#"
      encType="multipart/form-data"
      className="form_flex"
    >
      <div className="form_row">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form_row">
        <label htmlFor="phone">Phone:</label>
        <br />
        <input
          type="number"
          name="phone"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className="form_row">
        <label htmlFor="comments">Comments:</label> <br />
        <textarea
          type="text"
          name="comments"
          id="comments"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </div>
      <button id="feedback_submit" type="submit" className="btn btn_foot">
        Send form
      </button>
    </form>
  );
}

export default FormPages;
