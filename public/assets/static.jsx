"use client";
const { default: Signuplogo1 } = require("./svg/signuplogo1");
const { default: Signuplogo2 } = require("./svg/signuplogo2");
const { default: Signuplogo3 } = require("./svg/signuplogo3");
const { default: Signuplogo4 } = require("./svg/signuplogo4");
const { default: Signuplogo5 } = require("./svg/signuplogo5");
const { default: Signuplogo6 } = require("./svg/signuplogo6");
const { default: Signuplogo7 } = require("./svg/signuplogo7");
const { default: Signuplogo8 } = require("./svg/signuplogo8");
import EmailIcon from "@mui/icons-material/Email";
import LocationIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import blogImgOne from "../assets/images/blogimg1.webp";
import blogImgTwo from "../assets/images/blogimg2.webp";
import blogImgThree from "../assets/images/blogimg3.webp";
import ceo1 from "../assets/images/ceo1.webp";
import ceo2 from "../assets/images/ceo2.webp";
import ceo3 from "../assets/images/ceo3.webp";
import ceo4 from "../assets/images/ceo4.webp";
import featureOne from "../assets/images/feature1.webp";
import feebackImg from "../assets/images/feature2.webp";
import dataCollectioneImg from "../assets/images/feature3.webp";
import languageImg from "../assets/images/feature4.webp";
import reservationImg from "../assets/images/feature5.webp";
import firstFeatureImg from "../assets/images/firstFeatureImg.webp";
import sliderimage1 from "../assets/images/sliderimage1.webp";
import sliderimage2 from "../assets/images/sliderimage2.webp";
import sliderimage3 from "../assets/images/sliderimage3.webp";
import sliderimage4 from "../assets/images/sliderimage4.webp";
import sliderimage5 from "../assets/images/sliderimage5.webp";
import rating from "../assets/images/star.webp";
import mainCourse from "/public/assets/images/main-course.webp";
import Deserts from "/public/assets/images/deserts.webp";
import Salads from "/public/assets/images/salads.webp";
import starters from "/public/assets/images/starters.webp";
import mainCourseFullWidth from "/public/assets/images/main-course-fullimg.webp";
import chickenWraps from "/public/assets/images/chickenwraps.webp";
import desertsFullwidth from "/public/assets/images/deserts-fullwidth.webp";
import desertCardimg from "/public/assets/images/desert-cardimg.webp";
import saladsfullwidth from "/public/assets/images/saladsfullwidth.webp";
import specialSalad from "/public/assets/images/special-salad.webp";
import gazpacho from "/public/assets/images/gazpacho.webp";
import startersfullwidth from "/public/assets/images/startersfullwidth.webp";
import EggSvg, { sugarSvg, PineSvg } from "./svg/Egg";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
export const logoComponents = [
  Signuplogo1,
  Signuplogo2,
  Signuplogo3,
  Signuplogo4,
  Signuplogo5,
  Signuplogo6,
  Signuplogo7,
  Signuplogo8,
];

// export const appfeatureCardDetails = [
//     {
//         heading: { t("Title") },
//         text: "Garsonline’s AI powered technology, identifies the most preferred order combinations of items and make smart recommendations to the guests to order more and maximize your revenue.",
//     },
//     {
//         heading: "Fully Customized Menus",
//         text: "Implement your branding by adjusting colors and adding your logo and fonts. Customize how your menu looks, and use videos and images to tell your story to your customers.",
//         bgColor: "#D1D5DB",
//     },
//     {
//         heading: "An Upgraded Ordering Process",
//         text: "Integrating with the world’s leading POS systems to sync the menus when you make a change and send all orders to the POS system, the Garsonline dashboard, and your kitchen & bar printers simultaneously.",
//     },

