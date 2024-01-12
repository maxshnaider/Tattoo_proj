import Atropos from "atropos/react";

function Contacts() {
  return (
    <div className="container">
      <div className="contact_wrap">
        <Atropos shadow={false} highlight={false}>
          <h2 className="title_contact">Location</h2>
        </Atropos>
        <p className="con_p">Miami Beach</p>
        <p className="con_p">485-45-45</p>
        <div className="contact_time">
          <h2>Tattoo Shop Hours: </h2>
          <p>Monday - Friday 1pm - 9pm</p>
          <p>Saturday & Sunday 1pm - Until Close</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
