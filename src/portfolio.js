/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alan Luthfi",
  title: "Hi all, I'm Alan Luthfi",
  subTitle:
    "A total tech enthusiast! I'm all about crafting awesome web apps using JavaScript, React.js, and Node.js. But that's not all – I've got a soft spot for game development with Unity, creating immersive experiences. Oh, and did I mention I dabble in machine learning too? Join me as I explore the endless possibilities of programming and innovation!",
  resumeLink:
    "https://drive.google.com/file/d/17IN1mOOJ9Cp5BwuKckl-jumEUUynkgN-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alanluthfi",
  linkedin: "https://www.linkedin.com/in/alanluthfi/",
  gmail: "alanluthfi@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop Front end / User Interfaces for your web applications"),
    emoji("⚡ Web applications in MERN stacks"),
    emoji(
      "⚡ Integration of third party services such as Youtube embed/ Spotify auth or search fetch"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Teknologi Sepuluh Nopember",
      logo: require("./assets/images/ITSLogo.png"),
      subHeader: "Bachelor's degree in Computer Engineering",
      duration: "August 2018 - March 2023",
      desc: "GPA 3.38 out of 4.00, published 1 paper.",
      descBullets: [
        "Paper can be found in the following link http://dx.doi.org/10.12962/j23373539.v11i3.92620"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer ",
      company: "Generasi GIGIH ",
      companylogo: require("./assets/images/goto.png"),
      date: "June 2023 – Present",
      desc: "I have undertaken an apprenticeship as part of the Generasi GIGIH program, organized by GoTo Impact Foundation, which is designed to tackle the expanding tech industry in Indonesia.",
      descBullets: [
        "Developed a Spotify clone using React, integrating Spotify API for authentication, and enhancing UI using CSS.",
        "Crafted a Tokopedia Play Clone utilizing React for a dynamic user experience."
      ]
    },
    {
      role: "Lab Assistant – Game Development Division",
      company: "B201 Telematics Laboratory ",
      companylogo: require("./assets/images/b201.png"),
      date: "September 2020 – February 2023",
      desc: "Fulfilled the role of Game Programmer for the team in Indigo Game Startup Incubation 2021 program. The team managed to pass the concept pitching phase where the team was required to present the game ideas to the mentors, before creating the prototype."
    },
    {
      role: "Machine Learning Graduates ",
      company: "Google Bangkit 2021",
      companylogo: require("./assets/images/bangkit.jpg"),
      date: "September 2021 – July 2021",
      desc: "Led an Android app development in a capstone project, seamlessly integrating machine learning. Delivered a pioneering prototype that showcased my prowess in advanced Android development and machine learning integration."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "TEAM PROJECT THAT I HAVE WORKED",
  projects: [
    {
      image: require("./assets/images/game.jpg"),
      projectName: "Project: Eden",
      projectDesc:
        "Project: Eden is a Top-down Metroidvania game focusing on Exploration and Gravity-based world interaction as combat and or puzzle means. With backtracking element, unlock more skills by exploring every nook and cranny of the world.",
      footerLink: [
        {
          name: "Itch.io Page",
          url: "https://munouuwu.itch.io/project-eden"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/vaxi.png"),
      projectName: "Vaxi",
      projectDesc:
        "This is a Google Bangkit capstone project that requires me to collaborate with individuals from diverse departments, including mobile development and cloud computing development, in a collective effort.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/alanluthfi/Bangkit-Final-project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Node.js Developer Course",
      subtitle:
        "The Node.js Developer Course is like a series of lessons laid out as a 'path' that helps me get the hang of the basics of putting together a web app using Node.js. As I go through these lessons, I've picked up the skills I need to make a website and step into the shoes of a backend developer, all while following a cool process.",
      image: require("./assets/images/nodeCourse.png"),
      imageAlt: "Node.js Developer Course",
      footerLink: [
        {
          name: "Certification",
          url: "https://progate.com/path_certificate/37821105ry54rx"
        }
      ]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      subtitle:
        "This program is designed for intermediate learners who want to apply machine learning techniques using TensorFlow to create AI-driven apps and get ready for the Google TensorFlow Certificate.",
      image: require("./assets/images/tensorCourse.png"),
      imageAlt: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/68BSLM732VDL"
        }
      ]
    },
    {
      title: "Google IT Support Professional Certificate",
      subtitle:
        "I'm diving into the exciting world of IT through this tailored program. I'm picking up essential skills for entry-level IT positions, learning about computer assembly, wireless networking, customer service, and troubleshooting. Thanks to Google's professional training, I'm gaining new knowledge and confidence in my abilities.",
      image: require("./assets/images/itsupport.png"),
      imageAlt: "Google IT Support Professional Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/BYWQQ9KTJGE6"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6281218412596",
  email_address: "alanluthfi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
