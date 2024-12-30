import PageHead from "../../components/page-head";
import Wrapper from "../../components/wrapper";
import { APP } from "../../constants";

export default function LegalPrivacy() {
  return (
    <>
      <PageHead
        title={`Privacy & Policy | ${APP.NAME} Official Store`}
        description={`General inquiries: ${APP.EMAIL_ADDRESS}, ${APP.ADDRESS}`}
      ></PageHead>
      <Wrapper hideNewsletter>
        <div className="container-md">
          <section id="privacy">
            <h1 className="text-center">Legal and Privacy</h1>
            <section style={{ paddingBottom: 0 }}>
              <h3>Customer Privacy Notice</h3>
              <p>
                This notice is formulated to provide transparency into our
                privacy practices, in a format that is easy to read, understand
                and navigate.
              </p>
              <h4>Information We May Collect</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <h4 className="text-muted">About you or your device</h4>
              <p>
                Analytics tool: We use website and application analytics
                services provided by third parties (such as Google Analytics)
                that use cookies and other similar technologies to collect
                information about website or application use and to report
                trends, without identifying individual visitors. The third
                parties that provide us with these services may also collect
                information about your use of third-party websites. You can
                learn how to opt out of analytics by downloading the Google
                Analytics opt-out browser add-on.
              </p>
              <p>
                We retain the information we collect from or about you, our
                products, and our services for the period necessary to fulfill
                the purposes outlined in this Notice unless a longer retention
                period is required or permitted by law. When the information is
                no longer necessary for these purposes, we delete it or keep it
                in a form that does not identify you. When determining this
                retention period, we take into account various criteria, such as
                the type of products and services requested by or provided to
                you, the nature of our relationship with you, the impact on the
                services we provide to you if we delete some information from or
                about you, and retention periods required by law.
              </p>
              <h4>How We May Use Your Information</h4>
              <p>
                We may use information we collect to communicate with you,
                fulfill our products and services and improve our products and
                services in the following manner.
              </p>
              <p>
                To respond to your inquiries and fulfill your requests, such as
                to send you newsletters or product information, information
                alerts, information about events, or brochures.
              </p>
              <p>
                From time to time, we may send administrative information to
                you, such as information regarding our products and services,
                and changes to our terms, conditions, and policies. Due to this
                information being important to your interaction with {APP.NAME}, you
                may not opt out of receiving these communications.
              </p>
              <p>
                To complete and fulfill your purchase, including to process your
                payments, fulfill your requests for product financing, have your
                order delivered to you, communicate with you regarding your
                purchase, and provide you with related customer service.
              </p>
              <p>
                To analyze and improve the safety and security of our products
                and services.
              </p>
              <h4>Sharing Your Information</h4>
              <p>
                We may share information with our service providers and business
                partners when necessary to perform the services on our or on
                your behalf, and with third parties as required by law in the
                following manner.
              </p>
              <p>
                With our third party service providers and channel partners to
                provide services such as website hosting, payment processing,
                order fulfillment and product delivery, credit card processing,
                and other similar services.
              </p>
              <p>
                With other third party business partners to the extent that they
                are involved in the purchase, lease, or service of your {APP.NAME}
                products. We share limited information from or about you or your
                {APP.NAME} products to allow you to take advantage of those services
                if you elect to utilize them, with such partners as finance
                institutions, permitting authorities and insurance companies.
              </p>
              <p>
                We do not share information that personally identifies you with
                unaffiliated third parties. If you wish to opt out of any
                processing of information for which you have provided your prior
                explicit opt-in consent, you may do so by contacting us to set
                an appointment for &apos;Non-Data Sharing&apos;.
              </p>
              <p>
                {APP.NAME} may transfer and disclose information, including
                information that may or may not personally identify you, to
                third parties to comply with a legal obligation (including, but
                not limited to, subpoenas or other court orders); when we
                believe in good faith that the law requires it; in response to a
                lawful request by governmental authorities conducting an
                investigation, including to comply with law enforcement
                requirements; to verify or enforce our policies and procedures;
                to respond to an emergency; to prevent or stop activity we may
                consider to be, or to pose a risk of being, illegal, unethical
                or legally actionable; or to protect the rights, property,
                safety, or security of our products and services, {APP.NAME}, third
                parties, visitors, or the public, as determined by us in our
                sole discretion.
              </p>
            </section>
          </section>
          <hr />
          <section id="delivery-returns">
            <h1 className="text-center">Delivery and Returns</h1>
            <section style={{ paddingBottom: 0 }}>
              <h3>Delivery</h3>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.
              </p>
              <h3>Returns</h3>
              <p>
                Items shipped from {process.env.NEXT_PUBLIC_URL?.split("//")[1]} can be returned
                within 5 business days of delivery. However, there might be
                items that may be non-returnable or non-refundable.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
          </section>
        </div>
      </Wrapper>
    </>
  );
}
