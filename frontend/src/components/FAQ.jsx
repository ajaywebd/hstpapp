import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./faq.css";

const FAQ = () => {
  return (
    <section id="faq" className="faq mt-5">
      <div className="container">
        <div className="row justify-content-center marb">
          <div className="col-lg-8 text-center mb-5">
            <h2>Frequently Asked Questions</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    Fugiat voluptatem voluptas mollitia animi nunc?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Sequi nesciunt nihil esse voluptatem. Temporibus aut est
                    doloribus quia laboriosam eum non autem porro. Velit est
                    maiores fugiat minus pariatur eveniet quidem dolor fuga
                    earum.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    Dolor sit amet consectetur adipisicing elit?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis cum quod iste, ex libero dolorum excepturi.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Integer feugiat scelerisque varius morbi enim nunc faucibus
                    a pellentesque. Nec tincidunt praesent semper feugiat nibh
                    sed pulvinar proin gravida.
                  </div>
                </div>
              </div>

              {/* Add more accordion items as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
