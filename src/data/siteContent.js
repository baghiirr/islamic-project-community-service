export const heroContent = {
  arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
  title: "Giving What We Can, For the Sake of Allah",
  subtitle: "12th Grade Islamic Community Service Project | 2025-2026",
  names: ["Baqir Zaidi", "Shayan Iqbal", "Faris Khatib", "Youssef Abdelkader", "Imaad Rana"], 
  intro:
    "Our project focused on collecting staple foods and delivering them through donation drives or local mosques to support people in need. This site tells that story through the real moments, people, and small acts of service that made the project meaningful."
};

export const projectPhotos = {
  collection: "./assets/images/collection.jpg",
  volunteerOne: "./assets/images/volunteer-1.jpg",
  volunteerTwo: "./assets/images/volunteer-2.jpg",
  volunteerThree: "./assets/images/volunteer-3.jpg",
  kaaba: "./assets/images/kaaba.jpeg",
  stuff: "./assets/images/LOTS.JPG",
  ali: "./assets/images/ali.JPG",
  hafiz: "./assets/images/hafiz.JPG",
  ismaeel: "./assets/images/ismaeel.JPG",
  farisGrabbingOne: "./assets/images/farisGrabbing1.JPG",
  yousefGrabbingTwo: "./assets/images/youssefGrabbing2.JPG",
  youssefGrabbingOne: "./assets/images/youssefGrabbing1.JPG",
  idris: "./assets/images/idris.JPG",
  kareem: "./assets/images/kareem.JPG",
  omar: "./assets/images/omar.JPG",
  trunk: "./assets/images/trunk.JPG",
  givingBag: "./assets/images/givingBag.JPG",
  cart: "./assets/images/cart.MOV"
};

export const sections = [
  {
    id: "project-story",
    eyebrow: "The Project",
    title: "What We Set Out To Do",
    layout: "split",
    accent: "sand",
    largeBody: true,
    body: [
      "We organized a staple food drive centered on simple, useful donations that could be shared quickly with people who needed support. Instead of treating the project like a checklist, we approached it as a real community effort shaped by intention, consistency, and teamwork.",
      "We focused on collecting non-perishable items, organizing them carefully, and preparing them for distribution through local mosques. Every can represented a small act of giving, and together those small acts became something much more meaningful."
    ],
    belowBodyVideo: {
      src: projectPhotos.cart,
      caption: "A quick look at the cart as the staple foods started coming together."
    },
    media: {
      type: "feature",
      src: projectPhotos.volunteerThree,
      alt: "Collected canned food and dry pasta arranged on a countertop for the donation drive",
      caption: "Collected food donations ready to be organized and delivered."
    },
    belowBodyImage: {
      src: projectPhotos.givingBag,
      alt: "Student handing over a donation bag filled with food items",
      caption: "A simple handoff that captured the spirit of giving and teamwork."
    },
  },
  {
    id: "why-it-mattered",
    eyebrow: "Our Why",
    title: "Faith, Service, And Responsibility",
    layout: "quote",
    accent: "cream",
    quote:
      "The Prophet ﷺ said: 'The best of people are those who are most beneficial to people.'",
    body: [
      "This project was motivated by the Islamic values of sadaqah, service, and compassion for others. We wanted our work to reflect the idea that helping the community is not separate from faith, but one of the clearest ways faith becomes visible in action.",
      "By working together and giving from what we could gather, we were reminded that service is not always dramatic. Often it begins with ordinary effort, sincerity, and the willingness to show up for others."
    ],
    belowQuoteImage: {
      src: projectPhotos.trunk,
      alt: "Car trunk packed with canned goods, flour, and rice ready for donation",
      caption: "Some items that are collected and ready to distribute to the needy."
    },
    media: {
      type: "stack",
      items: [
        
        {        
          src: projectPhotos.farisGrabbingOne,
          alt: "Student gathering canned goods from a grocery shelf",
          caption: "Choosing staple foods with the intention of serving others."
        },
        {         
          src: projectPhotos.youssefGrabbingOne,
          alt: "Student reaching for canned food at a grocery store shelf",
          caption: "Service became real through small actions carried out with care."
        },
        {
          src: projectPhotos.yousefGrabbingTwo,
          alt: "Student selecting flour from a store shelf",
          caption: "Even ordinary shopping felt meaningful when it was done for the community."
        }
      ]
    }
  },
  {
    id: "people-involved",
    eyebrow: "The People",
    title: "The Students Behind The Service",
    layout: "gallery",
    accent: "olive",
    body: [
      "This project was shaped by students who gave their time, effort, and care to make the food drive meaningful. Each photo can highlight a classmate whose contribution helped turn the project into a real act of community service. Thank you for everyones help.",
          ],
    media: {
      type: "gallery",
      heading: "Student Spotlight",
      intro: "A growing collection of the students who helped bring this project to life through their effort, generosity, and participation.",
      items: [
        {
          src: projectPhotos.ali,
          alt: "Student holding canned food donations"
        },
        {
          src: projectPhotos.volunteerTwo,
          alt: "Student holding two canned food donations in front of a doorway"
        },
        {
          src: projectPhotos.volunteerThree,
          alt: "Student holding a four-pack canned food donation indoors"
        },
        {
          src: projectPhotos.collection,
          alt: "Collected canned food donations for the project"
        },
        {
          src: projectPhotos.hafiz,
          alt: "Student holding several canned food donations"
        },
        {
          src: projectPhotos.ismaeel,
          alt: "Student holding canned food donations in front of a doorway"
        },
        {
          src: projectPhotos.idris,
          alt: "Student holding canned food donations in front of a doorway"
        },
        {
          src: projectPhotos.kareem,
          alt: "Student holding canned food donations in front of a doorway"
        }, 
        {
          src: projectPhotos.omar,
          alt: "Student holding canned food donations in front of a doorway"
        },
      ]
    },
    footerCallout: {
      label: "The Prophet ﷺ said",
      text: "The most beloved people to Allah are those who are most beneficial to people.",
      note: "This project reminded us that service begins with sincerity, and even a small donation can become something beloved when it helps another person."
    }
  }
];

export const impactStats = [
  { label: "Staple Foods Donated and More ", value: 260 },
  { label: "Meal Portions", value: 500},
  { label: "Volunteer Hours", value: 45 }
];
