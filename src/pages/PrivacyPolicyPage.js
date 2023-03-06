import { useSelector } from "react-redux";

function PrivacyPolicyPage() {
  const { headingColor, textColor } = useSelector((state) => state.color);
  return (
    <div className='flex flex-col items-center justify-between mb-0'>
      <h4
        className={`text-2xl md:text-3xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-center ${headingColor}`}
      >
        Privacy Policy
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        At Unbottled Emotions, we are committed to protecting the privacy and
        confidentiality of our users' personal information. This Privacy Policy
        outlines how we collect, use, and safeguard your personal information
        when you visit our website.
      </p>
      <h4
        className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
      >
        Information We Collect
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        We collect two types of information: personal information and
        non-personal information.
        <br /> <br /> Personal information is information that can identify you,
        such as your name, email address, phone number, and any other
        information you provide when you contact us through our website. <br />
        <br />
        Non-personal information is information that cannot be used to identify
        you, such as your browser type, IP address, and the pages you visit on
        our website.
      </p>
      <h4
        className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
      >
        How We Use Your Information
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        We use your personal information to respond to your inquiries and
        provide you with the services you request. We may also use your personal
        information to send you promotional emails about our services, but you
        can opt out of these emails at any time. <br /> <br />
        We may use non-personal information to improve our website and customize
        your experience.
      </p>
      <h4
        className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
      >
        Information Sharing
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        We do not share your personal information with any third parties, except
        as required by law or as necessary to provide you with the services you
        request.
        <br /> <br />
        We may share non-personal information with third-party service providers
        who help us analyze our website traffic and improve our website.
      </p>
      <h4
        className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
      >
        Data Security
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        We take reasonable measures to protect your personal information from
        unauthorized access, use, and disclosure. However, no method of
        transmission over the internet or electronic storage is 100% secure, and
        we cannot guarantee the absolute security of your information.
      </p>
      <h4
        className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
      >
        Your Rights
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        You have the right to request access to, correction of, or deletion of
        your personal information. You also have the right to object to or
        restrict the processing of your personal information. <br />
        To exercise any of these rights, please contact us using the contact
        information provided below.
      </p>
      <h4
        className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
      >
        Changes to this Privacy Policy
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        We reserve the right to modify this Privacy Policy at any time. Any
        changes will be effective immediately upon posting on our website.
      </p>
      <h4
        className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
      >
        Contact Us
      </h4>
      <p
        className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
      >
        If you have any questions or concerns about this Privacy Policy, please
        contact us at shubhangi.therapist@pm.me
      </p>
    </div>
  );
}

export default PrivacyPolicyPage;
