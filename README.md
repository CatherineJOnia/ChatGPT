# ChatGPT Clone

ChatGPT (Chat Generative Pre-trained Transformer) is a chatbot developed by OpenAI and launched in November 2022. It is built on top of OpenAI's GPT-3 family of large language models and has been fine-tuned (an approach to transfer learning) using both supervised and reinforcement learning techniques.


## Features

- ChatGPT Engine Selection
- Google Authentication
- Dynamic Routing with Nextjs 13
- Real-Time Chat History with Firebase Firestore
- Hot Toast Notifications


## Tech Stack

<p> 
<a href="https://www.typescriptlang.org/"> 
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" alt="typescript" width="40" height="40"/> </a>
<a href="https://reactjs.org/">
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="reactjs" width="40" height="40"/>
</a>
<a href="https://firebase.google.com/"> 
<img src="https://github.com/devicons/devicon/blob/master/icons/firebase/firebase-plain.svg" alt="firebase" width="40" height="40"/> 
</a> 
<a href="https://tailwindcss.com/"> 
<img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss" width="40" height="40"/> 
</a>
</p>

## Demo

![Insert GIF]()

  
## Experience ChatGPT Clone Deployed! 

https://chatgpt-onia-steel.vercel.app
  

## Installation

`** Note **`: This app requires Secret Keys from <a href="https://console.cloud.google.com/" >Google OAuth Client ID and Client Secret</a>,  <a href="https://openai.com/api/" >OPENAI API</a>, and <a href="https://firebase.google.com/" >Firebase Service Account</a>

Clone the project

```bash
  git clone git@github.com:CatherineJOnia/ChatGPT-Clone.git
```

Install dependencies

```bash
  npm install
```

In the root directory of the project files, create a `.env.local` file

```bash
  .env.local
```

In the `.env.local` file, create the following environment variables:

```
GOOGLE_ID=YOUR_GOOGLE_OAUTH_ID
GOOGLE_SECRET=YOUR_GOOGLE_OAUTH_SECRET_KEY
NEXTAUTH_SECRET=ANY_RANDOM_LONG_ALPHANUMERIC_STRING
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
FIREBASE_SERVICE_ACCOUNT_KEY=YOUR_FIREBASE_SERVICE_ACCOUNT_KEY

```

Start the server

```bash
  npm run dev
```
  
Access the project in your browser at [`localhost:3000`](http://localhost:3000)
  
 
  