// ]
export const getAppFeatureCardDetails = (t) => [
  {
    heading: t("Title"),
    text: t("Subtitle"),
  },
  {
    heading: t("Title1"),
    text: t("Subtitle1"),
    bgColor: "#D1D5DB",
  },
  {
    heading: t("Title2"),
    text: t("Subtitle2"),
  },
  {
    heading: t("Title3"),
    text: t("Subtitle3"),
  },
];
export const getOurServicesDetails = (t) => [
  {
    heading: t("ServicesHeading1"),
    text: t("ServicesText1"),
  },
  {
    heading: t("ServicesHeading2"),
    text: t("ServicesText2"),
  },
  {
    heading: t("ServicesHeading3"),
    text: t("ServicesText3"),
  },
  {
    heading: t("ServicesHeading4"),
    text: t("ServicesText4"),
  },
  {
    heading: t("ServicesHeading5"),
    text: t("ServicesText5"),
  },
  {
    heading: t("ServicesHeading6"),
    text: t("ServicesText6"),
  },
  {
    heading: t("ServicesHeading7"),
    text: t("ServicesText7"),
  },
];
export const sidebarmenu = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    route: "/venues/dashboard",
    isCollapsible: false,
  },
  {
    title: "Menu Management",
    icon: <RestaurantMenuIcon />,
    route: "/venues/menu-management",
    isCollapsible: false,
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    isCollapsible: true,
    subItems: [
      { title: "QR Code", route: "/venues/settings/qrcode" },
      { title: "Venue Information", route: "/venues/settings/venue-information" },
      { title: "Operating Hours", route: "/venues/settings/operating-hours" },
    ],
  },
];
export const getwhyChooseDetails = (t) => [
  {
    heading: t("Heading1"),
    text: t("Text1"),
  },
  {
    heading: t("Heading2"),
    text: t("Text2"),
  },
  {
    heading: t("Heading3"),
    text: t("Text3"),
  },
  {
    heading: t("Heading4"),
    text: t("Text4"),
  },
  {
    heading: t("Heading5"),
    text: t("Text5"),
  },
  {
    heading: t("Heading6"),
    text: t("Text6"),
  },
];
export const getMarqueeCardDetails = (t) => [
  // {
  //   text: t("Text1"),
  //   starImage: rating,
  //   ceoImage: ceo1,
  //   companyName: t("CompayName1"),
  //   ceoName: t("CeoName1"),
  // },
  {
    text: t("Text2"),
    starImage: rating,
    ceoImage: ceo3,
    companyName: t("CompayName2"),
    ceoName: t("CeoName2"),
  },
  // {
  //   text: t("Text3"),
  //   starImage: rating,
  //   companyName: t("CompayName3"),
  //   ceoName: t("CeoName3"),
  // },
  {
    text: t("Text4"),
    starImage: rating,
    ceoImage: ceo2,
    companyName: t("CompayName4"),
    ceoName: t("CeoName4"),
  },
  {
    text: t("Text5"),
    starImage: rating,
    ceoImage: ceo4,
    companyName: t("CompayName5"),
    ceoName: t("CeoName5"),
  },
];

export const featureCardData = [
  {
    heading: "Menu Customization",
    text: "Tailor your menu’s look and feel to perfectly match your restaurant’s brand and ambiance.",
    columns: 4,
    cardImage: firstFeatureImg,
    imageWidth: "100%",
    imageHeight: "250px",
    bottom: "0px",
  },
  {
    heading: "Smart Recommendations",
    text: "Leverage AI- driven suggestions to upsell and cross - sell, enhancing customer orders and boosting revenue.",
    columns: 8,
    cardImage: featureOne,
    imageWidth: "100%",
    imageHeight: "220px",
    bottom: "-10px",
  },
  {
    heading: "Customer Feedback",
    text: "Gather valuable insights directly from your guests to continuously enhance their dining experience.",
    columns: 8,
    cardImage: feebackImg,
    imageWidth: "100%",
    imageHeight: "250px",
    bottom: "-10px",
    left: "-20px",
  },
  {
    heading: "Data Collection",
    text: "Harness the power of data to understand customer preferences and optimize your offerings.",
    columns: 4,
    cardImage: dataCollectioneImg,
    imageWidth: "100%",
    imageHeight: "250px",
    left: "-30px",
    bottom: "0px",
  },
  {
    heading: "Multiple Language & Currencies",
    text: "Cater to a global clientele with diverse language options and multi-currency payment support.",
    columns: 4,
    cardImage: languageImg,
    imageWidth: "120%",
    imageHeight: "200px",
    left: "0px",
    bottom: "0px",
  },
  {
    heading: "Reservation Management",
    text: "Streamline table bookings with an intuitive system that maximizes seating and minimizes wait times.",
    columns: 8,
    cardImage: reservationImg,
    imageWidth: "110%",
    imageHeight: "220px",
    bottom: "-10px",
    left: "0px",
  },
];
export const blogCardData = [
  {
    cardImage: blogImgOne,
    cardData:
      "TikTok Guide for Restaurants — How to Take Advantage of TikTok for Your Business",
    date: "February 27, 2023",
    time: "5 min read",
    altText: "blog image one",
  },
  {
    cardImage: blogImgTwo,
    cardData: "Food Photography Tips for Your Restaurant and Digital Menu",
    date: "July 31, 2023",
    time: "5 min read",
    altText: "blog image two",
  },
  {
    cardImage: blogImgThree,
    cardData:
      "SanCarlo Bahrain Improves Efficiency and Increases Revenue with Garsonline's Digital Menu Technology",
    date: "April 27, 2023",
    time: "5 min read",
    altText: "blog image three",
  },
];

