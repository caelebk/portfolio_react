//Navbar
export const firstName = "Caeleb";
export const lastName = "Koharjo";

//About me
export const aboutMeContext = ("Hey I'm Caeleb! A third-year undergraduate at the University of British Columbia studying computer science." +
    " My main interests currently lie in Software Engineering, but I'm super interested in exploring the various disclipines in the realm of computer science. " +
    " Career interests aside, I'm an international student who grew up on the little red dot also known as Singapore. In my free time, I enjoy weightlifting at the gym, " +
    "playing video games, reading manga, and learning more about computers. Thanks for visiting my web app portfolio and reading about me :D");

//Work Experience
export const workExperienceTitle = "Work Experience";

const visierExperience =
    ["Maintained Visier-UI component library by updating Angular components, documenting changes, and publishing updated versions to JFrog Artifactory, resulting in more refined and appealing UI components in the production app.",
        "Implemented an Angular component that uses a REST API to get a list of subjects and applicable filters, allowing the user to apply filters when searching for members of a selected-subject; the result being a display of filtered search results.",
        "Created and converted between models and protobuf-generated DTOs to transfer data between the client and server through a API endpoint with the purpose of maintaining onion architecture",
        "Worked with the info-security team to threat-model a feature, identifying and mitigating potential security vulnerabilities through modelling data-flow diagrams and stride charts.",
        "Upgraded package dependencies to the latest compatible version to prevent security vulnerabilities and debugged areas that were affected, making the codebase more secure and up-to-date.",
        "Wrote unit tests in Scala and Typescript to mitigate potential bugs and verify that features behaved as expected."];

const visier = {
    title: 'Software Developer Co-op',
    company: "Visier",
    date: "Jan - Sept 2022",
    tech: " Angular, Typescript, HTML/CSS, Javascript, Scala",
    achievements: visierExperience
};
export const workExperiences = [visier];


//Project Experience

export const projectExperienceTitle = "Project Experience";

const discordBotExperience = [
    "A chat-bot that executes functions based on user input, previously deployed on an AWS EC2 Instance and currently deployed on Heroku.",
    "Utilized Cheerio (subset of JQuery) and Axios (HTTP client library) to request and web-scrape data off popular League of Legends statistics website OP.GG to analyze selected-user data and respond with a statistical summary.",
    "Extracted and parsed data from a public League of Legends Google Spreadsheet (using Google-API) to extract data from labeled rows and columns to allow users to display selected information from the attached spreadsheet."
]
const discordBot = {
    title: "Discord Chat-Bot",
    company: "Personal Project",
    date: "Feb - May 2021",
    tech: " Node.js, Discord.js, Javascript, AWS, Heroku",
    achievements: discordBotExperience
}

const polynomicalCalculatorExperience = [
    "Derived/integrated user-inputted polynomial expressions using hash-tables, resulting in efficient O(1) runtime while following software design strategies to maintain robust code.",
    "Translated from infix expressions to postfix expressions using a stack in order to solve mathematical expressions with proper orders of operations.",
    "Used JUnit library for creating unit tests to mitigate potential bugs and weird behaviors, ensuring that the calculator functions work as expected.",
    "Implemented the user-interface using the JPanel library, allowing users to use the polynomial calculator as a desktop application.",
    "Created models & JSON to represent mathematical expressions, allowing users to persist and load mathematical expressions for future usage."
]

const polynomialCalculator = {
    title: "Polynomial Calculator",
    company: "UBC Course Project",
    date: "Jan - Sept 2020",
    tech: " Java, JUnit, JPanel",
    achievements: polynomicalCalculatorExperience
}

const billboardExperience = [
    "Utilized Beautiful Soup library to gather the top 100 albums in a certain time period from popular music chart website Billboard 100 and store the data inside of a Pandas (data-frame library) data-frame.",
    "Implemented a plotter using Pandas to manipulate the data-frame and Matplotlib (plotting library) to display a line chart of the artists with the longest top albums."
]

const billboardScraper = {
    title: "Billboard 100 Web-Scraper",
    company: "UBC Course Project",
    date: "Sep - Dec 2019",
    tech: " Python, Pandas, Matplotlib",
    achievements: billboardExperience
}

export const projectExperiences = [discordBot, polynomialCalculator, billboardScraper];