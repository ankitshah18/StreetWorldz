import React from "react";
import PhotoContainer from "../../Components/PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
import Footer from "../../Components/Footer/Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <PhotoContainer image={cat} text="Privacy Policy" minHeight="30vh" />
      <div className="container conditions">
        <div className="terms-card">
          <div className="terms-heading-and-points">
            <h4>Privacy Policy for StreetWorldz Foundation</h4>
            <p>
              Effective Date: <span>1st October 2024</span>
            </p>

            <p>
              At StreetWorldz Foundation, we are committed to protecting your
              privacy and ensuring that your personal information is handled
              responsibly. This Privacy Policy outlines how we collect, use,
              store, and protect your information when you engage with us
              through our website, services, and programs related to animal
              rescue, feeding, and caretaker services.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>1. Information We Collect</h4>
            <p>
              We collect various types of information to provide and improve our
              services:
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h5>1.1. Personal Information</h5>
            <p>
              When you interact with our foundation—whether by donating, signing
              up as a volunteer, adopting or rescuing an animal, or
              participating in any of our programs—we may collect personal
              information such as:
            </p>
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Postal Address</li>
              <li>State and City</li>
              <li>Pin Code</li>
              <li>Payment Details (for donations)</li>
              <li>Other contact details as necessary</li>
            </ul>
          </div>
          <div className="terms-heading-and-points">
            <h5>1.2. Rescue Information</h5>
            <p>
              When you report an animal rescue or participate in rescue
              programs, we may collect details such as:
            </p>
            <ul>
              <li>Rescue Location</li>
              <li>Animal Details (species, condition, etc.)</li>
              <li>Your relation to the animal (if applicable)</li>
            </ul>
          </div>
          <div className="terms-heading-and-points">
            <h5>1.3. Usage Data</h5>
            <p>
              We may collect information on how our website and services are
              accessed and used, such as:
            </p>
            <ul>
              <li>IP Address</li>
              <li>Browser Type and Version</li>
              <li>Pages Visited</li>
              <li>Time and Date of Visit</li>
            </ul>
          </div>
          <div className="terms-heading-and-points">
            <h4>2. How We Use Your Information</h4>
            <p>
              We use the information we collect for various purposes, including
              but not limited to:
            </p>
            <ul>
              <li>
                Providing and managing animal rescue, feeding, and caretaker
                services.
              </li>
              <li>Processing donations and providing receipts.</li>
              <li>
                Communicating with you regarding rescue missions, volunteer
                opportunities, or updates.
              </li>
              <li>
                Sending newsletters, event updates, or fundraising campaigns
                (you may opt out at any time).
              </li>
              <li>
                Improving our website and services to better serve the
                community.
              </li>
              <li>
                Complying with legal obligations and protecting the rights and
                safety of our foundation and animals.
              </li>
            </ul>
          </div>
          <div className="terms-heading-and-points">
            <h4>3. Payment Processing</h4>
            <p>
              All donation payments made through our website are securely
              processed through third-party payment providers such as Razorpay.
              We do not store your payment card information on our servers. The
              third-party payment processors have their own privacy policies
              governing the use of your personal information.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>4. Data Sharing and Disclosure</h4>
            <p>
              We do not sell, rent, or share your personal information with
              third parties except in the following circumstances:
            </p>
            <ul>
              <li>
                Service Providers: We may share your information with
                third-party service providers (e.g., payment processors,
                communication platforms) to help us operate our services.
              </li>
              <li>
                Legal Requirements: We may disclose your information if required
                by law, such as in response to a court order or to comply with
                legal processes.
              </li>
              <li>
                Rescue and Care Purposes: In cases where animal welfare is
                involved, we may share rescue location or details with
                authorities or relevant animal welfare organizations.
              </li>
            </ul>
          </div>
          <div className="terms-heading-and-points">
            <h4>5. Data Security</h4>
            <p>
              We are committed to protecting the security of your personal
              information. We use administrative, technical, and physical
              security measures to safeguard your data against unauthorized
              access, disclosure, or misuse. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>6. Retention of Data</h4>
            <p>
              We will retain your personal information for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, or as
              required by law. Once personal information is no longer required,
              we will securely dispose of it.
            </p>
          </div>

          <div className="terms-heading-and-points">
            <h4>7. Your Privacy Rights</h4>
            <p>You have the right to:</p>
            <ul>
              <li>
                Access and receive a copy of the personal information we hold
                about you.
              </li>
              <li>Request correction or deletion of your personal data.</li>
              <li>
                Object to the processing of your personal data for certain
                purposes (e.g., marketing communications).
              </li>
              <li>
                Withdraw your consent for data processing where we rely on your
                consent.
              </li>
            </ul>
            <p>
              If you would like to exercise any of these rights, please contact
              us using the details provided below.
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>8. Cookies and Tracking Technologies</h4>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our website. Cookies help us understand user
              behavior, optimize website functionality, and deliver relevant
              content. You can control your cookie preferences through your
              browser settings.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>9. Third-Party Links</h4>
            <p>
              Our website may contain links to other websites or services that
              are not operated by us. We are not responsible for the privacy
              practices of these third-party sites. We recommend reviewing the
              privacy policies of any third-party sites you visit.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>10. Updates to This Privacy Policy</h4>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, legal requirements, or technology. Any
              updates will be posted on this page, and the effective date will
              be revised. We encourage you to review this policy periodically.
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>11. Contact Us</h4>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or how we handle your personal data, please contact
              us at:
            </p>
            <p>
              StreetWorldz Foundation <br />
              Email: <span>streetworldzhelpline@gmail.com</span> <br />
              Phone: [Insert Phone Number] <br />
              {/* Address: [Insert Physical Address] */}
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>Conclusion</h4>
            <p>
              This Privacy Policy explains how we handle your personal
              information and demonstrates our commitment to protecting your
              privacy. By engaging with StreetWorldz Foundation, you consent to
              the practices described in this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
