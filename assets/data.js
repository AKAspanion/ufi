import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineAntDesign, AiOutlineApple, AiOutlineAndroid, AiOutlineMobile } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';

export const timeline = [
  {
    id: '01',
    orientation: 'left',
    title: 'Technical Discovery',
    list: [
      'We establish a detailed idea about the business goals and objectives',
      'Assess the situation',
      'Understand the target market and competitive landscape',
      'Clarify all doubts and queries',
      'Understand and document clients’ design and branding preferences',
    ],
  },
  {
    id: '02',
    orientation: 'right',
    title: 'Planning',
    list: [
      'Define the project plan',
      'Define the branding guidelines of the project',
      'We assist you to develop a content strategy',
      'We will assist you with a user acquisition strategy',
    ],
  },
  {
    id: '03',
    orientation: 'left',
    title: 'PlannIA, Web Design + Copywritinging',
    list: [
      'We will craft your corporate branding',
      'Will start designing the user interface on the approved wireframes making it completely customer-centric',
      'Mobile, Tablet, Web-specific UX',
      'Getting all the UI designs approved and confirmed by the client',
    ],
  },
  {
    id: '04',
    orientation: 'right',
    title: 'Front-end and Back-End Coding',
    list: [
      'We will build your website’s front-end to match the beautiful designs we’ve created',
      'Will create an intuitive backend that you can easily manage',
      'Will cater the requirement for API integration',
      'We craft an optimized code structure',
      'Set up a 2-3 week frequency for milestones/sprints and involve client review in each sprint',
    ],
  },
  {
    id: '05',
    orientation: 'left',
    title: 'QA & Launch',
    list: [
      'Each milestone/sprint is tested manually',
      'Bugs are reported and added to product backlog',
      'Quality release is provided and then final demo of the sprint is sent to the client for approval',
      'Regression testing after each sprint to ensure proper functioning of the previously approved sprints',
    ],
  },
];

export const smartData = [
  {
    id: 1,
    name: 'Expansive',
    desc:
      'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
  },
  {
    id: 2,
    name: 'Responsive',
    desc:
      'Our professional web artisans make sure to deliver the right user experience regardless of the screen size and resolution of the device users use.',
  },
  {
    id: 3,
    name: 'Fast',
    desc:
      'We map out a complex project, break it down into working tasks, maximize the workflow and deliver it sooner and more efficiently.',
  },
  {
    id: 4,
    name: 'Secure',
    desc:
      'With us being in charge of your website, we ensure the complete security of your website against any kind of malware attack.',
  },
];

export const techStack = [
  {
    id: 1,
    name: 'Back-end',
    technologies: [
      { id: '11', name: 'Laravel' },
      { id: '12', name: 'Ruby' },
      { id: '13', name: 'Python' },
      { id: '14', name: 'Node.JS' },
      { id: '15', name: 'PHP' },
      { id: '16', name: 'Java' },
    ],
  },
  {
    id: 2,
    name: 'Front-end',
    technologies: [
      { id: '21', name: 'AngularJS' },
      { id: '22', name: 'ReactJS' },
      { id: '23', name: 'VueJS' },
      { id: '24', name: 'HTML5' },
      { id: '25', name: 'CSS' },
      { id: '25', name: '' },
    ],
  },
  {
    id: 3,
    name: 'Database',
    technologies: [
      { id: '31', name: 'MongoDB' },
      { id: '32', name: 'Mysql' },
      { id: '33', name: 'PostgreSQL' },
      { id: '34', name: 'Firebase' },
      { id: '35', name: '' },
      { id: '36', name: '' },
    ],
  },
  {
    id: 4,
    name: 'OpenSource',
    technologies: [
      { id: '41', name: 'Drupal' },
      { id: '42', name: 'Magento' },
      { id: '43', name: 'Wordpress' },
      { id: '44', name: '' },
      { id: '45', name: '' },
      { id: '46', name: '' },
    ],
  },
];

