# ChatGPT Clone -- ChatOnia

ChatGPT is a natural language processing (NLP) model developed by OpenAI that uses machine learning to generate text conversations. It can be used to build interactive bots that can engage with users in a conversational way and provide real-time responses based on input. It provides near-human level conversation quality and can be used for applications such as customer support, virtual assistants and natural language understanding.

ChatOnia is a web application that allows users to choose between the OpenAI language models, test their capabilities, and select the model that best suits a given task.

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
<a href="https://nextjs.org/">
<img src="https://github.com/CatherineJOnia/ChatGPT-Clone/blob/main/public/nextjs.png" alt="nextjs" width="40" height="40"/>
</a>
<a href="https://firebase.google.com/">
<img src="https://github.com/devicons/devicon/blob/master/icons/firebase/firebase-plain.svg" alt="firebase" width="40" height="40"/>
</a>
<a href="https://tailwindcss.com/">
<img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss" width="40" height="40"/>
</a>
<a href="https://next-auth.js.org/">
<img src="https://github.com/CatherineJOnia/ChatGPT-Clone/blob/main/public/nextauth.png" alt="nextauth" width="40" height="40"/>
</a>
<a href="https://openai.com/">
<img src="https://github.com/CatherineJOnia/ChatGPT-Clone/blob/main/public/openai.png" alt="openai" width="40" height="40"/>
</a>

</p>

## Demo

![Google Authentication](https://github.com/CatherineJOnia/ChatGPT-Clone/blob/main/public/Login.gif)
![Functionality](https://github.com/CatherineJOnia/ChatGPT-Clone/blob/main/public/Functionality.gif)

## Experience ChatOnia Deployed!

[Click Here](https://chatgpt-onia.vercel.app) to test out the app!

## Installation

`** Note **`: This app requires Secret Keys from <a href="https://console.cloud.google.com/" >Google OAuth Client ID and Client Secret</a>, <a href="https://openai.com/api/" >OPENAI API</a>, and <a href="https://firebase.google.com/" >Firebase Service Account</a>

Clone the project

```bash
  git clone git@github.com:CatherineJOnia/ChatOnia.git
```

Enter the project

```bash
  cd ChatOnia
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