export const footerData = [
  {
    title: "SOLUTIONS",
    listData: [
      {
        name: "Dine-in QW Menu",
      },
      {
        name: "GarsonlinePOS Lite",
      },
      {
        name: "Reservations",
      },
      {
        name: "Dine-in Tablet Menu",
      },
      {
        name: "Delievery & Pickup Menu",
      },
      {
        name: "Fast Checkout",
      },
      {
        name: "Order & Pay",
      },
      {
        name: "CRM & Loyality",
      },
    ],
  },
  {
    title: "Features",
    listData: [
      {
        name: "Allergens Nutrition Info & Calories",
      },
      {
        name: "Multiple Language Display",
      },
      {
        name: "Multiple Currency Display",
      },
      {
        name: "Custom Design and Branding",
      },
      {
        name: "Tip Collection",
      },
      {
        name: "Table Management",
      },
      {
        name: "Feedback Collection",
      },
      {
        name: "Menu Management",
      },
      {
        name: "Campaigns",
      },
    ],
  },
  {
    title: "USE CASES",
    listData: [
      {
        name: "Hotels",
      },
      {
        name: "Café & Bakery",
      },
      {
        name: "Coffee Shops",
      },
      {
        name: "Bars and Night Clubs",
      },
      {
        name: "Enterprises",
      },
      {
        name: "Fine Dining",
      },
      {
        name: "Casual Dining",
      },
      {
        name: "Ghost Kitchens",
      },
      {
        name: "Food Trucks",
      },
    ],
  },
  {
    title: "Earn More with Garsonline",
    listData: [
      {
        name: "Become an Affiliate",
      },
      {
        name: "Become a Reseller",
      },
    ],
  },
  {
    title: "Contact Us",
    listData: [
      {
        name: "info@garsonlinemenu.com",
      },
    ],
  },
];
// export const footerData = [
//     {
//         title: "SOLUTIONS",
//         listData: [
//             {
//                 name: "Dine-in QW Menu",
//             },
//             {
//                 name: "GarsonlinePOS Lite",
//             },
//             {
//                 name: "Reservations",
//             },
//             {
//                 name: "Dine-in Tablet Menu",
//             },
//             {
//                 name: "Delievery & Pickup Menu"
//             },
//             {
//                 name: "Fast Checkout"
//             },
//             {
//                 name: "Order & Pay"
//             },
//             {
//                 name: "CRM & Loyality"
//             },
//         ]
//     },
//     {
//         title: "Features",
//         listData: [
//             {
//                 name: "Allergens Nutrition Info & Calories",
//             },
//             {
//                 name: "Multiple Language Display",
//             },
//             {
//                 name: "Multiple Currency Display",
//             },
//             {
//                 name: "Custom Design and Branding",
//             },
//             {
//                 name: "Tip Collection",
//             },
//             {
//                 name: "Table Management",
//             },
//             {
//                 name: "Feedback Collection",
//             },
//             {
//                 name: "Menu Management",
//             },
//             {
//                 name: "Campaigns",
//             },

//         ]
//     },
//     {
//         title: "USE CASES",
//         listData: [
//             {
//                 name: "Hotels",
//             },
//             {
//                 name: "Café & Bakery",
//             },
//             {
//                 name: "Coffee Shops",
//             },
//             {
//                 name: "Bars and Night Clubs",
//             },
//             {
//                 name: "Enterprises",
//             },
//             {
//                 name: "Fine Dining",
//             },
//             {
//                 name: "Casual Dining",
//             },
//             {
//                 name: "Ghost Kitchens",
//             },
//             {
//                 name: "Food Trucks",
//             },

