import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[30px] lg:pt-[200px]">
      <div className="container">
        <SectionTitle
          title="How to Register and Get Started"
          paragraph="Follow these steps to create your account and start using our platform."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              id={1}
              question="Create Your Account"
              answer={
                <div>
                  <p>Click the Register button. Fill in the required fields:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Email</li>
                    <li>Password</li>
                    <li>Full Name</li>
                    <li>Company Name</li>
                    <li>VAT Number</li>
                  </ul>
                  <p className="mt-2">Then click <strong>Register</strong>.</p>
                </div>
              }
            />
            <SingleFaq
              id={2}
              question="Verify Your Email"
              answer={
                <div>
                  <p>Check your inbox for an email titled <strong>“Your verification code”</strong> and enter the 8-digit OTP:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>If you don’t see the email, check your Spam folder</li>
                    <li>Or click <strong>Resend Code</strong></li>
                  </ul>
                </div>
              }
            />
            <SingleFaq
              id={3}
              question="Complete Onboarding"
              answer={
                <div>
                  <p>After verifying your email, you’ll be redirected to the Onboarding page. Complete all sections:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Company Details</li>
                    <li>Address Line 1 / Line 2 (optional)</li>
                    <li>Country, Town/City, State, Post Code</li>
                    <li>Country Code (e.g., +44, +49) & Phone Number</li>
                    <li>Domiciles (countries where your company operates)</li>
                    <li>Operating License (upload PDF, JPG, PNG)</li>
                    <li>Insurance Documents (upload PDF, JPG, PNG)</li>
                    <li>Payment Info (Account Holder, SWIFT/BIC, IBAN, Account Type)</li>
                    <li>Equipment Inventory (tractors, vans, trailers, etc.)</li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              id={4}
              question="Submit for Review"
              answer={
                <div>
                  <p>When all required sections are complete:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Click <strong>Finish</strong></li>
                    <li>Your application status changes to <em>Pending Review</em></li>
                    <li>Our administrators will check your details & documents</li>
                  </ul>
                </div>
              }
            />
            <SingleFaq
              id={5}
              question="Fix Issues (if needed)"
              answer={
                <div>
                  <p>If something is missing or incorrect:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Highlighted fields show notes (e.g., “Invalid IBAN”, “Insurance expired”)</li>
                    <li>Update only the incorrect fields and re-submit</li>
                    <li>Repeat until everything is correct</li>
                  </ul>
                </div>
              }
            />
            <SingleFaq
              id={6}
              question="Get Approved & Start Using the Platform"
              answer={
                <div>
                  <p>Once approved, you’ll receive a confirmation email:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Log in with your email and password</li>
                    <li>Access the platform and start using all features</li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;