import React from 'react';

export default function Newsletter({ stacked }: { stacked?: boolean }) {
  return (
    <div
      id="mlb2-4362883"
      className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-4362883"
    >
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div
            className={`${
              stacked ? 'stacked' : ''
            } newsletter-wrapper ml-form-embedBody ml-form-embedBodyHorizontal row-form`}
          >
            <div className="ml-form-embedContent">
              <h4>Get our newsletter</h4>
              <p>
                Be the first to receive the latest Yatri Motorcycles news,
                events and product updates and more.
              </p>
            </div>
            <form
              className="ml-block-form"
              action="https://static.mailerlite.com/webforms/submit/k5u3c4"
              data-code="k5u3c4"
              method="post"
              target="_blank"
            >
              <div className="ml-form-formContent horozintalForm">
                <div className="ml-form-horizontalRow">
                  <div className="ml-input-horizontal">
                    <div
                      style={{ width: '100%' }}
                      className="horizontal-fields"
                    >
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input
                          type="email"
                          className="form-control"
                          data-inputmask=""
                          name="fields[email]"
                          placeholder="Your email here"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-button-horizontal primary">
                    <button type="submit" className="primary">
                      Subscribe
                    </button>
                    <button
                      disabled={true}
                      style={{ display: 'none' }}
                      type="button"
                      className="loading"
                    >
                      {' '}
                      <div className="ml-form-embedSubmitLoad"></div>{' '}
                      <span className="sr-only">Loading...</span>{' '}
                    </button>
                  </div>
                </div>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-mobileButton-horizontal">
                <button type="submit" className="primary">
                  Subscribe
                </button>
                <button
                  disabled={true}
                  style={{ display: 'none' }}
                  type="button"
                  className="loading"
                >
                  {' '}
                  <div className="ml-form-embedSubmitLoad"></div>{' '}
                  <span className="sr-only">Loading...</span>{' '}
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div
            className="ml-form-successBody row-success"
            style={{ display: 'none' }}
          >
            <div className="ml-form-successContent">
              <h4>Thank you!</h4>
              <p>You have successfully joined our subscriber list.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