//         ]
//     },
//     {
//         title: "Earn More with Garsonline",
//         listData: [
//             {
//                 name: "Become an Affiliate",
//             },
//             {
//                 name: "Become a Reseller",
//             },
//         ]
//     },
//     {
//         title: "Contact Us",
//         listData: [
//             {
//                 name: "info@garsonlinemenu.com",
//             },
//         ]
//     },

// ]
export const getFooterDetails = (t) => [
  {
    title: t("Title1"),
    listData: [
      { name: t("itemOne") },
      { name: t("itemTwo") },
      { name: t("itemThree") },
      { name: t("itemFour") },
      // { name: t("itemFive") },
      { name: t("itemSix") },
      // { name: t("itemSeven") },
      { name: t("itemEight") },
    ],
  },
  {
    title: t("Title2"),
    listData: [
      // { name: t("itemNine") },
      { name: t("itemTen") },
      // { name: t("itemEleven") },
      { name: t("itemTwelve") },
      // { name: t("itemThirteen") },
      { name: t("itemFourteen") },
      { name: t("itemFifteen") },
      { name: t("itemSixteen") },
      // { name: t("itemSeventeen") },
    ],
  },
  {
    title: t("Title3"),
    listData: [
      { name: t("itemEighteen") },
      { name: t("itemNineteen") },
      // { name: t("itemTwenty") },
      { name: t("itemTwentyOne") },
      { name: t("itemTwentyTwo") },
      // { name: t("itemTwentyThree") },
      // { name: t("itemTwentyFour") },
      // { name: t("itemTwentyFive") },
      { name: t("itemTwentySix") },
    ],
  },
  {
    title: t("Title4"),
    listData: [{ name: t("itemTwentySeven") }, { name: t("itemTwentyEight") }],
  },
  {
    title: t("Title5"),
    listData: [{ name: t("itemTwentyNine") }],
  },
];

// Marquee cards Static Data

// export const marqueeCardDetails = [
//     {
//         text: "Garsonline QR Menu is great to improve hospitality. It has all the information available in multiple languages which makes our local guests feel even more welcome and valuable. It eliminates errors in communication and makes our restaurants a place for all guests.",
//         starImage: rating,
//         ceoImage: ceo1,
//         companyName: "Chris Gia",
//         ceoName: "Cafe Sanuki,Manager"

//     },
//     {
//         text: "Garsonline allows us to upsell our products and increase the average ticket size. Just by digitizing our menu operations, our sales increased around 20%.",
//         starImage: rating,
//         ceoImage: ceo3,
//         companyName: "DogBegum ru",
//         ceoName: "Owner of Pokemate, Istanbul"

//     },
//     {
//         text: "We increased our sales about 15-20% and that’s a big increase by just using a software and using it properly.",
//         companyName: "Kamal Yuruk",
//         starImage: rating,
//         ceoName: "Manager at Spiro’s, NYC"
//     },
//     {
//         text: "Garsonline improved the cafe sales and helped us to launch our breakfast menu. From time to time, we update our menu with Garsonline and it is so easy!",
//         companyName: "Jay Carlo Rivera",
//         ceoName: "GODIVA Chocolatier",
//         ceoImage: ceo2,
//         starImage: rating,
//     },
//     {
//         text: "Garsonline has given us the liberty to make changes on our menus anytime! Our staff enjoys Garsonline, it’s very easy to use and convenient for everyone.",
//         companyName: "Sofitel Hotel & Resorts",
//         ceoName: "Matias Ess ",
//         ceoImage: ceo4,
//         starImage: rating,
//     },
//     {
//         text: "As our Brand TEN 11 Coffee Boutique is growing, Garsonline allowed us to simplify the ordering process and overall menu presentation to our customers. Garsonline has been an integral part of TEN 11 Coffee Boutique since our very first outlet in Abu Dhabi.",
//         companyName: "TEN 11 Coffee Boutique",
//         ceoName: "Mohsin Amin",
//         ceoImage: ceo5,
//         starImage: rating,
//     },
//     {
//         text: "Garsonline QR Menu is great to improve hospitality. It has all the information available in multiple languages which makes our local guests feel even more welcome and valuable. It eliminates errors in communication and makes our restaurants a place for all guests.",
//         companyName: "Marketing Manager",
//         ceoName: "Nusr-et",
//         starImage: rating,
//     },
//     {
//         text: "Before COVID, we had the menu card printed to deliver to guests. Today, thanks to Garsonline, we give the guest a QR code when they arrive at the hotel. This code represents your room number, and all orders you place are charged to the room. We are so happy to use Garsonline and recommend it to everyone.",
//         companyName: "DCO Hotels ",
//         ceoName: "Nusr-et",
//         starImage: rating,
//     },
//     {
//         text: "Garsonline QR Menu is great to improve hospitality. It has all the information available in multiple languages which makes our local guests feel even more welcome and valuable. It eliminates errors in communication and makes our restaurants a place for all guests.",
//         companyName: "Imperio Ristorante",
//         ceoName: "Laura Benitez ",
//         starImage: rating,
//         ceoImage: ceo6,

