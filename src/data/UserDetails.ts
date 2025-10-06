// src/data/userDetails.ts
import {
  UserDetailsType,
  WorkDetail,
  EducationDetail,
  ExperienceDetail,
  SkillsDetail,
  Project,
  Certification,
  Appreciation,
} from '../types/UserDetailsType.ts'
import web from '../assets/icons/web.svg'
import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/email.svg'
import mapIcon from '../assets/icons/map.svg'
import calenderIcon from '../assets/icons/calender.svg'
import book from '../assets/icons/book.svg'
import flavor from '../assets/flavor-sage.png'
import todo from '../assets/todo.png'
import emoji from '../assets/emoji.png'
import portfolio from '../assets/portfolio.png'
import event from '../assets/event.png'
export const UserDetails: UserDetailsType[] = [
  {
    id: '1',
    source: 'EMAIL',
    value: 'omenagarjuna@gmail.com',
    emoji: '',
  },
  {
    id: '2',
    source: 'PHONE',
    value: '+91 9121627633',
    emoji: '',
  },
  {
    id: '3',
    source: 'BIRTHDAY',
    value: 'Nov 03, 2001',
    emoji: '',
  },
  {
    id: '4',
    source: 'LOCATION',
    value: 'Repalle, Andhra Pradesh, INDIA',
    emoji: '',
  },
]

export const workDetails: WorkDetail[] = [
  {
    id: '1',
    title: 'Web Development',
    description:
      'Built and maintained dynamic websites using React and Node.js.',
    emoji: web,
  },
  {
    id: '3',
    title: 'Mobile Development',
    description:
      'Developed mobile apps for iOS and Android using React Native.',
    emoji: phoneIcon,
  },
]

export const educationDetails: EducationDetail[] = [
  {
    id: '1',
    institution: 'GIET Engineering Collage, Rajahmundry',
    degree: 'Bachelor of Technology in Mechnical Engineering',
    year: '2020-2023',
  },
  {
    id: '2',
    institution: 'A.A.N.M & V.V.R.S.R Polytechnic College, Gudlavalleru',
    degree: 'Diploma in Mechnical Engineering',
    year: '2017-2020',
  },
  {
    id: '2',
    institution: 'S.P.B.M.Z.P.H.School, Peteru',
    degree: 'Secondary School Certificate',
    year: '2017',
  },
]

export const experienceDetails: ExperienceDetail[] = [
  {
    id: '1',
    title: 'Full Stack Developer',
    company: 'Tata Consultancy Services',
    location: 'Kolkata',
    period: 'June 2023 - Present',
    responsibilities: [
      '•	Designed and developed scalable web applications using Next.js (SSR), React.js, and Node.js, improving application performance by 30% through optimized server-side rendering and API integrations.',
      '•	Built and deployed REST/GraphQL APIs with 99.9% uptime, reducing average response time by 35% through query optimization and caching strategies.',
      '•	Automated cloud infrastructure setup using Terraform (IaC) and deployed applications on AWS (EC2, S3, Lambda), cutting deployment time by 40% and ensuring scalability for 10k+ monthly active users.',
      '•	Developed 15+ reusable React components for enterprise applications, improving UI consistency and reducing development time by 20%.',
      '•	Integrated 12+ REST APIs for real-time data fetching, enhancing user experience and reducing latency by 30%.',
      '•	Collaborated with cross-functional teams to optimize API payloads, reducing data transfer size by 45% using gzip compression.',
      '•	Conducted cross-browser testing and resolved 20+ UI/UX issues, achieving a 95% client satisfaction rate.',
    ],
  },
  {
    id: '2',
    title: 'Software Development Engineer Intern',
    company: 'Kasspro Enterprises',
    location: 'Chennai',
    period: 'Dec 2022 - June 2023',
    responsibilities: [
      '•	Debugged and optimized HTML, CSS, JavaScript, and Java code, resolving 15+ critical bugs and improving application performance by 25%.',
      '•	Documented and tracked 50+ bugs using JIRA, ensuring timely resolution and seamless communication with stakeholders.',
      '•	Assisted in maintaining product documentation and provided support for additional development tasks, improving team efficiency by 15%.',
    ],
  },
]

