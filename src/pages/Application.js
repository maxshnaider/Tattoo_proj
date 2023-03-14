// import Header from "../assets/components/common/Header";
import ScrollToTop from "../assets/components/common/ScrollToTop";
import FormPages from "../assets/components/FormPages";

function Application() {
  return (
    <body>
      <main>
        <section class="application_wrap">
          <div class="container">
            <div class="application">
              <div class="app">
                <div class="foot_form_input foot_form_input_app">
                  <h3 class="title_h3 title_h3_app">Application</h3>
                  <FormPages />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
    </body>
  );
}

export default Application;
