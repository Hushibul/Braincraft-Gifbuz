import { Container } from "react-bootstrap";
import BreadCrumb from "../components/breadcrumbs/BreadCrumb";

import ScreenShotOne from "../assets/images/ss1.png";
import ScreenShotTwo from "../assets/images/ss2.png";

const PrivacyPolicy = () => {
  return (
    <Container>
      <BreadCrumb />
      <div>
        <h2 className="title">Privacy Policy</h2>
        <p className="text">
          When you use our services, you’re trusting us with your information.
          We understand this is a big responsibility and work hard to protect
          your information and put you in control.
          <br />
          This Privacy Policy is meant to help you understand what information
          we collect, why we collect it, and how you can update, manage, and
          delete your information.
          <br />
          This Privacy Policy does not apply to the practices of third parties
          that we do not own or control, including but not limited to any third
          party websites, services and applications (each a “Third Party
          Service”) that you elect to access through the Service or to
          individuals that we do not manage or employ. While we attempt to
          facilitate access only to those Third Party Services that share our
          respect for your privacy, we cannot take responsibility for the
          content or privacy policies of those Third Party Services. We
          encourage you to carefully review the privacy policies of any Third
          Party Services you access.
        </p>
      </div>
      <div>
        <h2 className="title">WHAT INFORMATION DO GIFBUZ COLLECT ABOUT YOU?</h2>
        <p className="text">
          We collect Personal Data about you when you provide such information
          directly to us, when third parties such as our business partners or
          service providers provide us with Personal Data about you, or when
          Personal Data about you is automatically collected in connection with
          your use of our Services. The information we gather enables us to
          improve, understand, and continue to operate the Services. In
          connection with certain aspects of the Services, we may request,
          collect and/or display some of your Personal Data. Below explains in
          greater detail the types of information that we collect about our
          users.
        </p>
      </div>
      <ol className="term-policy">
        <li className="subtitle">
          Account Information: <br />{" "}
          <p className="text">
            <span className="mb-2 mb-md-4 d-block">
              If you create an Account, register for a brand or artist channel,
              or register for a verified user profile, or have registered for
              Electric Objects, you will provide information that could be
              Personal Data, such as your email address, username, contact name,
              password, display name (for artist channel) and art preferences
              (for Electric Objects). You may also choose to provide additional
              Personal Data, including an avatar/profile picture, information
              about yourself, basic demographic information, a description of
              your channel, a brand’s parent company (brand or artist channel),
              location (brand or artist channel), your Gifbuz’s profile URL (for
              verified user profile), attachments to your application (for
              verified user profile) and links to your website or social media
              profiles.
            </span>{" "}
            <span>
              Additionally, if you register for or access the Services using a
              Third Party Service (such as your social media account login
              credentials), we may receive Personal Data that you have made
              available to share through such Third Party Service, which may
              include, without limitation, your name. You may also choose to
              include your email address. You acknowledge that this information
              may be personal to you, and by creating an Account and providing
              Personal Data to us, you allow others, including us, to identify
              you and therefore may not be anonymous. We may use your contact
              information to send you information about our Services.
            </span>
          </p>
        </li>

        <li className="subtitle">
          Automatic Data Collection <br />
          <p className="text">
            <span className="mb-2 mb-md-4 d-block">
              We may collect certain information automatically through our
              Services or other methods of web analysis, such as your Internet
              protocol (IP) address, cookie identifiers, mobile carrier, mobile
              advertising identifiers, MAC address, and other device identifiers
              that are automatically assigned to your computer or device when
              you access the Internet, browser type and language, geo-location
              information, hardware type, operating system, Internet service
              provider, pages that you visit before and after using the
              Services, the date and time of your visit, the amount of time you
              spend on each page, information about the links you click and
              pages you view within the Services, and other actions taken
              through use of the Services such as preferences.
            </span>
            <span>
              In addition, we may automatically collect data regarding your use
              of our Services, such as the types of content you interact with
              and the frequency and duration of your activities. We may combine
              your information with information that other people provide when
              they use our Services.
            </span>
          </p>
        </li>
        <li className="subtitle">
          Information Collected Using Cookies <br />{" "}
          <p className="text">
            <span className="d-block mb-2 mb-md-2">
              Our cookies do not, by themselves, contain Personal Data. However,
              we may match cookies with your Personal Data to identify you, and
              we may use cookies to identify that your web browser has accessed
              aspects of the Services and may associate that information with
              your Account if you have one.
            </span>
            <span>
              We may allow third party web analytics service providers to use
              cookies or similar technologies to collect information about your
              use of the Services. We use Google Analytics, a service provided
              by Google, Inc. (“Google”) to help us understand how users use the
              Services and to enhance your experience when you use the Services.
              For more information on Google’s privacy practices, please go
              <strong className="text-decoration-underline ms-1 text-success fw-bold cursor-pointer">
                https://policies.google.com/technologies/partner-sites
              </strong>{" "}
              to and to opt out of data recording and analysis by Google
              Analytics on the Services, please visit
              <strong className="text-decoration-underline ms-1 text-success fw-bold cursor-pointer">
                https://tools.google.com/dlpage/gaoptout
              </strong>
              . This Privacy Policy covers our use of cookies only and does not
              cover the use of cookies by third parties. We do not control when
              or how third parties place cookies on your computer or device. For
              example, third party websites to which a link points may set
              cookies on your computer or device.
            </span>
          </p>
        </li>
        <li className="subtitle">
          Information you choose to provide <br />
          <p className="text">
            {" "}
            Gifbuz does not “collect” the stuff you post: images, comments,
            messages, etc., and does not “process” or determine any purposes for
            processing of any information that you manifestly make public. In
            particular, every image uploaded to Gifbuz is public – whether
            uploaded directly without going through a user account, or uploaded
            via a user account – and has its own URL. No matter what your
            privacy settings are, every image can always be accessed and viewed
            by anyone who types in that exact URL. No image uploaded to Gifbuz
            is ever completely hidden from public view. This is mainly to ensure
            that Gifbuz, which allows anonymous postings, will not be used as a
            platform for illegality. To ensure that Gifbuz's platform is not
            used as a platform for illegality, all messages are public. No
            messages are ever completely hidden from public view. We may monitor
            user messaging.
          </p>
        </li>
        <li className="subtitle">Post / Image Privacy</li>
        <p className="text">
          <span className="d-block mb-2 mb-md-2">
            Uploading a New image creates a “post” (also called “album”) that
            can be shared to the community. The individual images inside the
            post are referred to as “images.” Although nothing you post to
            Gifbuz is completely hidden from public view or entirely private,
            with that understanding you can set the privacy level of posts.
          </span>
          <span>
            <strong className="fw-bold">Private:</strong> Posts will be hidden
            by default. They are not searchable within Gifbuz, and will not
            appear in Gifbuz public gallery or public profile, but each one will
            still be accessible by going to the post's URL. Public: Posts will
            be publicly viewable and shared with the community. Public posts
            shared with the community will allow comments, sharing, and voting,
            and appear in a user's profile.
          </span>
        </p>
        <li className="subtitle">
          "Favorite" Privacy <br />
          <p className="text">
            <span className="d-block mb-2 mb-md-2">
              You can add favorited posts . Individual public posts that you
              favorite are always visible from the "Favorites" section in your
              user profile and cannot be hidden. Favorited private posts will
              appear publicly in your favorites.
            </span>
            <span>
              <strong className="fw-bold">Public:</strong> Folders are visible
              to the public community on your public profile. Private: Private
              images are kept hidden from your public profile.
            </span>
          </p>
        </li>
        <li className="subtitle">
          Aggregate Information <br />
          <p className="text">
            We collect statistical information about how both unregistered and
            registered users, collectively, use the Services (“Aggregate
            Information”). Some of this information is derived from Personal
            Data. This statistical information is not Personal Data and cannot
            be tied back to you, your Account, or your web browser.
          </p>
        </li>
        <li className="subtitle">
          CHILDREN UNDER THE AGE OF 13 <br />
          <p className="text">
            Gifbuz Services are not intended for children under 13 years of age.
            No one under age 13 may provide any personal information to our
            Gifbuz Services. We do not knowingly collect personal information
            from children under 13. If you are under 13, do not register for any
            of our Gifbuz Services or use or provide any information to the
            Company through our Gifbuz Services, contribute or use any
            Contributions or other content generated by you as a user on the
            Gifbuz Services (“User Generated Content”) , use any of the
            interactive or public comment features available through the Gifbuz
            Services or provide any information about yourself to us, including
            your name, address, telephone number, e-mail address or any screen
            name or user name you may use. If we learn we have collected or
            received personal information from a child under 13 without
            verification of parental consent, we will delete that information.
            If you believe we might have any information from or about a child
            under 13, please contact us at{" "}
            <strong className="fw-bold text-decoration-underline text-success cursor-pointer">
              support@gifbuz.com
            </strong>
          </p>
        </li>
        <li className="subtitle">
          HOW GIFBUZ USES YOUR INFORMATION
          <p className="text">
            <span className="mb-2 d-block mb-md-4">
              The Services are designed to help you share information with
              others. As a result, some of the information generated through the
              Services is shared publicly or with Third Party Services. What
              information is shared publicly depends on your privacy settings.
              Below further describes the ways in which we may share your
              information. We do not sell your Personal Data.
            </span>
            <span>
              We do not share your personal information with companies,
              organizations, or individuals outside of Gifbuz except in the
              following cases:
            </span>
          </p>
        </li>
        <li className="subtitle">
          With your consent <br />
          <p className="text">
            We’ll share your created content outside of Gifbuz when we have your
            consent. For example, if you want to share your profile in your
            social media account, we provide you a shareable URL for that.
          </p>
        </li>
        <li className="subtitle">
          With domain administrators <br />
          <p className="text">
            For following purposes your information is shared with domain
            controllers.
            <ul className="mt-3">
              <li>
                Access and retain information stored in your account, like your
                email.
              </li>
              <li>Change your account password.</li>
              <li>Suspend or terminate your account access.</li>
              <li>
                Receive your account information in order to satisfy applicable
                law, regulation, legal process, or enforceable governmental
                request.
              </li>
              <li>
                Restrict your ability to delete or edit your information or your
                privacy settings.
              </li>
            </ul>
          </p>
        </li>
        <li className="subtitle">
          For external processing <br />
          <p className="text">
            For creating analytical data to improve your user experience we may
            use third party analytics providers to analyze the data without
            disclosing your personal information. We may use non-personally
            identifiable information to analytics.
          </p>
        </li>
        <li className="subtitle">
          For legal reasons <br />
          <p className="text">
            We will share personal information outside of Gifbuz if we have a
            good-faith belief that access, use, preservation, or disclosure of
            the information is reasonably necessary to:
            <ul className="mt-3">
              <li>
                Meet any applicable law, regulation, legal process, or
                enforceable governmental request.
              </li>
              <li>
                Enforce applicable Terms of Service, including investigation of
                potential violations.
              </li>
              <li>
                Detect, prevent, or otherwise address fraud, security, or
                technical issues.
              </li>
              <li>
                Protect against harm to the rights, property or safety of
                Gifbuz, our users, or the public as required or permitted by
                law.
              </li>
            </ul>
          </p>
        </li>
        <li className="subtitle">
          DELETE YOUR ACCOUNT
          <p className="text">
            If you want to delete your account and all resources from your
            account, go to your dashboard’s Edit profile option and at the
            bottom part, there is a delete button. You can follow the delete
            procedure from there. <br />
            <strong className="fw-bold">Screenshots attached:</strong>
            <div className="d-flex flex-column flex-md-row gap-3">
              <img
                className="img-fluid"
                src={ScreenShotOne}
                alt="delete account"
              />
              <img
                style={{ maxWidth: "80%" }}
                src={ScreenShotTwo}
                alt="delete your accout"
              />
            </div>
            All the links of your account and your contents will be deleted. So,
            it is possible that you delete your account and your content is
            available using direct URL, but it’s not possible to identify if
            those contents are linked with your account in any way.
          </p>
        </li>
        <li className="subtitle">
          HOW LONG DO WE RETAIN YOUR PERSONAL DATA? <br />
          <p className="text">
            We retain Personal Data about you for as long as you have an open
            account with us or as otherwise necessary to provide you Services.
            In some cases we retain Personal Data for longer, if doing so is
            necessary to comply with our legal obligations, resolve disputes or
            collect fees owed, or is otherwise permitted or required by
            applicable law, rule or regulation. Afterwards, we retain some
            information in a depersonalized or aggregated form but not in a way
            that would identify you personally.
          </p>
        </li>

        <li className="subtitle">
          DATA PROTECTION <br />
          <p className="text">
            We take every reasonable precaution to protect the data on our
            servers from loss, misuse, unauthorized access, disclosure,
            alteration, or destruction, taking into account the risk level and
            the nature of the data. You are responsible for taking every
            reasonable precaution on your end to protect any unauthorized person
            from accessing your Gifbuz account.
          </p>
        </li>

        <li className="subtitle">
          GDPR <br />
          <p className="text">
            Gifbuz does not collect “personal data” about, or monitor behavior
            of, “data subjects” as those terms are defined in GDPR Art.4(1), nor
            do we “target” individuals in the EU. Regarding the latter, see
            Guidelines 3/2018 on the territorial scope of the GDPR (Article 3),
            Ver. 2.1 (07 Jan 2020). To contact us regarding privacy issues, you
            can email us at{" "}
            <strong className="text-decoration-underline text-success fw-bold cursor-pointer">
              support@gifbuz.com
            </strong>
          </p>
        </li>
        <li className="subtitle">
          CHANGES TO THIS PRIVACY POLICY <br />
          <p className="text">
            We may revise our privacy policy from time to time by posting the
            changes here. You can determine the date of the most recent changes
            by looking at the “effective date” at the top.
          </p>
        </li>
        <li className="subtitle">
          WHAT IF I HAVE QUESTIONS OR CONCERNS? <br />
          <p className="text">
            If you have any questions or concerns regarding privacy using the
            Services, please send us a detailed message to{" "}
            <strong className="text-decoration-underline fw-bold text-success cursor-pointer">
              support@gifbuz.com
            </strong>
            . We will make every effort to resolve your concerns.
          </p>
        </li>
      </ol>
    </Container>
  );
};

export default PrivacyPolicy;