//     },
//     {
//         text: "Before COVID, we had the menu card printed to deliver to guests. Today, thanks to Garsonline, we give the guest a QR code when they arrive at the hotel. This code represents your room number, and all orders you place are charged to the room. We are so happy to use Garsonline and recommend it to everyone.",
//         companyName: "DCO Hotels",
//         ceoName: "Luis Felipe De la Puente",
//         starImage: rating,
//     },
// ]

// Services Section static Data

export const servicesCardDetails = [
  {
    heading: "Insights that Inspire",
    text: "Leverage POS and customer data to build risk- free strategies.",
  },
  {
    heading: "Seamless Service, Simplified",
    text: "Integrate reservations, payments, and POS for a fluid, frictionless operation.",
  },
  {
    heading: "Personalized Dining Delights",
    text: "Offer smart recommendations to craft unforgettable dining experiences.",
  },
];
// export const feedbackCardDetails = [
//     {
//         heading: "Get Feedback",
//         text: "Create custom feedback forms to learn how customers feel about your service. Improve your dining experience with a positive feedback loop."
//     },
//     {
//         heading: "Collect Valuable Data",
//         text: "Design questionnaires to collect valuable data such as emails, phone numbers, and birthdays and surprise your customers with a gift or a discount on their special days."
//     },
//     {
//         heading: "No Unhappy Guests",
//         text: "Satisfy your unhappy guests before they leave."
//     },

// ]

export const getFeedbackCardDetails = (t) => [
  {
    heading: t("Title1"),
    text: t("Subtitle1"),
  },
  {
    heading: t("Title2"),
    text: t("Subtitle2"),
  },
  {
    heading: t("Title3"),
    text: t("Subtitle3"),
  },
  {
    heading: t("Title4"),
    text: t("Subtitle4"),
  },
];

// slider section Static data
export const sliderCardDetails = [
  {
    cardImage: sliderimage2,
    cardData: "Hotel",
    cardText:
      "Enhance your Hotel's Guest Experience with Digital Resturant Menus",
    href: "/about",
  },
  {
    cardImage: sliderimage3,
    cardData: "Cafe & Bakery",
    cardText: "Solutions for Cafe & Bakery",
    href: "",
  },
  {
    cardImage: sliderimage1,
    cardData: "Bars & Night Clubs",
    cardText: "An Improved Order and Service Experience",
    href: "",
  },
  {
    cardImage: sliderimage4,
    cardData: "Ghost Kitchen",
    cardText: "Creat New Business Oppurtunies",
    href: "",
  },
  {
    cardImage: sliderimage5,
    cardData: "Fine Dining",
    cardText: "Provide A+ Quality Experience to Your Guests",
    href: "",
  },
];

