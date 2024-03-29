import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { validations} from "../validations/validations";
import { submitFeedback } from "../api/feedbackApi";

function FormPages() {
  const [nameErrorText, setNameErrorText] = useState('');
  const [phoneErrorText, setPhoneErrorText] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  
  const [formFields, setFormFields] = useState({
     userName: '',
     phone: '',
     comment: ''
  })

  const [formErrors, setFormErrors] = useState ({
      userName: '',
     phone: '',
  })

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

  const handleInputChange = (event) => {
    const { value, name} = event.target;
    setFormFields((prev)=>{
      return {
        ...prev,
        [name]: value
      }
    });
  
  };

  const handleInputBlur = (event) => {
    const { value, name} = event.target;
    if (!value) {
      return 
    }
      setFormErrors((prev)=>({
        ...prev,
        [name]: !validations[name].rule.test(value) ? validations[name].error : ''
        }
      ));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameErrorText === '' && phoneErrorText === '') {
      const data = {
        name: formFields.userName,
        phone: formFields.phone,
        text: formFields.comment
      };

      submitFeedback(data)
      .then(() => {
        setFormFields((prev) => ({
          ...prev,
          userName: '',
          phone: '',
          comment: '',
        }));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  };

  useEffect(() => {
    setIsFormValid(formErrors.userName === '' && formErrors.phone === '');
  }, [formErrors]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      id="feedback_form"
      method="post"
      action="#"
      encType="multipart/form-data"
      className="form_flex"
    >
      {formErrors.userName && <p className="error">{formErrors.userName}</p>}
      <div className="form_row">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="userName"
          id="name"
          value={formFields.userName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      {formErrors.phone && <p className="error">{formErrors.phone}</p>}
      <div className="form_row">
        <label htmlFor="phone">Phone:</label>
        <br />
        <input
          type="text"
          name="phone"
          id="phone"
          value={formFields.phone}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <div className="form_row">
        <label htmlFor="comment">Comments:</label> <br />
        <textarea
          type="text"
          name="comment"
          id="comment"
          value={formFields.comment}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button
        id="feedback_submit"
        type="submit"
        className={`btn btn_foot ${isFormValid ? "" : "disabled"}`}
        disabled={!isFormValid}
      >
        Send form
      </button>
    </form>
  );
}

export default FormPages;