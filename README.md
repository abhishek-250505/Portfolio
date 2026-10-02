## Local development

Install dependencies with `npm install`, then copy `.env.example` to `.env` and set `MONGODB_URI`. The API uses MongoDB for contact messages and blog posts. Set a long, private `ADMIN_API_KEY` before creating or editing posts. `OPENAI_API_KEY` is optional and stays on the server; without it, the assistant endpoint returns a setup message.

Run the frontend and API together with `npm run dev:full`. The portfolio is served by Vite at `http://localhost:5173`, and the API listens on `http://localhost:3001`. Vite proxies `/api` requests to the API.

For separate production hosting, set `VITE_API_BASE_URL` to the public API origin when building the frontend, and set `CLIENT_ORIGIN` to the deployed portfolio origin on the API. Keep `ADMIN_API_KEY` and `OPENAI_API_KEY` only in the API environment.

## Separate deployment

The frontend and API can be deployed as separate services:

1. Deploy the repository root as the frontend. Set `VITE_API_BASE_URL` to the public backend URL, for example `https://api.example.com`, then run `npm run build`.
2. Deploy the `server` folder as the backend. Run `npm install` and `npm start` from that folder.
3. Configure the backend using `server/.env.example`. Set `CLIENT_ORIGIN` to the exact frontend URL and keep database, admin, and OpenAI secrets on the backend only. Set `TRUST_PROXY` to the number of trusted hosting proxies so rate limits use the real client IP.

The API is organized into `models`, `presenters`, `views`, `middleware`, and `config`; `server/index.js` only connects the database and starts the API.

Contact messages are emailed through Gmail. They are also saved in MongoDB when the database is connected. Create a Google App Password for the Gmail account, then set `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_TO_EMAIL` in the backend environment. Do not use your normal Gmail password.

## API

- `GET /api/health` reports API, database, and assistant readiness.
- `GET /api/posts` lists published posts; `GET /api/posts/:slug` returns a published post.
- `POST /api/posts`, `PUT /api/posts/:id`, and `DELETE /api/posts/:id` require `Authorization: Bearer <ADMIN_API_KEY>`.
- `POST /api/contact` validates and emails a contact message; MongoDB storage is optional.
- `POST /api/assistant` accepts up to eight user/assistant messages and calls the configured OpenAI model.

Start only the API with `npm run dev:api`, or run the production API with `npm run start:api`.
React Portfolio Website

A modern and responsive portfolio website built using React to showcase my skills, projects, and experience as a web developer.

This portfolio serves as a central place to highlight my work, share my journey, and allow people to connect with me.

🚀 Live Demo

🔗 Website: https://abhishekdevportfolio.vercel.app/

🔗 GitHub Repo:https://github.com/abhishek-250505/My-Portfolio

📌 Features

⚛️ Built with React

📱 Fully responsive design

🎨 Clean & modern UI

🧩 Reusable components

🔄 Smooth navigation

🗂️ Projects showcase

📬 Contact section

⚡ Fast and optimized

🛠️ Tech Stack

React.js

JavaScript (ES6+)

HTML5

CSS3

Tailwind CSS 