export const skillsDetails: SkillsDetail[] = [
  {
    id: '1',
    skill: 'HTML, CSS, JAVASCRIPT',
    percentage: '90%',
  },
  {
    id: '2',
    skill: 'JAVASCRIPT',
    percentage: '80%',
  },
  {
    id: '3',
    skill: 'REACT JS',
    percentage: '75%',
  },
  {
    id: '4',
    skill: 'NODE JS & EXPRESS JS',
    percentage: '75%',
  },
  {
    id: '5',
    skill: 'SQL',
    percentage: '90%',
  },
  {
    id: '6',
    skill: 'PYTHON',
    percentage: '75%',
  },
  {
    id: '7',
    skill: 'NEXT.JS',
    percentage: '70%',
  },
  {
    id: '8',
    skill: 'TYPESCRIPT',
    percentage: '70%',
  },
  {
    id: '9',
    skill: 'REST API & GRAPHQL',
    percentage: '80%',
  },
  {
    id: '10',
    skill: 'AWS (EC2, S3, LAMBDA)',
    percentage: '65%',
  },
  {
    id: '11',
    skill: 'TERRAFORM (IaC)',
    percentage: '60%',
  },
  {
    id: '12',
    skill: 'GIT & GITHUB',
    percentage: '85%',
  },
  {
    id: '13',
    skill: 'JQUERY',
    percentage: '70%',
  },
  {
    id: '14',
    skill: 'RESPONSIVE DESIGN',
    percentage: '90%',
  },
  {
    id: '15',
    skill: 'UI/UX DESIGN',
    percentage: '75%',
  },
  {
    id: '16',
    skill: 'TESTING & DEBUGGING',
    percentage: '80%',
  },
  {
    id: '17',
    skill: 'AGILE METHODOLOGY',
    percentage: '85%',
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio',
    description:
      'A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.',
    techStack: 'React , Tailwind CSS , TypeScript',
    link: 'https://ovn-portfolio.vercel.app/',
    image: portfolio,
  },
  {
    id: '2',
    title: 'Flavor Sage',
    description:
      'A recipe recommender website that suggests recipes based on user preferences and machine learning algorithms.',
    techStack: 'React JS , Node.js , Gemini',
    link: 'https://flavor-sage.vercel.app/',
    image: flavor,
  },
  {
    id: '3',
    title: 'Todos Application',
    description:
      'Developed a persistent todo application with CRUD operations, styled using CSS and Bootstrap, and implemented dynamic UI updates with JavaScript.',
    techStack: 'HTML , CSS , JavaScript , Bootstrap',
    link: 'https://ometodoapp.ccbp.tech/',
    image: todo,
  },
  {
    id: '4',
    title: 'Emoji Game',
    description:
      'A game where users click random emojis; the positions of the emojis change with each click, offering an interactive and engaging experience.',
    techStack: 'React , CSS',
    link: 'https://emojiome.ccbp.tech/',
    image: emoji,
  },
  {
    id: '5',
    title: 'Event Management System',
    description:
      'An event management system built using MongoDB, React, Node.js, Express, and GraphQL. The application features authentication and login services, allowing users to create, book, and cancel events.',
    techStack: 'MongoDB, React, Node.js, Express, GraphQL',
    link: 'https://management-event.vercel.app/',
    image: event,
  },
]

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Build Your Own Static Website',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued May 2022',
    link: 'https://certificates.ccbp.in/academy/static-website?id=RGMAOXGDXX',
  },
  {
    id: '2',
    title: 'Build Your Own Responsive Website',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued May 2022',
    link: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=OMVIEUOXHI',
  },
  {
    id: '3',
    title: 'Build Your Own Dynamic Web Application',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued May 2022',
    link: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=RRMPRQLLSR',
  },
  {
    id: '4',
    title: 'Programming Foundations with Python',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued Jun 2022',
    link: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=RPGAUUSLIF',
  },
  {
    id: '5',
    title: 'Node JS',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued Aug 2022',
    link: 'https://certificates.ccbp.in/academy/node-js?id=OXGISPYRJU',
  },
  {
    id: '6',
    title: 'Introduction to Databases',
    issuer: 'CCBP 4.0 Academy',
    date: 'Issued Dec 2022',
    link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=JVTEZRSMYL',
  },
]

export const appreciations: Appreciation[] = [
  {
    id: '1',
    title: 'Certificate of Appreciation',
    organization: 'Tata Consultancy Services',
    date: 'June 2023',
    description:
      'For significant contribution towards AIB Life - Tata Consultancy Services Ltd Partnership and Go-Live of AIB Life operations in May 2023.',
  },
]
