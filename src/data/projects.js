import weatherImg from '../assets/images/weather.PNG';
import weatherVideo from '../assets/videos/weather.mp4';
import portfolioImg from '../assets/images/portfolio.PNG';
import portfolioVideo from '../assets/videos/portfolio.mp4';
import eatImg from '../assets/images/eat.PNG';
import eatVideo from '../assets/videos/eat.mp4';
import jobboardImg from '../assets/images/jobboard.PNG';
import jobboardVideo from '../assets/videos/jobboard.mp4';
import postinsightImg from '../assets/images/postinsight.PNG';
import postinsightVideo from '../assets/videos/postinsight.mp4';
import matrixImg from '../assets/images/matrix.PNG';
import matrixVideo from '../assets/videos/matrix.mp4';
import bootstrapImg from '../assets/images/bootstrap.PNG';
import bootstrapVideo from '../assets/videos/bootstrap.mp4';
import powerbiImg from '../assets/images/powerbi.PNG';
import powerbiVideo from '../assets/videos/powerbi.mp4';
import mlImg from '../assets/images/ml.PNG';
import mlVideo from '../assets/videos/ml.mp4';
import foodappImg from '../assets/images/foodapp.PNG';
import foodappVideo from '../assets/videos/foodapp.mp4';
import sqaImg from '../assets/images/sqa.PNG';
import sqaVideo from '../assets/videos/sqa.mp4';
import skillboostImg from '../assets/images/skillboost.PNG';
import skillboostVideo from '../assets/videos/skillboost.mp4';
import medicalDashboardImg from '../assets/images/medicaldashboard.PNG';
import medicalDashboardVideo from '../assets/videos/medicaldashboard.mp4';
import bookAPIImage from '../assets/images/bookapi.PNG';
import bookAPIVideo from '../assets/videos/booksapi.mp4';

const projects = [
    {
        id: 1,
        title: 'Skill Boost',
        image: skillboostImg,
        videoSrc: skillboostVideo,
        githubLink: 'https://github.com/Huzaifa110/skillboost',
        liveLink: 'https://main--roaring-stardust-690a30.netlify.app/',
        hasLiveLink: true,
        hasGithubLink: true,
        category: 'Next',
        description: "A frontend Web Application named Skill Boost, offering technical courses build using Next.js and Aceternity UI."
    },
    {
        id: 2,
        title: 'Food Ordering App',
        image: foodappImg,
        videoSrc: foodappVideo,
        githubLink: 'https://github.com/Huzaifa110/food_ordering_app',
        liveLink: 'https://food-ordering-app-one-self.vercel.app/',
        hasLiveLink: true,
        hasGithubLink: true,
        category: 'MERN',
        description: 'A food ordering app built using MERN Stack, with complete user authentication, and all the data being fetched from a MongoDB cluster.'
    },
    {
        id: 3,
        title: 'Job Board',
        image: jobboardImg,
        videoSrc: jobboardVideo,
        githubLink: 'https://github.com/Huzaifa110/JobBoard',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: true,
        category: 'MERN',
        description: "A Job Board built using MERN Stack, with user authentication system, displaying all jobs, search functionality, and an additional post job functionality for employer's account."
    },
    {
        id: 4,
        title: 'Post Insight',
        image: postinsightImg,
        videoSrc: postinsightVideo,
        githubLink: 'https://github.com/Huzaifa110/PostInsight',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: true,
        category: 'Django',
        description: "A Posting app built using Django, with user authentication system, displaying all posts, add post with an account, and edit and delete user's own post."
    },
    {
        id: 5,
        title: 'Weather Update',
        image: weatherImg,
        videoSrc: weatherVideo,
        githubLink: 'https://github.com/Huzaifa110/mosamkikhabar',
        liveLink: 'https://huzaifa110.github.io/mosamkikhabar/',
        hasLiveLink: true,
        hasGithubLink: true,
        category: 'React',
        description: "A React app displaying weather information of countless cities using a public API."
    },
    {
        id: 6,
        title: 'Basic Portfolio',
        image: portfolioImg,
        videoSrc: portfolioVideo,
        githubLink: 'https://github.com/Huzaifa110/project',
        liveLink: 'https://huzaifa110.github.io/project/',
        hasLiveLink: true,
        hasGithubLink: true,
        category: 'HTML & CSS',
        description: 'A basic portfolio website, built using HTML and CSS.'
    },
    {
        id: 7,
        title: 'Matrix Calculator',
        image: matrixImg,
        videoSrc: matrixVideo,
        githubLink: 'https://github.com/Huzaifa110/MatrixCalculator',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: true,
        category: 'Python',
        description: 'A GUI-based Matrix Calculator built using Python and the tkinter library for the GUI.'
    },
    
    {
        id: 8,
        title: 'Restaurant Web Page',
        image: eatImg,
        videoSrc: eatVideo,
        githubLink: 'https://github.com/Huzaifa110/eat',
        liveLink: 'https://huzaifa110.github.io/eat/',
        hasLiveLink: true,
        hasGithubLink: true,
        category: 'React',
        description: 'A basic React application displaying dishes categorically.'
    },
    {
        id: 9,
        title: 'iCoder',
        image: bootstrapImg,
        videoSrc: bootstrapVideo,
        githubLink: 'https://github.com/Huzaifa110/ResponsiveBlog',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: true,
        category: 'Bootstrap',
        description: 'A responsive technology blog posting site built using HTML, CSS, and Bootstrap.'
    },
    {
        id: 10,
        title: 'Weather Predictor',
        image: mlImg,
        videoSrc: mlVideo,
        githubLink: 'https://github.com/Huzaifa110/WeatherPredictor',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: true,
        category: 'Machine Learning',
        description: 'A Machine Learning-based Weather Predictor app, predicting weather summary by taking different inputs, using three algorithms: Logistic Regression, Random Forest Classifier, and Multi-Layer Perceptron. The GUI is built using React.js and the backend functionality of calling models on the GUI is done using Node.js.'
    },
    {
        id: 11,
        title: 'Power Bi Dashboard',
        image: powerbiImg,
        videoSrc: powerbiVideo,
        githubLink: '',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: false,
        category: 'PowerBi',
        description: 'A Power BI dashboard displaying visuals of the data of a store.'
    },
    {
        id: 12,
        title: 'SQA Projects',
        image: sqaImg,
        videoSrc: sqaVideo,
        githubLink: 'https://github.com/Huzaifa110/SQA-Projects/',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: true,
        category: 'SQA',
        description: 'Test Cases for a Web Application "Book Studio" and a "Mobile App" were created and executed. Test Scenarios for Login, Signup screens, along with scenarios of big softwares like WhatsApp are also created.'
    },
    {
        id: 13,
        title: 'Medical Dashboard',
        image: medicalDashboardImg,
        videoSrc: medicalDashboardVideo,
        githubLink: 'https://github.com/Huzaifa110/frontendtask/',
        liveLink: 'https://huzaifa110.github.io/frontendtask/',
        hasLiveLink: true,
        hasGithubLink: true,
        category: 'React',
        description: 'Given a Figma design, a medical dashboard page frontend build using React.js, different statistics were shown using different types of graphs with Chart.js, responsive for every screen sizes.'
    },
    {
        id: 14,
        title: 'Books API Testing',
        
        image: bookAPIImage,
        videoSrc: bookAPIVideo,
        githubLink: '',
        liveLink: '',
        hasLiveLink: false,
        hasGithubLink: false,
        category: 'Postman (API Testing)',
        description: 'API Testing of public Book API was conducted using Postman.'
    },
];

export default projects;
