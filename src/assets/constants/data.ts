// TeamMember Images
import TeamOne from "../../assets/images/TeamOne.png";
import TeamTwo from "../../assets/images/TeamTwo.png";
import TeamThree from "../../assets/images/TeamThree.png";
import TeamFour from "../../assets/images/TeamFour.png";
import TeamFive from "../../assets/images/TeamFive.png";
import TeamSix from "../../assets/images/TeamSix.png";

//Product Images
import VideoApp from "../../assets/images/video.png";
import AudioApp from "../../assets/images/audio.png";
import GifApp from "../../assets/images/gif.png";

export const TeamMembers: string[] = [
  TeamOne,
  TeamTwo,
  TeamThree,
  TeamFour,
  TeamFive,
  TeamSix,
  TeamTwo,
  TeamFour,
  TeamOne,
];

export const ProductApps: string[] = [
  VideoApp,
  AudioApp,
  GifApp,
  VideoApp,
  AudioApp,
  GifApp,
];

interface Accordion {
  id: number;
  header: string;
  items: string[];
  messageOne?: string;
  messageTwo?: string;
}

export const Accordions: Accordion[] = [
  {
    id: 1,
    header: "Sign up with your Facebook Account",
    items: [
      "Look in the upper right-hand corner of gifbuz.com– you should see a button that says Log In. Click it!",
      "A form will come, click on Sign up.",
      "Click on Continue with Facebook",
      "Now you will redirected to Facebbok Login Page",
      "Give Your facebook email address and Password",
      "After Click to login give necessary permission",
      "Now you have successfully come to your new Gifbuz Account",
      "Then Click to Join Button and you are Done",
      "At first you need to change your Display Name from Edit Profile",
      "You can watch the tutorial to Sign Up to your account with Facebook",
    ],
  },
  {
    id: 2,
    header: "Sign up with email Address",
    items: [
      "Look in the upper right-hand corner of gifbuz.com– you should see a button that says Log In. Click it!",
      "A form will come, click on Sign up.",
      "Give a unique user name and a email address that were never used in gifbuz.com",
      "Give a password consisting of alphanumeric( as an Example %Cross10 OR Punk1#2)",
      "Click On I am not a robot Button and click on the pictures that are asked to",
      "Click the checkbox that says I have read, understand, and agree to the Privacy Policy and Terms of Service.",
      "Obviously yous hould read the Page Privacy Policy and Terms of Service",
      "Then Click to Join Button and you are Done",
      "Now Go to your given Email address and verify your account",
      "You can watch the tutorial to Sign Up to your account with your Email address",
    ],
  },
  {
    id: 3,
    header: "Sign up with Google",
    items: [
      "Look in the upper right-hand corner of gifbuz.com– you should see a button that says Log In. Click it!",
      "A form will come, click on Sign up.",
      "Now you will redirected to Google Page",
      "Give Your email address and Password",
      "After Click to login give necessary permission",
      "Now you have successfully come to your new Gifbuz Account",
      "At first you need to change your Display Name from Edit Profile",
      "Now Go to your given Email address and verify your account",
      "You can watch the tutorial to Sign Up to your account with Google",
    ],
  },
  {
    id: 4,
    header: "Sign up with Twitter",
    items: [
      "Look in the upper right-hand corner of gifbuz.com– you should see a button that says Log In. Click it!",
      "A form will come, click on Sign up.",
      "Click on Continue with twitter",
      "Now you will redirected to twitter Login Page",
      "Give Your email or UserName and Password",
      "After Click to Sign In and give necessary permission",
      "Now you have successfully come to your new Gifbuz Account",
      "At first you need to change your Display Name from Edit Profile",
      "Now Go to your given Email address and verify your account",
      "You can watch the tutorial to Sign Up to your account with Twitter",
    ],
  },
  {
    id: 5,
    header: "Delete your Gifbuz Account?",
    messageOne:
      "Oh!! Alas are really want to leave the fun of Gifbuz? Can you please think again? What makes you uncomfortable that you are leaving? You Can mail us or contact our support team with any issue. But if you really want to Delete you account do the following:",
    items: [
      "Login to your account with your email and password",
      "Scroll down to Delete your Account",
      "Click on Delete your Account and a form will appear where it shows Are you sure want to delete profile",
      "Click yes, delete anyway",
      "So you are successfully delete your Gifbuz Account",
    ],
    messageTwo:
      "But We can assure you that this is not the end. You can come back any time with your email account.",
  },
  {
    id: 6,
    header: "How to Upload a Gif?",
    items: [
      "Log in to your account with your email address and Password",
      "After login, click on the upload button top Left",
      "A page will appear where where we have to choose Select GIF to Upload",
      "Choose a Gif from your Local Device and wait for sometime",
      "The uploaded gif will be shown and give title and Tags and choose gif categories and click to Upload Gif",
      "The new uploaded gif will be available in your Dashboard, now you can share the with your friends and family with different social platforms.",
    ],
  },
  {
    id: 7,
    header: "How to share a Gif on Facebook and other Social Media?",
    messageOne:
      "Do you know that you don’t need to have any Gifbuz account to share the gifs from our large collection of Gifs.There are two different ways you can share Gif to your preferred social media.",
    items: [
      "First is, Hover to the gif you would like to share, Click on the icon (share) ,choose your preferred media where you like to share, do the necessary things as usual.",
      "Apart from that you can also click to the icon (copy link) and can copy the link and paste it to your desired location to share the gif",
      "A login window will appeared and below that click on “forgot Password”",
      "The Second way is , Click to gif you would like to share. Check the right side of your Gif, named Share GIF on Social Media. Click on your desired Social button where you would like to share. If you are not logged in , Log in to share them.",
      "",
    ],
    messageTwo:
      "You can do the same thing to share your Own recent Gif after you Logged in to your own Gifbuz.com.",
  },
  {
    id: 8,
    header: "What will I do to if forget My Password?",
    items: [
      "Go to gifbuz.com",
      "Click to login with your email and password",
      "A login window will appeared and below that click on “forgot Password”",
      "Give your mail id with that you signed up and click to “send OTP”",
      "A otp will be sent to your mail id",
      "Login to your mail and click on the mail that is consist of OTP and copy the OTP",
      "Now paste the otp the a new form and give a new password that you would like to set for your gifbuz account",
      "So, you have successfully updated your gifbuz account password",
    ],
  },
  {
    id: 9,
    header: "How Can I Change My Display Name?",
    items: [
      "Click to login with your email and password",
      "Click on your Profile and then click to Edit Profile",
      "From account setting you can change your Display name",
      "Now you can clear your previous display name and add a new name",
      "Click to save button now check your dashboard to check your new display name.",
    ],
  },
];
