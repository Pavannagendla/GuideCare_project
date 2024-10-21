import React, { useEffect } from "react";
import "./Cancellation_policy.css";
import Hero from "../hero/Hero";
import Subscribe from "../subscribe/Subscribe";
import Info from "../info/Info";
import Footer from "../footer/Footer";

const Cancellation_policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <div className="Cancellation_policy" id="cancellation_policy">
        <div className="container-fluid">
          <div className="row mt-5 pt-5">
            <div className="col-md-12">
              <h1 className="text-center">Return/Cancellation Policy</h1>
              <h2>Return and Refund Policy</h2>
              <p>Thank you for shopping at Guidecare.</p>
              <p>
                If, for any reason, You are not completely satisfied with a
                purchase We invite You to review our policy on refunds and
                returns. This Return and Refund Policy has been created with the
                help of the Return and Refund Policy Generator.
              </p>
              <p>
                The following terms are applicable for any products that You
                purchased with Us.
              </p>
              <h2>Interpretation and Definitions</h2>
              <h2>Interpretation</h2>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
              <h2>Definitions</h2>
              <p>For the purposes of this Return and Refund Policy:</p>
              <ul>
                <li>
                  <b>Company</b>(2nd Phase, Third Floor, 35/2, Hosur Rd,
                  Konappana Agrahara, Electronic City, Bengaluru, Karnataka
                  560100.)
                </li>
                <li>
                  Goods refer to the items offered for sale on the Service.
                </li>
                <li>Orders mean a request by You to purchase Goods from Us.</li>
                <li>Service refers to the Website.</li>
                <li>
                  Website refers to Guidecare, accessible from
                  https://Guidecare.in/
                </li>
                <li>
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </li>
              </ul>
              <h2>Your Order Cancellation Rights</h2>
              <p>
                You are entitled to cancel Your Order within 7 days without
                giving any reason for doing so.
              </p>
              <p>
                The deadline for cancelling an Order is 7 days from the date on
                which You received the Goods or on which a third party you have
                appointed, who is not the carrier, takes possession of the
                product delivered.
              </p>
              <p>
                In order to exercise Your right of cancellation, You must inform
                Us of your decision by means of a clear statement. You can
                inform us of your decision by:
              </p>
              <ul>
                <li>By email: contact@Pixalive.me</li>
                <li>
                  By visiting this page on our website: https://Guidecare.in/
                </li>
              </ul>
              <p>
                We will reimburse You no later than 14 days from the day on
                which We receive the returned Goods. We will use the same means
                of payment as You used for the Order, and You will not incur any
                fees for such reimbursement.
              </p>
              <h2>Conditions for Returns</h2>
              <p>
                In order for the Goods to be eligible for a return, please make
                sure that:
              </p>
              <ul>
                <li>The Goods were purchased in the last 7 days</li>
                <li>The Goods are in the original packaging</li>
              </ul>
              <p>The following Goods cannot be returned:</p>
              <ul>
                <li>
                  The supply of Goods made to Your specifications or clearly
                  personalized.
                </li>
                <li>
                  The supply of Goods which according to their nature are not
                  suitable to be returned, deteriorate rapidly or where the date
                  of expiry is over.
                </li>
                <li>
                  The supply of Goods which are not suitable for return due to
                  health protection or hygiene reasons and were unsealed after
                  delivery.
                </li>
                <li>
                  The supply of Goods which are, after delivery, according to
                  their nature, inseparably mixed with other items.
                </li>
              </ul>
              <p>
                We reserve the right to refuse returns of any merchandise that
                does not meet the above return conditions in our sole
                discretion.
              </p>
              <p>
                Only regular priced Goods may be refunded. Unfortunately, Goods
                on sale cannot be refunded. This exclusion may not apply to You
                if it is not permitted by applicable law.
              </p>
              <h2>Returning Goods</h2>
              <p>
                You are responsible for the cost and risk of returning the Goods
                to Us. You should send the Goods at the following address:
              </p>
              <p>
                2nd Phase, Third Floor, 35/2, Hosur Rd, Konappana Agrahara,
                Electronic City, Bengaluru, Karnataka 560100.
              </p>
              <p>
                We cannot be held responsible for Goods damaged or lost in
                return shipment. Therefore, We recommend an insured and
                trackable mail service. We are unable to issue a refund without
                actual receipt of the Goods or proof of received return
                delivery.
              </p>
              <h2>Gifts</h2>
              <p>
                If the Goods were marked as a gift when purchased and then
                shipped directly to you, You’ll receive a gift credit for the
                value of your return. Once the returned product is received, a
                gift certificate will be mailed to You.
              </p>
              <p>
                If the Goods weren’t marked as a gift when purchased, or the
                gift giver had the Order shipped to themselves to give it to You
                later, We will send the refund to the gift giver.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our Returns and Refunds Policy,
                please contact us:
              </p>
              <ul>
                <li>By email: contact@Pixalive.me</li>
                <li>
                  By visiting this page on our website: https://Guidecare.in/
                </li>
              </ul>
              <p>
                Buy a custom essay through a trusted platform if you need it. It
                is important to be aware of certain things college paper writing
                service reviews to consider when purchasing essays on the
                internet. Be sure to make sure the firm you buy essays from is
                trustworthy. They will offer unlimited revisions and a return
                policy. Secondly, you should always verify that the company is
                able to provide additional service. A lot of companies offer an
                absolutely free plagiarism report, formatting using various
                styles or 24 hour customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Info />
      <Footer />
    </>
  );
};

export default Cancellation_policy;
