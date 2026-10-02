import img from "../assets/aiinterview.png";
import img1 from "../assets/dailybrief.png";
export const project = {
  "projects": [
    {
      "id": 1,
      "title": "DailyBrief – News Web Application",
      "description": "DailyBrief is a news website that allows users to explore real-time articles with a clean interface. It includes features like pagination, bookmarking, and a voice reader to make news consumption faster and more accessible.",
      "techStack": ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      "links": {
        "github": "https://github.com/abhishek-250505/DailyBrief-News-Website",
        "live": "https://daily-brief-news-website.vercel.app"
      },
      "image":img1,
      "category": "Full Stack",
      "status": "Completed"
    },
    {
      "id": 2,
      "title": "InterviewPrep.AI Platform",
      "description": "InterviewPrep.AI is an AI-powered platform that generates personalized interview questions from uploaded resumes and simulates real interview scenarios. It includes mock interviews, automated feedback, secure authentication, and a credit-based payment system.",
      "techStack": ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Razorpay"],
      "image":img,
      "links": {
        "github": "https://github.com/abhishek-250505/PrepWise-AI-Mock-Interview",
        "live": "https://prepwiseai-tau.vercel.app"
      },
      
      "category": "Full Stack",
      "status": "Completed"
    }
  ]
};

export const experiences = [
  {
    id: "lt-elevator",
    name: "L.T. ELEVATOR",
    role: "Full-Stack & Mobile App Developer",
    date: "Sep 2026 - Present",
    location: "On-site",
    stack: [
      { name: "React", icon: "react", tone: "blue" },
      { name: "TypeScript", icon: "typescript", tone: "sky" },
      { name: "Next.js", icon: "next", tone: "slate" },
      { name: "Tailwind", icon: "tailwind", tone: "teal" },
      { name: "Playwright", icon: "playwright", tone: "purple" },
      { name: "Node.js", icon: "node", tone: "green" },
      { name: "GitHub", icon: "github", tone: "dark" },
      { name: "Postman", icon: "postman", tone: "orange" },
    ],
    highlights: [
      "Optimized website and application performance, resulting in improved user experience and system efficiency.",
      "Developed and maintained internal tools and infrastructure to support business operations and team productivity.",
      "Collaborated cross-functionally with development teams to design, implement, and deploy scalable internal solutions.",
    ],
  },
];