export const webDevPortfolio = [
  {
    id: 1,
    color: '#FB5D02',
    bgColor: '#FEF6F1',
    name: 'Houselab',
    category: 'Real estate',
    type: 'management',
    desc:
      'A property management platform for architects, agents, brokers and homeowners.',
    img:
      'https://www.unifiedinfotech.net/assets/images/houselabs-mobile@1.5x.png',
    btnText: 'View case study',
  },
  {
    id: 2,
    color: '#EB4F7D',
    bgColor: '#E8FFFA',
    name: 'Joyscape',
    category: 'Revamping travel',
    type: 'experience',
    desc:
      'Created a platform for Joyscape to help travellers choose fun activities around Singapore.',
    img: 'https://www.unifiedinfotech.net/assets/images/joyscape-mobile@2x.png',
    btnText: 'View case study',
  },
  {
    id: 3,
    color: '#38AB91',
    bgColor: '#FFF1F4',
    name: 'London Rag',
    category: 'Redefining shopping',
    type: 'experience',
    desc:
      'Engineered this ecommerce platform to make shopping experience easier for millennials.',
    img:
      'https://www.unifiedinfotech.net/assets/images/londonrag-mobile@2x.png',
    btnText: 'Build similar',
  },
];

export const work = [
  {
    id: 1,
    color: '#1572b8',
    name: 'CitiBank',
    description:
      'Worked to build a new and insightful interface for the community of committed bankers',
    tags: ['Micro interaction', 'Visual design', 'Front-end development'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Citibank@2x.jpg',
  },
  {
    id: 2,
    color: '#1cc2e5',
    name: 'Openreel Inc.',
    link: '/portfolio/open-reel',
    description:
      'We helped build this multi-million dollar SaaS video platform with patented technology',
    tags: ['Consulting', 'UI/UX', 'Mobile App Solution'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Openreel-Inc@2x.jpg',
  },
  {
    id: 3,
    color: '#d0021b',
    name: 'Largo Films',
    description:
      'Creating an Artificial Intelligence powered award winning streaming app featuring world’s best short films',
    tags: ['Consulting', 'UI/UX', 'Mobile App Solution'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Largo-Films@2x.jpg',
  },
  {
    id: 4,
    color: '#f5a623',
    name: 'Houselab',
    link: '/portfolio/houselab',
    description:
      'Engineered a cloud based document management platform for architects, agents & homeowners',
    tags: ['UI/UX', 'Web App Development'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Houselab@2x.jpg',
  },
  {
    id: 5,
    color: '#37ab91',
    name: 'Fresh Clinics',
    description:
      'On-demand marketplace helping nurses connect with doctors and facilitate prescription for Botox',
    tags: ['AI', 'UI/UX', 'Mobile App Design'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Fresh-Clinics@2x.jpg',
  },
  {
    id: 6,
    color: '#3dc9ff',
    name: 'Toonyport',
    description:
      'Co-created with this e-commerce startup to be the one stop solution for kids apparel and accessories',
    tags: ['UI/UX', 'Mobile App Development', 'eCommerce'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-ToonyPort@2x.jpg',
  },
  {
    id: 7,
    color: '#eb4e7e',
    name: 'Happy DNA',
    description:
      'Transformed Happy DNA’s idea into a full-blown, seamless digital product, impacting 25k+ parents & children',
    tags: ['UI/UX', 'Mobile App Development', 'RESTful API Development'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Happy-DNA@2x.jpg',
  },
  {
    id: 8,
    color: '#37ab91',
    name: 'LONDON RAG',
    description:
      'eCommerce shopping venture for millennials causing much disruption in the market, making shopping fun',
    tags: ['Consulting', 'eCommerce', 'AI', 'Web Development'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-London-Rag@2x.jpg',
  },
  {
    id: 9,
    color: '#37ab91',
    name: 'Joyscape',
    description:
      'Helping Joyscape a simple engaging platform for users to explore fun activities in Singapore',
    tags: ['AI', 'UI/UX', 'Web Development'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Joyscape@2x.jpg',
  },
  {
    id: 10,
    color: '#ffcc00',
    name: 'Bridger',
    description:
      'Connected C-suite executives with qualified industry consultants through Bridger across various industries',
    tags: ['System Architecture', 'UI/UX', 'Web App Development'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Bridger@2x.jpg',
  },
  {
    id: 11,
    color: '#42bb18',
    name: 'Bitmarket',
    description:
      'Helped building BitMarket.net to be the most advanced and intuitive cryptocurrency exchange in Europe',
    tags: ['Server Administration', 'BlockChain', 'Back-end Architecture'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Bitmarket@2x.jpg',
  },
  {
    id: 12,
    color: '#ec3851',
    name: 'Drop App',
    description:
      'Engineered the concept of real cashless food drive-thru experience for customers through native app development',
    tags: ['Consulting', 'Mobile App', 'UI/UX Design'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Drop@2x.jpg',
  },
  {
    id: 13,
    color: '#21c8c1',
    name: 'Oota',
    description:
      'One-stop marketplace for home-cooked foods. It connects home-based chefs with foodies.',
    tags: ['Consulting', 'Native App Development', 'UI/UX Design'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-OOTa@2x.jpg',
  },
  {
    id: 14,
    color: '#E60000',
    name: 'DMV',
    description:
      'Devised this app for unlimited access to music, videos, and to get nearby event updates..',
    tags: ['Consulting', 'Native App Development', 'UI/UX Design'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-DMV@2x.jpg',
  },
  {
    id: 15,
    color: '#FF4A5E',
    name: 'Frut',
    description:
      'Created an on-demand grocery delivery and recipe sharing app for fresh & local produce.',
    tags: ['Consulting', 'Native App Development', 'UI/UX Design'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-Frut@2x.jpg',
  },
  {
    id: 16,
    color: '#07889B',
    name: 'Kids City Pass',
    description:
      'Crafted a seamless digital experience & app for parents’ to find kids’ activities.',
    tags: ['Web App Development', 'Mobile App Development', 'UI/UX Design'],
    img:
      'https://www.unifiedinfotech.net/assets/images/Portflio-New-KidsCityPass@2x.jpg',
  },
];

export const portfolio = [
  {
    id: 1,
    name: 'Openreel Inc.',
    title: 'A patented multi-million SaaS video platform',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 2,
    name: 'Sofy TV',
    title: 'An award-winning video streaming app platform',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
  {
    id: 3,
    name: 'Openreel Inc.',
    title: 'A patented multi-million SaaS video platform',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 4,
    name: 'Sofy TV',
    title: 'An award-winning video streaming app platform',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
  {
    id: 5,
    name: 'Openreel Inc.',
    title: 'A patented multi-million SaaS video platform',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 6,
    name: 'Sofy TV',
    title: 'An award-winning video streaming app platform',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
];

export const stats = [
  { id: 1, name: 'Years in the business', value: '10+' },
  { id: 2, name: 'Solutions delivered', value: '1,200+' },
  { id: 3, name: 'Technology experts', value: '150+' },
  { id: 4, name: 'Business delivered', value: '$50M+' },
];

export const process = [
  {
    id: 1,
    title: 'Discovery Workshop',
    img:
      'https://www.unifiedinfotech.net/assets/images/Clutch-Discovery-Workshop-Image@4x.jpg',
    desc:
      'We give the utmost importance to understand and document client’s inputs, design, and branding preferences. And clarify all the open-ended points to establish a precise and clear idea about both clients’ and project’s goals. We work in a collaborative approach involving key stakeholders to bring alignment in the business process.',
  },
  {
    id: 2,
    title: 'Planning',
    img:
      'https://www.unifiedinfotech.net/assets/images/Clutch-Planning-Image@4x.jpg',
    desc:
      'Our services emphasize on well-defined project planning and leave nothing for assumption to avoid miscommunication. We jot down how we are going to proceed further, define detailed technical specifications, devise the design & branding guidelines of the project, and get confirmation and approval from the clients’ end on the documents and materials.',
  },
  {
    id: 3,
    title: 'Design',
    img:
      'https://www.unifiedinfotech.net/assets/images/Clutch-Design-Image@4x.jpg',
    desc:
      'We provide clients with Web, Tablet, and Mobile-specific UI designs of the projects based on the approved wireframes and design guidelines. As a trusted entity, we deliver clickable prototypes on Invision platform and the source files in either Photoshop or Sketch format. Getting system UI designs approved and confirmed by the client is one of our objectives at this stage.',
  },
  {
    id: 4,
    title: 'Development',
    img:
      'https://www.unifiedinfotech.net/assets/images/Clutch-Development-Image@4x.jpg',
    desc:
      'At this stage, we cater requirements for frontend, backend, web services, and API development integration. Along with preparing a strategy for Agile Scrum methodology, we factor the aspects of scalability, multi-tenancy, 3rd party integration, and craft an optimized clean code structure using cutting-edge technologies. We make sure to involve and implement clients’ reviews in each sprint/milestone.',
  },
  {
    id: 5,
    title: 'Testing',
    img:
      'https://www.unifiedinfotech.net/assets/images/Clutch-Testing-Image@4x.jpg',
    desc:
      'We test each sprint manually, report bugs and add those to product backlog. Once the bug fixing is done, we provide the quality release and then the final demo of the sprint is sent for clients’ approval. We make sure to do regression testing to ensure proper functioning of the previously approved milestones/sprints.',
  },
  {
    id: 6,
    title: 'Maintainence',
    img:
      'https://www.unifiedinfotech.net/assets/images/Clutch-Maintenance-Image@4x.jpg',
    desc:
      'Our work doesn’t end with development, we go the extra mile for our clients. Through an Agile approach, we ensure product enhancement. We do regular Security Audits, Bi-weekly code backups, and constant system upgradation. Along with testing the entire system each month to find any incompatibility or error, we monitor the traffic and server load and accordingly optimize it.',
  },
];

export const processNav = [
  {
    id: 1,
    name: 'Discovery Workshop',
  },
  {
    id: 2,
    name: 'Planning',
  },
  {
    id: 3,
    name: 'Design',
  },
  {
    id: 4,
    name: 'Development',
  },
  {
    id: 5,
    name: 'Testing',
  },
  {
    id: 6,
    name: 'Maintainence',
  },
];

export const praiseList = [
  {
    name: 'Cecil Usher',
    title: 'CEO, Music Plug LLC',
    quote:
      'It really transcends everything we’ve done to date. Everyone who’s seen the app has loved it.',
  },
  {
    name: 'Leonardo Rodriguez',
    title: 'Technical PM, Reliable Group',
    quote:
      'The team’s in-depth knowledge of user interaction and behavior resulted in an impressive UI/UX design.',
  },
  {
    name: 'Fabien Mahieu',
    title: 'Co-Founder/Director Flexiwork, UK',
    quote: 'They’re available to help us around the clock.',
  },
];


export const praiseListStartup = [
  {
    name: 'Cecil Usher',
    title: 'CEO, Music Plug LLC',
    quote:
      'It really transcends everything we’ve done to date. Everyone who’s seen the app has loved it.',
  },
  {
    name: 'Leonardo Rodriguez',
    title: 'Technical PM, Reliable Group',
    quote:
      'The team’s in-depth knowledge of user interaction and behavior resulted in an impressive UI/UX design.',
  },
  {
    name: 'Fabien Mahieu',
    title: 'Co-Founder/Director Flexiwork, UK',
    quote: 'They’re available to help us around the clock.',
  },
];

export const praiseListAppDev = [
  {
    name: 'Cecil Usher',
    title: 'CEO, Music Plug LLC',
    quote:
      'It really transcends everything we’ve done to date. Everyone who’s seen the app has loved it.',
  },
  {
    name: 'Joe Matthew',
    title: 'CTO Openreel',
    quote:
      'They performed flawlessly.',
  },
  {
    name: 'Chris Phillips',
    title: 'MD Phillips Innovation',
    quote: 'Unified Infotech\'s team is very professional and transparent about deadlines and costs of services.',
  },
];
export const coreItems = [
  {
    id: 1,
    icon: <AiOutlineCode size={32} />,
    name: (
      <>
        Web <br /> Development
      </>
    ),
    desc:
      'For 10+ years now, we’ve mastered the top web technologies to\
    deliver projects that have raked in investments. A trusted market\
    leader in developing high performing web fronts for every\
    business.',
    action: 'Explore',
  },
  {
    id: 2,
    icon: <AiOutlineAntDesign size={32} />,
    name: (
      <>
        Web <br /> Design
      </>
    ),
    desc:
      'We not only keep up with the ‘design trends’ but focus on users,\
      which makes our services the most fruitful in the entire market.\
      Delivering excellence since 2010.',
    action: 'Learn more',
  },
  {
    id: 3,
    icon: <FaMobileAlt size={32} />,
    name: (
      <>
        Mobile App <br /> Development
      </>
    ),
    desc:
      'We build mobile apps that are loved by users. Taking the benefits\
      of Artificial intelligence, ML, IoT and other high-end\
      technologies to create app masterpiece that sustains.',
    action: 'Explore',
  },
];

export const expertise = [
  {
    id: 1,
    name: 'AR/VR',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-AR-VR@4x.jpg',
    desc:
      'We work with the latest sensations in the tech industry and ensure to \
      deliver best-in-class AR/VR solutions with immersive experiences.',
  },
  {
    id: 2,
    name: 'Media & Entertainment',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-Shopping-E-commerce@4x.jpg',
    desc:
      'We innovate the ways your audience experiences entertainment. Get next-generation solutions for media & entertainment landscape.',
  },
  {
    id: 3,
    name: 'Blockchain & IoT',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-Blockchain-IoT@4x.jpg',
    desc:
      'Let your customers experience the future and transform your business with our high-end Blockchain & IoT solutions.',
  },
  {
    id: 4,
    name: 'AI/ML',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-AI-ML@4x.jpg',
    desc:
      'With our AI/ML experts, we assist businesses to turn the big promises of AI/ML technologies into quantifiable business impact.',
  },
  {
    id: 5,
    name: 'Health & Fitness',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-Health-Finance@4x.jpg',
    desc:
      'Get high-end mHealth solutions to improve medical care & patient services. Our tech solutions are redefining healthcare services.',
  },
  {
    id: 6,
    name: 'Banking & Finance',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-Banking-Finance@4x.jpg',
    desc:
      'Our smart & customer-centric solutions assist businesses to outsmart competitors and modernize banking and finance-related services.',
  },
  {
    id: 7,
    name: 'Shopping & E-Commerce',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-Shopping-E-commerce@4x.jpg',
    desc:
      'We design & develop user-engaging eCommerce applications that improve ROI, increase brand exposure, and skyrocket your online business',
  },
  {
    id: 8,
    name: 'Education & E-Learning',
    img:
      'https://www.unifiedinfotech.net/assets/images/Home-Industry-Education-ELearning@4x.jpg',
    desc:
      'Our high-end tech solutions revamp the education industry and assist it to offer students a more personalized eLearning experience.',
  },
];

export const overviewLinks = [
  { id: 1, name: 'website', action: 'visit' },
  { id: 2, name: 'appstore', action: 'download on' },
  { id: 3, name: 'googleplay', action: 'get it on' },
  { id: 4, name: 'chrome plugin', action: 'download' },
];

export const serviceList = [
  'Consulting and Strategy',
  'Information Architecture',
  'UX/UI Design',
  'Web Development',
  'Mobile App Development',
  'Browser Extension Development',
];

export const results = [
  'Patent approved remote video shooting technology',
  'Received multi-million dollar venture funding',
  'Used by fortune 500 companies and corporations',
];

export const parallaxMeta = (styles, isMedium) => [
  {
    id: 2,
    className: styles.parallax__blue,
    name: 'Patented remote shooting',
    desc:
      'A platform offering various modes of video recording that caters \
      to the client need. There is the option for direct and remote recording\
      making the entire experience user-friendly, seamless and convenient.\
      A leap towards next-generation video shooting, making, and promotion.',
    img:
      'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Parallax-Image-001@2x.png',
  },
  {
    id: 2,
    className: '',
    name: 'Online video editing',
    desc:
      'Whether you’re doing a marketing campaign, creating engaging company updates, \
      selling products and services or creating a client video testimonial, \
      OpenReel puts you in the director’s chair. The application comes fully \
      loaded with several customization options making sure your video is unique and engaging.',
    img: `https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Parallax-Image-002@${
      isMedium ? 1 : 2
    }x.png`,
  },
  {
    id: 3,
    className: styles.parallax__dark,
    name: 'Campaign Management',
    desc:
      'You can create business campaigns using videos as a\
      promotional event. The platform facilitates the entire process\
      end to end with optimum assistance and guidance.',
    img:
      'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Parallax-Image-003@2x.png',
  },
  {
    id: 4,
    className: '',
    name: 'Social media marketing',
    desc:
      'This allows you to post videos on various social media\
    platforms with it. The platform provides calendar\
    functionality as well with this feature that can be used for\
    scheduled uploads across predefined timeslots.',
    img:
      'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Parallax-Image-004@2x.png',
  },
  {
    id: 5,
    className: styles.parallax__blue,
    name: 'Tracking and analytics',
    desc:
      'A complete business-centric analytics segment that allows\
gaining insight on important statistics such as region wise\
views, user view count, view time, call to action, engagement\
percentage and much more. A display that is graphical as well\
as numerical.',
    img:
      'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Parallax-Image-005@2x.png',
  },
];

export const whatWeDevelop = [
  {
    title: 'iOS App Development',
    icon: <AiOutlineApple size={32} />,
    maintext: 'Knowing the Human Interface Guidelines from inside out, we develop native iOS apps that speak to your customers. And is built on the latest iOS frameworks and patterns.',
    link: 'https://www.unifiedinfotech.net/services/ios-app-development/',
  },
  {
    title: 'Android App Development',
    icon: <AiOutlineAndroid size={32} />,
    maintext: 'We consciously follow the Material Design Guidelines to create beautiful Android apps, approved the Android community guidelines. Oh, and we know the in and out of the best Android libraries.',
    link: 'https://www.unifiedinfotech.net/services/android-app-development/',
  },
  {
    title: 'React Native App Development',
    icon: <FaReact size={32} />,
    maintext: 'Code reusability, cross-platform support, and efficiency are some of the traits of react native apps that attract us and our clients equally. We take it forward to create apps that leave a long-lasting impression.',
    link: 'https://www.unifiedinfotech.net/services/react-native-app-development/',
  },
  {
    title: 'Enterprise Mobile Solutions',
    icon: <AiOutlineMobile size={32} />,
    maintext: 'We take pride to be the only app development company that builds powerful applications in the most complex enterprise environment. We know how to make things happen.',
    link : 'https://www.unifiedinfotech.net/services/enterprise-mobile-application-development/',
  }
];

export const swiperAppImage = [
  { 
    url : "https://www.unifiedinfotech.net/assets/images/Personalisation_01@1x.jpg",
    id : 1,
  },
  {
    url : "https://www.unifiedinfotech.net/assets/images/Personalisation_02@1x.jpg",
    id : 2
  },
  { 
    url : "https://www.unifiedinfotech.net/assets/images/Personalisation_03@1x.jpg",
    id : 3,
  },
  { 
    url : "https://www.unifiedinfotech.net/assets/images/Personalisation_04@1x.jpg",
    id : 4,
  },
  { 
    url : "https://www.unifiedinfotech.net/assets/images/Personalisation_05@1x.jpg",
    id : 5,
  },
  { 
    url : "https://www.unifiedinfotech.net/assets/images/Personalisation@1x.jpg",
    id : 6,
  },
];

export const imagePng = [
    {
      url:"https://www.unifiedinfotech.net/assets/images/Personalisation_05@1x.png", 
      id: 1
    },
    {
      url:"https://www.unifiedinfotech.net/assets/images/Main-Home@1x.png", 
      id: 2
    },
    {
      url:"https://www.unifiedinfotech.net/assets/images/Payment-for-Subscription@1x.png", 
      id: 3
    },
    {
      url:"https://www.unifiedinfotech.net/assets/images/Personalisation@1x.png", 
      id: 4
    },
    {
      url:"https://www.unifiedinfotech.net/assets/images/Personalisation_01@1x.png", 
      id: 5
    },
    {
      url:"https://www.unifiedinfotech.net/assets/images/Write_a_review@1x.png", 
      id: 6
    },
]

export const practicesWeFollow = [
  {
    id : 1,
    title : "Attention to Memory Limitations",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Attention to Memory Limitations",
    para : "Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to \“out of memory\”.",
  },
  {
    id : 2,
    title : "Ease of Default Keyboard",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Ease of Default Keyboard",
    para : "The keyboard should have the compatible characters for the input text box in an app. When the reader has to write numbers, they should get the numerical keyboard, not the alphabetical one.",
  },
  {
    id : 3,
    title : "Using Optimized Images",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Using Optimized Images",
    para : "Not everyone has access to high bandwidth internet, and we know that. Which is why our mobile app developers use optimized images while developing apps for the low bandwidth internet users. Specifically sized images only enhance the user experience.",
  },
  {
    id : 4,
    title : "Convenient UI Elements",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Convenient UI Elements",
    para : "The UI elements should be easier for the user to tap on, and menus should have options that are easy to find. The UI design needs to be convenient for the user, only then the users will be satisfied with the app.",
  },
  {
    id : 5,
    title : "Optimized Battery Consumption",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Optimized Battery Consumption",
    para : "The background processes of the apps installed to drain the battery which is a real problem with smartphone users. But not every app needs a background process to run. Which is why we make sure that the apps do not drain the phone battery unnecessarily.",
  },
  {
    id : 6,
    title : "Version Support",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Version Support",
    para : "Any new app should support the latest and the last two versions. Supporting all the versions is going to make the code complex and creates bugs. So for bug-free app development, we make sure that the updated apps support only the last two versions and the current one.",
  },
  {
    id : 7,
    title : "Screen Variance &amp; Compatibility",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Screen Variance &amp; Compatibility",
    para : "There are numerous screen size for both Android and iOS devices, and it only makes sense to test the app on various screen size before uploading it on the app stores. The app should be compatible with the designated screen size, resolutions, and forms.",
  },
  {
    id : 7,
    title : "High &amp; Quality Performance",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "High &amp; Quality Performance",
    para : "We believe that high performance means a lag-free performance. The apps should be optimized regularly and should never keep the user waiting from the moment it is launched. High performance is one of our major mobile app development services.",
  },
  {
    id : 8,
    title : "Offline Mode Importance",
    imgSrc: "https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg",
    subHeader : "Offline Mode Importance",
    para : "Internet connectivity is obvious for all the apps nowadays, but so is the offline mode. With offline mode user should be able to store within the device for easy access. Even in this age of internet popularity, offline mode is important for everyone, and we understand that.",
  },
]