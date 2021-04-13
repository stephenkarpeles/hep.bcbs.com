import React from "react"
import "./newsletter.css"

function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div className="inner-content">
        <div className="newsletter-lead">
          <div className="newsletter-lead-heading">Stay Connected</div>
          <div className="newsletter-lead-text">
            Sign up to receive updates on how BCBS companies are improving
            health outcomes for all.
          </div>
        </div>
        <div className="newsletter-form">
          <div id="mc_embed_signup">
            <form
              action="https://bcbs.us15.list-manage.com/subscribe/post?u=a04cc8a921ecc4c362bddc44a&amp;id=c474495012"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email Address </label>
                  <input
                    type="email"
                    defaultValue=""
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                  <input
                    type="submit"
                    value="Sign Up"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
                <div
                  id="mergeRow-gdpr"
                  className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                  <div className="content__gdpr" style={{ display: "none" }}>
                    <label>Marketing Permissions</label>
                    <p>
                      Please select all the ways you would like to hear from :
                    </p>
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                    >
                      <label className="checkbox subfield" htmlFor="gdpr_31112">
                        <input
                          type="checkbox"
                          id="gdpr_31112"
                          name="gdpr[31112]"
                          value="Y"
                          className="av-checkbox"
                        />
                        <span>Email</span>
                      </label>
                      <label className="checkbox subfield" htmlFor="gdpr_31116">
                        <input
                          type="checkbox"
                          id="gdpr_31116"
                          name="gdpr[31116]"
                          value="Y"
                          className="av-checkbox"
                        />
                        <span>Direct Mail</span>
                      </label>
                      <label className="checkbox subfield" htmlFor="gdpr_31120">
                        <input
                          type="checkbox"
                          id="gdpr_31120"
                          name="gdpr[31120]"
                          value="Y"
                          className="av-checkbox"
                        />
                        <span>Customized Online Advertising</span>
                      </label>
                    </fieldset>
                    <p>
                      You can unsubscribe at any time by clicking the link in
                      the footer of our emails. For information about our
                      privacy practices, please visit our website.
                    </p>
                  </div>
                  <div
                    className="content__gdprLegal"
                    style={{ display: "none" }}
                  >
                    <p>
                      We use Mailchimp as our marketing platform. By clicking
                      below to subscribe, you acknowledge that your information
                      will be transferred to Mailchimp for processing.{" "}
                      <a href="https://mailchimp.com/legal/" target="_blank">
                        Learn more about Mailchimp's privacy practices here.
                      </a>
                    </p>
                  </div>
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_a04cc8a921ecc4c362bddc44a_c474495012"
                    tabIndex="-1"
                    defaultValue=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
