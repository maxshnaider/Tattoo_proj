import React from "react";
import tattoo_serv from "../../assets/img/Services_tattoo.png"
import tattoo_overlap from "../../assets/img/Services_overlapping.png"
import piercing from "../../assets/img/Services_piersing.png"

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="title_h2">Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Tattoo</h3>
            <p>Our masters will realize any of your ideas on the body.</p>
            <img src={tattoo_serv} alt="Tattoo" />
          </div>
          <div className="service-item">
            <h3>Overlapping Tattoo</h3>
            <p>If you don't like tattoo, our masters will cover it with a high-quality new one.</p>
            <img src={tattoo_overlap} alt="Overlapping Tattoo" />
          </div>
          <div className="service-item">
            <h3>Piercing</h3>
            <p>Our masters have experience in all areas of piercing.</p>
            <img src={piercing} alt="Piercing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;



