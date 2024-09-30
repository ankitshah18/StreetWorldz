import React from "react";
import PhotoContainer from "../../Components/PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
import Footer from "../../Components/Footer/Footer";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div>
      <PhotoContainer
        image={cat}
        text="Terms And Conditions"
        minHeight="30vh"
      />
      <div className="container conditions">
        <div className="terms-card">
          <div className="terms-heading-and-points">
            <h4>1. Introduction </h4>
            <p>
              - Welcome to StreetWorldz, a non-profit organization dedicated to
              rescuing animals and providing food and shelter for them.
            </p>
            <p>
              - By accessing and using our website, you agree to comply with and
              be bound by these terms and conditions.
            </p>{" "}
          </div>

          <div className="terms-heading-and-points">
            {" "}
            <h4>2. Eligibility</h4>
            <p>
              - You must be at least 18 years old to make donations or use our
              services. If you are under 18, please seek permission from a
              parent or guardian.
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>3. Donations</h4>
            <p>
              - All donations made through the StreetWorldz website are
              voluntary and non-refundable.
            </p>
            <p>
              - Donations may be used for various purposes, including but not
              limited to animal rescue, food, shelter, veterinary care, and
              operational expenses.
            </p>
            <p>
              - Donors will receive a confirmation of their donation, which may
              serve as a tax-deductible receipt.
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>4. Payment Processing</h4>
            <p>
              - Donations are processed through secure payment gateways.
              StreetWorldz is not responsible for any issues arising from
              third-party payment processors.
            </p>
            <p>
              - By making a donation, you consent to the processing of your
              payment information according to our privacy policy.
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>5. User Responsibilities</h4>
            <p>
              - Users are responsible for providing accurate information during
              the donation process.
            </p>
            <p>
              - Users agree not to use the website for any unlawful purpose or
              to solicit donations in a misleading manner.
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>6. Intellectual Property</h4>
            <p>
              - All content, graphics, and materials on the StreetWorldz website
              are owned by StreetWorldz and protected by copyright and other
              intellectual property laws.
            </p>
            <p>
              - Users may not reproduce, distribute, or modify any content
              without prior written consent from StreetWorldz.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>7. Limitation of Liability</h4>
            <p>
              - StreetWorldz is not liable for any direct, indirect, incidental,
              or consequential damages arising from the use of the website or
              the donation process.
            </p>
            <p>
              - We strive to provide accurate information but do not guarantee
              the completeness or reliability of the content.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>8. Privacy Policy</h4>
            <p>
              - Your privacy is important to us. Please review our Privacy
              Policy, which explains how we collect, use, and protect your
              information.
            </p>
          </div>
          <div className="terms-heading-and-points">
            <h4>9. Changes to Terms</h4>
            <p>
              - StreetWorldz reserves the right to modify these terms and
              conditions at any time. Users will be notified of any significant
              changes via email or through a notice on the website.
            </p>
          </div>
          <div className="terms-heading-and-points">
            {" "}
            <h4>10. Contact Information</h4>
            <p>
              For any questions or concerns regarding these terms and
              conditions, please contact us at [streetworldzhelpline@gmail.com].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
