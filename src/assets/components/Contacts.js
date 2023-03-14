import Atropos from "atropos/react";

function Contacts() {
  return (
    <div className="container">
      <div className="contact_wrap">
        <Atropos shadow={false} highlight={false}>
          <h2 className="title_contact">Location</h2>
        </Atropos>
        <p className="con_p">Florida, Miramar Beach</p>
        <p className="con_p">850-424-6584</p>
        <div className="contact_time">
          <h2>Tattoo Shop Hours: </h2>
          <p>Sunday -Thursday 1pm - 9pm</p>
          <p>​Friday & Saturday 1pm - Until Close</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
