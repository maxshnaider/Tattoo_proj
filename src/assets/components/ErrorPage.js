import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main>
      <section className="application_wrap">
        <div className="container">
          <div className="application error">
            <div>Oops!</div>
            <div>Error 404</div>
            <div>
              The page you requested could not be found
              <br />
              We're working on it :&#10099;
            </div>
            <Link to={"/"}>
              <button type="button" className="btn btn_long btn_error">
                Back to main
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ErrorPage;
