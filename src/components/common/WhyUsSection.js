import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const WhyUsSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const whyUsItems = [
    {
      title: "Professional Artists",
      description: "Our tattoo artists are not only highly skilled but also deeply passionate about their craft. With years of experience, they are capable of creating intricate designs that exceed your expectations."
    },
    {
      title: "Custom Designs",
      description: "We take pride in our ability to create unique tattoo designs that are tailored to each individual. Whether you have a clear vision or need guidance, our artists will work with you to ensure your tattoo is one-of-a-kind."
    },
    {
      title: "Strict Hygiene Standards",
      description: "Your safety is our priority. We adhere to the highest hygiene standards, using only sterilized equipment and disposable materials. You can trust that your tattoo experience with us is both safe and hygienic."
    },
    {
      title: "Wide Range of Styles",
      description: "From traditional to modern, black and grey to vibrant colors, our artists are proficient in a wide range of tattoo styles. Whatever your style preference, we have the expertise to bring your ideas to life."
    },
    {
      title: "Consultative Approach",
      description: "We believe in a consultative approach, taking the time to understand your ideas, preferences, and concerns. Our goal is to collaborate with you to create a tattoo that truly reflects your personality and story."
    },
    {
      title: "Exceptional Customer Service",
      description: "At our tattoo salon, customer satisfaction is paramount. Our friendly and professional staff are dedicated to providing you with the best possible experience, from the moment you walk in to long after your tattoo is complete."
    },
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <h2 className="title_h2">Why Choose Us</h2>
        <div className="why-us-list">
          {whyUsItems.map((item, index) => (
            <div className="why_us_item" key={index} onClick={() => toggleItem(index)}>
              <div className="why-us-title">
                <span className="why-us-icon">{activeItem === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                <p className="why-us-text">{item.title}</p>
              </div>
              {activeItem === index && <p className="why-us-description">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
