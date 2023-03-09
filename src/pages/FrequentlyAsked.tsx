import { Container, Accordion } from "react-bootstrap";
import BreadFrequent from "../components/breadcrumbs/BreadFrequent";

const FrequentlyAsked = () => {
  return (
    <Container className="faq">
      <BreadFrequent />
      <Accordion className="mx-md-5 my-3" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-light">
            Sign up with your Facebook Account
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <ul>
              <li className="mt-md-2 mt-sm-1">
                Look in the upper right-hand corner of gifbuz.com– you should
                see a button that says Log In. Click it!
              </li>
              <li className="mt-md-2 mt-sm-1">
                A form will come, click on Sign up.
              </li>
              <li className="mt-md-2 mt-sm-1">
                Click on Continue with Facebook
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now you will redirected to Facebbok Login Page
              </li>
              <li className="mt-md-2 mt-sm-1">
                Give Your facebook email address and Password
              </li>
              <li className="mt-md-2 mt-sm-1">
                After Click to login give necessary permission
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now you have successfully come to your new Gifbuz Account
              </li>
              <li className="mt-md-2 mt-sm-1">
                Then Click to Join Button and you are Done
              </li>
              <li className="mt-md-2 mt-sm-1">
                At first you need to change your Display Name from Edit Profile
              </li>
              <li className="mt-md-2 mt-sm-1">
                You can watch the tutorial to Sign Up to your account with
                Facebook
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="1">
          <Accordion.Header className="text-light">
            Sign up with email Address
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <ul>
              <li className="mt-md-2 mt-sm-1">
                Look in the upper right-hand corner of gifbuz.com– you should
                see a button that says Log In. Click it!
              </li>
              <li className="mt-md-2 mt-sm-1">
                A form will come, click on Sign up.
              </li>
              <li className="mt-md-2 mt-sm-1">
                Give a unique user name and a email address that were never used
                in gifbuz.com
              </li>
              <li className="mt-md-2 mt-sm-1">
                Give a password consisting of alphanumeric( as an Example
                %Cross10 OR Punk1#2)
              </li>
              <li className="mt-md-2 mt-sm-1">
                Click On I am not a robot Button and click on the pictures that
                are asked to
              </li>
              <li className="mt-md-2 mt-sm-1">
                Click the checkbox that says I have read, understand, and agree
                to the Privacy Policy and Terms of Service.
              </li>
              <li className="mt-md-2 mt-sm-1">
                Obviously yous hould read the Page Privacy Policy and Terms of
                Service
              </li>
              <li className="mt-md-2 mt-sm-1">
                Then Click to Join Button and you are Done
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now Go to your given Email address and verify your account
              </li>
              <li className="mt-md-2 mt-sm-1">
                You can watch the tutorial to Sign Up to your account with your
                Email address
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="2">
          <Accordion.Header className="text-light">
            Sign up with Google
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <ul>
              <li className="mt-md-2 mt-sm-1">
                Look in the upper right-hand corner of gifbuz.com– you should
                see a button that says Log In. Click it!
              </li>
              <li className="mt-md-2 mt-sm-1">
                A form will come, click on Sign up.
              </li>
              <li className="mt-md-2 mt-sm-1">Click on Continue with Google</li>
              <li className="mt-md-2 mt-sm-1">
                Now you will redirected to Google Page
              </li>
              <li className="mt-md-2 mt-sm-1">
                Give Your email address and Password
              </li>
              <li className="mt-md-2 mt-sm-1">
                After Click to login give necessary permission
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now you have successfully come to your new Gifbuz Account
              </li>
              <li className="mt-md-2 mt-sm-1">
                At first you need to change your Display Name from Edit Profile
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now Go to your given Email address and verify your account
              </li>
              <li className="mt-md-2 mt-sm-1">
                You can watch the tutorial to Sign Up to your account with
                Google
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="3">
          <Accordion.Header className="text-light">
            Sign up with Twitter
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <ul>
              <li className="mt-md-2 mt-sm-1">
                Look in the upper right-hand corner of gifbuz.com– you should
                see a button that says Log In. Click it!
              </li>
              <li className="mt-md-2 mt-sm-1">
                A form will come, click on Sign up.
              </li>
              <li className="mt-md-2 mt-sm-1">
                Click on Continue with twitter
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now you will redirected to twitter Login Page
              </li>
              <li className="mt-md-2 mt-sm-1">
                Give Your email or UserName and Password
              </li>
              <li className="mt-md-2 mt-sm-1">
                After Click to Sign In and give necessary permission
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now you have successfully come to your new Gifbuz Account
              </li>
              <li className="mt-md-2 mt-sm-1">
                At first you need to change your Display Name from Edit Profile
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now Go to your given Email address and verify your account
              </li>
              <li className="mt-md-2 mt-sm-1">
                You can watch the tutorial to Sign Up to your account with
                Twitter
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="4">
          <Accordion.Header className="text-light">
            Delete your Gifbuz Account?
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <span className="my-sm-1 my-md-5">
              Oh!! Alas are really want to leave the fun of Gifbuz? Can you
              please think again? What makes you uncomfortable that you are
              leaving? You Can mail us or contact our support team with any
              issue. But if you really want to Delete you account do the
              following:
            </span>
            <ul>
              <li className="mt-md-2 mt-sm-1">
                Login to your account with your email and password
              </li>
              <li className="mt-md-2 mt-sm-1">Click on the Profile</li>
              <li className="mt-md-2 mt-sm-1">Click on Edit Profile</li>
              <li className="mt-md-2 mt-sm-1">
                Scroll down to Delete your Account
              </li>
              <li className="mt-md-2 mt-sm-1">
                Click on Delete your Account and a form will appear where it
                shows Are you sure want to delete profile
              </li>
              <li className="mt-md-2 mt-sm-1">Click yes, delete anyway</li>
              <li className="mt-md-2 mt-sm-1">
                So you are successfully delete your Gifbuz Account
              </li>
            </ul>
            <span className="my-md-3 my-sm-1">
              {" "}
              But We can assure you that this is not the end. You can come back
              any time with your email account.
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="5">
          <Accordion.Header className="text-light">
            How to Upload a Gif?
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <ul>
              <li className="mt-md-2 mt-sm-1">
                Log in to your account with your email address and Password
              </li>
              <li className="mt-md-2 mt-sm-1">
                After login, click on the upload button top Left
              </li>
              <li className="mt-md-2 mt-sm-1">
                A page will appear where where we have to choose Select GIF to
                Upload
              </li>
              <li className="mt-md-2 mt-sm-1">
                Choose a Gif from your Local Device and wait for sometime
              </li>
              <li className="mt-md-2 mt-sm-1">
                The uploaded gif will be shown and give title and Tags and
                choose gif categories and click to Upload Gif
              </li>
              <li className="mt-md-2 mt-sm-1">
                The new uploaded gif will be available in your Dashboard, now
                you can share the with your friends and family with different
                social platforms.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="6">
          <Accordion.Header className="text-light">
            How to share a Gif on Facebook and other Social Media?
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <span className="my-5">
              Do you know that you don’t need to have any Gifbuz account to
              share the gifs from our large collection of Gifs.There are two
              different ways you can share Gif to your preferred social media.
            </span>
            <ul>
              <li className="mt-md-2 mt-sm-1">
                First is, Hover to the gif you would like to share, Click on the
                icon (share) ,choose your preferred media where you like to
                share, do the necessary things as usual.
              </li>
              <li className="mt-md-2 mt-sm-1">
                Apart from that you can also click to the icon (copy link) and
                can copy the link and paste it to your desired location to share
                the gif
              </li>
              <li className="mt-md-2 mt-sm-1">
                A login window will appeared and below that click on “forgot
                Password”
              </li>
              <li className="mt-md-2 mt-sm-1">
                The Second way is , Click to gif you would like to share. Check
                the right side of your Gif, named Share GIF on Social Media.
                Click on your desired Social button where you would like to
                share. If you are not logged in , Log in to share them.
              </li>
            </ul>
            <span className="my-5">
              You can do the same thing to share your Own recent Gif after you
              Logged in to your own Gifbuz.com.
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="7">
          <Accordion.Header className="text-light">
            What will I do to if forget My Password?
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <ul>
              <li className="mt-md-2 mt-sm-1">Go to gifbuz.com</li>
              <li className="mt-md-2 mt-sm-1">
                Click to login with your email and password
              </li>
              <li className="mt-md-2 mt-sm-1">
                A login window will appeared and below that click on “forgot
                Password”
              </li>
              <li className="mt-md-2 mt-sm-1">
                Give your mail id with that you signed up and click to “send
                OTP”
              </li>
              <li className="mt-md-2 mt-sm-1">
                A otp will be sent to your mail id
              </li>
              <li className="mt-md-2 mt-sm-1">
                Login to your mail and click on the mail that is consist of OTP
                and copy the OTP
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now paste the otp the a new form and give a new password that
                you would like to set for your gifbuz account
              </li>
              <li className="mt-md-2 mt-sm-1">
                So, you have successfully updated your gifbuz account password
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="mt-3" eventKey="8">
          <Accordion.Header className="text-light">
            How Can I Change My Display Name?
          </Accordion.Header>
          <Accordion.Body className="text-light">
            <ul>
              <li className="mt-md-2 mt-sm-1">Go to gifbuz.com</li>
              <li className="mt-md-2 mt-sm-1">
                Click to login with your email and password
              </li>
              <li className="mt-md-2 mt-sm-1">
                Click on your Profile and then click to Edit Profile
              </li>
              <li className="mt-md-2 mt-sm-1">
                From account setting you can change your Display name
              </li>
              <li className="mt-md-2 mt-sm-1">
                Now you can clear your previous display name and add a new name
              </li>
              <li className="mt-md-2 mt-sm-1">
                Click to save button now check your dashboard to check your new
                display name.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FrequentlyAsked;
