import FormPages from "../FormPages";

function FootMain() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="foot_flex">
          <div className="foot_left">
            <div className="shop_ours">
              <h3 className="title_h3">Tattoo Shop Hours:</h3>
              <div className="circle"></div>
              <p>Monday - Friday 1pm - 9pm</p>
              <p>​Saturday & Sunday 1pm - Until Close</p>
            </div>
            <div className="foot_form_input">
              <h3 className="title_h3">Application</h3>
              <div className="circle"></div>
              <FormPages />
            </div>
          </div>
          <div className="foot_right">
            <h3 className="title_h3">Art Collective</h3>
            <div className="circle"></div>
            <div className="adress">
              18985 UQ-51 Unit I, Miami Beach,
              <br />
              BR 459653 
              <br />
              Next to the Subway St.
            </div>
            <div className="phone_contact">
              <a href="tel:+001356-868-2454">+007 485-45-45</a>
            </div>
            <div className="email_contact">
              <a href="mailto:destintattoo@gmail.com">
                Email: tattoo007@tattoo.com
              </a>
            </div>
            <div className="follow_us">
              <span>Follow us:</span>
              <a href="https://www.instagram.com/">
                <span className="icon-instagram"></span>
              </a>
              <a href="https://www.facebook.com/">
                <span className="icon-facebook"></span>
              </a>
              <a href="htpps://www.twitter.com/">
                <span className="icon-twitter"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FootMain;