export const contactUsCardsData = (t) => [
  {
    icon: LocationIcon,
    title: t("HeadquartersCard.Heading"),
    info1: t("HeadquartersCard.SubHeading"),
  },
  {
    icon: EmailIcon,
    title: t("EmailAddressCard.Heading"),
    info1: t("EmailAddressCard.SubHeading1"),
    info2: t("EmailAddressCard.SubHeading2"),
  },
  {
    icon: PhoneIcon,
    title: t("PhoneCard.Heading"),
    info1: "+1 800 123 654 987",
    info2: "+1 900 143 644 987",
  },
];
export const foodInfoArray = [
  {
    src: mainCourseFullWidth,
    textHeading: "Main Courses",
    infoText: "From the best chefs in the world",
    accordionData: [
      {
        accordionHeading: "Wraps",
        accordionTxtInfo: "Fresh ingredients wrapped in warm tortillas",
        accordionCardHead: "Veggie Wrap",
        accordionCardtxt:
          "Lettuce, carrots, tomatoes, arugula, avocado puree and ranch dressing on tortilla ",
        accordionPic: chickenWraps,
        accordionFoodPrice: "$14.00 - $19.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        accordionHeading: "Chicken",
        accordionTxtInfo: "Fresh ingredients wrapped in warm tortillas",
        accordionCardHead: "Veggie Wrap",
        accordionCardtxt:
          "Lettuce, carrots, tomatoes, arugula, avocado puree and ranch dressing on tortilla ",
        accordionPic: chickenWraps,
        accordionFoodPrice: "$14.00 - $19.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        accordionHeading: "Burgers",
        accordionTxtInfo: "Fresh ingredients wrapped in warm tortillas",
        accordionCardHead: "Veggie Wrap",
        accordionCardtxt:
          "Lettuce, carrots, tomatoes, arugula, avocado puree and ranch dressing on tortilla ",
        accordionPic: chickenWraps,
        accordionFoodPrice: "$14.00 - $19.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        accordionHeading: "Red Meats",
        accordionTxtInfo: "Fresh ingredients wrapped in warm tortillas",
        accordionCardHead: "Veggie Wrap",
        accordionCardtxt:
          "Lettuce, carrots, tomatoes, arugula, avocado puree and ranch dressing on tortilla ",
        accordionPic: chickenWraps,
        accordionFoodPrice: "$14.00 - $19.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
    ],
  },
  {
    src: desertsFullwidth,
    textHeading: "Deserts",
    infoText: "Daily made desserts with fresh ingredients",
    cardData: [
      {
        cardHeading: "Lemon Cheesecake",
        cardtxt: "Vanilla cream, cookie crumble and homemade lemon drizlle",
        cardPic: desertCardimg,
        price: "$12.00 slice",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Lemon Cheesecake",
        cardtxt: "Vanilla cream, cookie crumble and homemade lemon drizlle",
        cardPic: desertCardimg,
        price: "$12.00 slice",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Lemon Cheesecake",
        cardtxt: "Vanilla cream, cookie crumble and homemade lemon drizlle",
        cardPic: desertCardimg,
        price: "$12.00 slice",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Lemon Cheesecake",
        cardtxt: "Vanilla cream, cookie crumble and homemade lemon drizlle",
        cardPic: desertCardimg,
        price: "$12.00 slice",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
    ],
  },
  {
    src: saladsfullwidth,
    textHeading: "Salads",
    infoText: "Fresh and organic ingredients",
    cardData: [
      {
        cardHeading: "Chef's Special Salad ",
        cardtxt:
          "Fresh beetroot salad served with crumbled goat cheese, walnuts, and tomatoes",
        cardPic: specialSalad,
        price: "$12.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Chef's Special Salad ",
        cardtxt:
          "Fresh beetroot salad served with crumbled goat cheese, walnuts, and tomatoes",
        cardPic: specialSalad,
        price: "$12.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Chef's Special Salad ",
        cardtxt:
          "Fresh beetroot salad served with crumbled goat cheese, walnuts, and tomatoes",
        cardPic: specialSalad,
        price: "$12.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Chef's Special Salad ",
        cardtxt:
          "Fresh beetroot salad served with crumbled goat cheese, walnuts, and tomatoes",
        cardPic: specialSalad,
        price: "$12.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
    ],
  },
  {
    src: startersfullwidth,
    textHeading: "Starters",
    infoText: "Soups & Tapas",
    cardData: [
      {
        cardHeading: "Gazpacho",
        cardtxt: "Rich gazpacho with herbs and spices",
        cardPic: gazpacho,
        price: "$13.50 - $16.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Gazpacho",
        cardtxt: "Rich gazpacho with herbs and spices",
        cardPic: gazpacho,
        price: "$13.50 - $16.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Gazpacho",
        cardtxt: "Rich gazpacho with herbs and spices",
        cardPic: gazpacho,
        price: "$13.50 - $16.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
      {
        cardHeading: "Gazpacho",
        cardtxt: "Rich gazpacho with herbs and spices",
        cardPic: gazpacho,
        price: "$13.50 - $16.00",
        icon1: <EggSvg />,
        icon2: <PineSvg />,
        icon3: <sugarSvg />,
      },
    ],
  },
];

const FoodTypeArray = [
  {
    src: mainCourse,
    txt: "Main Courses",
  },
  {
    src: Deserts,
    txt: "Desserts",
  },
  {
    src: Salads,
    txt: "Salads",
  },
  {
    src: starters,
    txt: "Starters",
  },
];
export default FoodTypeArray;
