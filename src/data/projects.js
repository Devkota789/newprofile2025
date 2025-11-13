
import KrishilinkImage from '../assets/projects/image.png'
import K72Image from '../assets/projects/k72.png'
import WeatherAppImage from '../assets/projects/weather.png'
import SandeshWebsiteImage from '../assets/projects/sandesh.png'
import Movie from '../assets/projects/movies.png'
import SimpleProfileDemoImage from '../assets/projects/nischalpor.png'
export const projects = [
 {
  id: 'krishilink',
  title: 'KrishiLink Nepal',
  description:
    'KrishiLink Nepal is a digital platform connecting farmers directly with markets. It helps farmers sell their produce online, access updated market prices, and connect with buyers efficiently.',
  technologies: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'MongoDB'],
  liveUrl: 'https://krishilink.shamir.com.np/',
  sourceUrl: 'https://github.com/Devkota789/krishilink',
  image: KrishilinkImage, 
  highlights: [
    'Developed a responsive web interface for farmers and buyers using React and Tailwind CSS.',
    'Integrated backend API for real-time product listings, orders, and market price updates.',
    'Implemented secure authentication and role-based access for farmers, buyers, and admins.',
  ],
},
  
{
  id: 'k72',
  title: 'K72 Company Website',
  description:
    'K72 is a modern company website designed to showcase services, projects, and team members with an elegant and interactive UI. It emphasizes performance, responsiveness, and smooth navigation to enhance user experience.',
  technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  liveUrl: 'https://k72.ca/en',
  sourceUrl: 'https://github.com/Devkota789/K72',
  image: K72Image, 
  highlights: [
    'Developed a fully responsive and visually engaging website using React and Tailwind CSS.',
    'Integrated smooth animations and transitions with Framer Motion for a modern UI feel.',
    'Optimized performance and SEO for faster loading and improved discoverability.',
  ],
},
{
  id: 'simpleweather',
  title: 'SimpleWeather App',
  description:
    'SimpleWeather is a lightweight weather forecasting web application that provides real-time temperature, humidity, and weather conditions for any city worldwide. It features a clean UI and responsive design for smooth user experience.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
  liveUrl: 'https://rdinesh1667.github.io/weather-app/',
  sourceUrl: 'https://github.com/Devkota789/simpleweather',
  image: WeatherAppImage, 
  highlights: [
    'Built using pure HTML, CSS, and JavaScript with no external frameworks.',
    'Integrated OpenWeather API for real-time weather data fetching and display.',
    'Designed a responsive and minimal UI for quick city-based weather search.',
  ],
},
  
  {
  id: 'sandesh-website',
  title: 'Sandesh Baral — Professional Trekking Guide Website',
  description:
    'A modern, responsive website built for a professional trekking guide in Nepal, showcasing services, destinations, and testimonials to attract adventure-seekers.',
  technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'AOS (Animate On Scroll)'],
  liveUrl: 'https://sandesh-website.vercel.app/',
  sourceUrl: 'https://github.com/Devkota789/Sandesh-website',
  image: SandeshWebsiteImage,
  highlights: [
    'Responsive design working smoothly across mobile, tablet and desktop breakpoints.',
    'Integrated a testimonials carousel and dynamic destination list for enhanced user engagement.',
    'Styled using CSS variables and modern layout techniques (Grid, Flexbox), making future customization fast and simple.',
  ],
  },

  {
  id: 'movie-gilt',
  title: 'Movie Gilt',
  description:
    'Movie Gilt is an interactive web application that allows users to browse, search and view details for movies. It features sleek UI, poster grid, search functionality and detailed movie information.',
  technologies: ['React', 'Tailwind CSS', 'The Movie DB API', 'Vite'],
  liveUrl: 'https://movie-gilt-nu.vercel.app/',
  sourceUrl: 'https://github.com/Devkota789/Movie',
  image: Movie,
  highlights: [
    'Integrated The Movie DB API for live movie data fetching and rendering.',
    'Implemented responsive poster grid with search/filter capabilities.',
    'Optimised images and bundle size for fast load times on mobile and desktop.',
  ],
  },
  {
  id: 'simple-profile-demo',
  title: 'Simple Profile Demo',
  description:
    'A minimalistic personal profile demo website showcasing an interactive profile section, links, and smooth animations.',
  technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)'],
  liveUrl: 'https://simple-profile-demo-mu.vercel.app/',
  sourceUrl: 'https://github.com/Devkota789/simple-profile-demo-',
  image: SimpleProfileDemoImage,
  highlights: [
    'Designed a clean and responsive one-page layout for personal profiling.',
    'Used modern CSS techniques and vanilla JavaScript for micro-animations and link interactions.',
    'Optimised for mobile and desktop breakpoints with smooth scrolling and hover/active states.',
  ],
  },
]

