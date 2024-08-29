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
//         text: "FineDine’s AI powered technology, identifies the most preferred order combinations of items and make smart recommendations to the guests to order more and maximize your revenue.",
//     },
//     {
//         heading: "Fully Customized Menus",
//         text: "Implement your branding by adjusting colors and adding your logo and fonts. Customize how your menu looks, and use videos and images to tell your story to your customers.",
//         bgColor: "#D1D5DB",
//     },
//     {
//         heading: "An Upgraded Ordering Process",
//         text: "Integrating with the world’s leading POS systems to sync the menus when you make a change and send all orders to the POS system, the FineDine dashboard, and your kitchen & bar printers simultaneously.",
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
];
export const getMarqueeCardDetails = (t) => [
  {
    text: t("Text1"),
    starImage: rating,
    ceoImage: ceo1,
    companyName: t("CompayName1"),
    ceoName: t("CeoName1"),
  },
  {
    text: t("Text2"),
    starImage: rating,
    ceoImage: ceo3,
    companyName: t("CompayName2"),
    ceoName: t("CeoName2"),
  },
  {
    text: t("Text3"),
    starImage: rating,
    companyName: t("CompayName3"),
    ceoName: t("CeoName3"),
  },
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
      "SanCarlo Bahrain Improves Efficiency and Increases Revenue with FineDine's Digital Menu Technology",
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
        name: "FineDinePOS Lite",
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
    title: "Earn More with FineDine",
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
        name: "info@finedinemenu.com",
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
//                 name: "FineDinePOS Lite",
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
//         title: "Earn More with FineDine",
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
//                 name: "info@finedinemenu.com",
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
      { name: t("itemFive") },
      { name: t("itemSix") },
      { name: t("itemSeven") },
      { name: t("itemEight") },
    ],
  },
  {
    title: t("Title2"),
    listData: [
      { name: t("itemNine") },
      { name: t("itemTen") },
      { name: t("itemEleven") },
      { name: t("itemTwelve") },
      { name: t("itemThirteen") },
      { name: t("itemFourteen") },
      { name: t("itemFifteen") },
      { name: t("itemSixteen") },
      { name: t("itemSeventeen") },
    ],
  },
  {
    title: t("Title3"),
    listData: [
      { name: t("itemEighteen") },
      { name: t("itemNineteen") },
      { name: t("itemTwenty") },
      { name: t("itemTwentyOne") },
      { name: t("itemTwentyTwo") },
      { name: t("itemTwentyThree") },
      { name: t("itemTwentyFour") },
      { name: t("itemTwentyFive") },
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
//         text: "FineDine QR Menu is great to improve hospitality. It has all the information available in multiple languages which makes our local guests feel even more welcome and valuable. It eliminates errors in communication and makes our restaurants a place for all guests.",
//         starImage: rating,
//         ceoImage: ceo1,
//         companyName: "Chris Gia",
//         ceoName: "Cafe Sanuki,Manager"

//     },
//     {
//         text: "FineDine allows us to upsell our products and increase the average ticket size. Just by digitizing our menu operations, our sales increased around 20%.",
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
//         text: "FineDine improved the cafe sales and helped us to launch our breakfast menu. From time to time, we update our menu with FineDine and it is so easy!",
//         companyName: "Jay Carlo Rivera",
//         ceoName: "GODIVA Chocolatier",
//         ceoImage: ceo2,
//         starImage: rating,
//     },
//     {
//         text: "FineDine has given us the liberty to make changes on our menus anytime! Our staff enjoys FineDine, it’s very easy to use and convenient for everyone.",
//         companyName: "Sofitel Hotel & Resorts",
//         ceoName: "Matias Ess ",
//         ceoImage: ceo4,
//         starImage: rating,
//     },
//     {
//         text: "As our Brand TEN 11 Coffee Boutique is growing, FineDine allowed us to simplify the ordering process and overall menu presentation to our customers. FineDine has been an integral part of TEN 11 Coffee Boutique since our very first outlet in Abu Dhabi.",
//         companyName: "TEN 11 Coffee Boutique",
//         ceoName: "Mohsin Amin",
//         ceoImage: ceo5,
//         starImage: rating,
//     },
//     {
//         text: "FineDine QR Menu is great to improve hospitality. It has all the information available in multiple languages which makes our local guests feel even more welcome and valuable. It eliminates errors in communication and makes our restaurants a place for all guests.",
//         companyName: "Marketing Manager",
//         ceoName: "Nusr-et",
//         starImage: rating,
//     },
//     {
//         text: "Before COVID, we had the menu card printed to deliver to guests. Today, thanks to FineDine, we give the guest a QR code when they arrive at the hotel. This code represents your room number, and all orders you place are charged to the room. We are so happy to use FineDine and recommend it to everyone.",
//         companyName: "DCO Hotels ",
//         ceoName: "Nusr-et",
//         starImage: rating,
//     },
//     {
//         text: "FineDine QR Menu is great to improve hospitality. It has all the information available in multiple languages which makes our local guests feel even more welcome and valuable. It eliminates errors in communication and makes our restaurants a place for all guests.",
//         companyName: "Imperio Ristorante",
//         ceoName: "Laura Benitez ",
//         starImage: rating,
//         ceoImage: ceo6,

//     },
//     {
//         text: "Before COVID, we had the menu card printed to deliver to guests. Today, thanks to FineDine, we give the guest a QR code when they arrive at the hotel. This code represents your room number, and all orders you place are charged to the room. We are so happy to use FineDine and recommend it to everyone.",
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
    heading: t("GetFeedbackTitle"),
    text: t("GetFeedbackText"),
  },
  {
    heading: t("CollectDataTitle"),
    text: t("CollectDataText"),
    bgColor: "#D1D5DB",
  },
  {
    heading: t("NoUnhappyGuestsTitle"),
    text: t("NoUnhappyGuestsText"),
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
