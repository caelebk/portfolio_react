//Navbar
export const firstName = "Caeleb";
export const lastName = "Koharjo";

//About me
export const traits = [
    { trait: 'caeleb.ethnicity', value: "'Indonesian'" },
    { trait: 'caeleb.age', value: "'23 years old'" },
    { trait: 'caeleb.status', value: "'4th Year Undergraduate @ The University of Britsh Columbia'" },
    { trait: 'caeleb.favoriteFood', value: "'Spaghetti Bolognese'" },
    { trait: 'caeleb.favoriteColor', value: "'Orange'" },
    { trait: 'caeleb.hobbies', value: "['weightlifting', 'gaming', 'programming', 'eating']" }
];

export const aboutMeContext = ["👋 Hey there, I'm Caeleb!",

"📚 A fourth-year Computer Science undergraduate pursuing a degree in Computer Science at the University of British Columbia." +
" With a passion for Software Engineering, I'm continually exploring the diverse realms of computer science.",

"🌍 Originally from the vibrant city-state of 🇸🇬 Singapore, I'm an international student seeking to make my mark on the tech world.",

"💪 Outside of the classroom, I find my balance by hitting the gym, honing my skillsin competitive video games, immersing myself in captivating manga, " +
"and constantly expanding my knowledge about the ever-evolving world of computers.",

"🚀 Join me as I embark on this exciting tech journey. Thanks for stopping by! 😄👾💻"
];

//Work Experience

export const workExperienceTitle = "Work Experience";

const visierExperience =
["Managed the Visier-UI component library through routine updates of Angular components, comprehensive documentation, and publication of updated versions, resulting in improved UI components within the codebase.",
"Revamped the UI of employee search page while developing a Angular component that utilizes REST API endpoints for efficient employee queries and advanced filtering.",
"Designed protobuf-generated DTOs, facilitating seamless data model conversions and reinforcing the onion architecture.",
"Conducted threat analysis, mitigating security vulnerabilities via data-flow diagrams and STRIDE charts.",
"Upgraded package dependencies via Yarn and resolved related issues to prevent security vulnerabilities and maintain expected behaviors, ensuring a more secure and up-to-date environment.",
"Wrote unit tests in Scala and Typescript to mitigate potential bugs and verify that features behaved as expected."
];

const visier = {
    title: 'Software Developer Co-op',
    company: "Visier",
    date: "Jan - Sep 2022",
    tech: "Angular, Typescript, HTML/CSS, Javascript, Scala",
    achievements: visierExperience
};

const rostrumExperience = [
    "Developed and executed formal test plans, ensuring the device performed up to medical standards.",
    "Contributed to the enhancement of wxWidget UI components, ensuring the creation of consistent and reusable graphical user interface elements within the Debian environment.",
    "Implemented a solution to prevent N2O challenges from disrupting operations during active Qsi calculations through efficient management of payloads between the GUI and microcontroller, preventing overloaded buffers.",
    "Enhanced a Python script responsible for generating objects, enums, and messages from JIRA tables, streamlining data extraction and processing.",
];

const rostrum = {
    title: 'Software Engineer Co-op',
    company: "Rostrum Medical Innovations",
    date: "Sep - Dec 2023",
    tech: "C++, C, Debian Linux, Python, PIC Microcontroller",
    achievements: rostrumExperience
};
export const workExperiences = [rostrum, visier];


//Project Experience

export const projectExperienceTitle = "Project Experience";

const ubcProject = "UBC Course Project";
const personalProject = "Personal Project";

const lingoExperience = [

];

const lingo = {
    title: "Lingo",
    company: personalProject,
    date: "Apr - Jun 2023",
    tech: "React, Next, Prisma, HTML/CSS, TypeScript",
    git: "",
    achievements: lingoExperience
};

const ubcInsightsExperience = [

];

const ubcInsights = {
    title: "UBC Insights",
    company: ubcProject,
    date: "Jan - Apr 2023",
    tech: "TypeScript, React, HTML/CSS, Express, REST API, JSON, Chai Testing Framework",
    git: "",
    achievements: ubcInsightsExperience
};

const warehouseDBExperience = [

];

const warehouseDB = {
    title: "Warehouse Database Project",
    company: ubcProject,
    date: "Sep - Dec 2021",
    tech: "PHP, HTML/CSS, Oracle",
    achievements: warehouseDBExperience
};

const discordBotExperience = [
    "A chat-bot that executes functions based on user input, previously deployed on an AWS EC2 Instance and currently deployed on Heroku.",
    "Utilized Cheerio (subset of JQuery) and Axios (HTTP client library) to request and web-scrape data off popular League of Legends statistics website OP.GG to analyze selected-user data and respond with a statistical summary.",
    "Extracted and parsed data from a public League of Legends Google Spreadsheet (using Google-API) to extract data from labeled rows and columns to allow users to display selected information from the attached spreadsheet."
];

const discordBot = {
    title: "Discord Chat-Bot",
    company: personalProject,
    date: "Feb - May 2021",
    tech: " Node.js, Discord.js, Javascript, AWS, Heroku",
    git: "https://github.com/caelebk/discordbot",
    achievements: discordBotExperience
};

const polynomicalCalculatorExperience = [
    "Derived/integrated user-inputted polynomial expressions using hash-tables, resulting in efficient O(1) runtime while following software design strategies to maintain robust code.",
    "Translated from infix expressions to postfix expressions using a stack in order to solve mathematical expressions with proper orders of operations.",
    "Used JUnit library for creating unit tests to mitigate potential bugs and weird behaviors, ensuring that the calculator functions work as expected.",
    "Implemented the user-interface using the JPanel library, allowing users to use the polynomial calculator as a desktop application.",
    "Created models & JSON to represent mathematical expressions, allowing users to persist and load mathematical expressions for future usage."
];

const polynomialCalculator = {
    title: "Polynomial Calculator",
    company: ubcProject,
    date: "Jan - Sept 2020",
    tech: "Java, JUnit, JPanel",
    git: "https://github.com/caelebk/PolynomialCalculator",
    achievements: polynomicalCalculatorExperience
};

const billboardExperience = [
    "Utilized Beautiful Soup library to gather the top 100 albums in a certain time period from popular music chart website Billboard 100 and store the data inside of a Pandas (data-frame library) data-frame.",
    "Implemented a plotter using Pandas to manipulate the data-frame and Matplotlib (plotting library) to display a line chart of the artists with the longest top albums."
];

const billboardScraper = {
    title: "Billboard 100 Web-Scraper",
    company: ubcProject,
    date: "Sep - Dec 2019",
    tech: "Python, Pandas, Matplotlib",
    git: "https://github.com/caelebk/Billboard100",
    achievements: billboardExperience
};

export const projectExperiences = [lingo, ubcInsights, warehouseDB, discordBot, polynomialCalculator, billboardScraper];


//Contact

export const email = 'caelebkoharjo@gmail.com';
export const github = 'caelebk';