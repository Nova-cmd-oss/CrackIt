<h1 align="center">CrackIt</h1>

<p align="center">
  AI-powered technical interview platform built with Next.js and Vapi AI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black" />
  <img src="https://img.shields.io/badge/React-19-61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28" />
  <img src="https://img.shields.io/badge/Vapi-AI-blue" />
</p>

CrackIt is an AI-powered technical interview preparation platform that simulates real interview experiences through voice conversations, helping developers improve communication, technical knowledge, and interview confidence with instant AI-generated feedback.

Live : https://crackitprep.vercel.app/

## ✨ Features

* 🎙️ AI-powered voice interviews
* 🤖 Real-time conversational interview experience
* 📊 Instant feedback and performance analysis
* 📚 Interview history and progress tracking
* 🔐 Secure authentication with Firebase
* ⚡ Responsive and modern UI

## 🛠 Tech Stack

**Next.js · React · TypeScript · Tailwind CSS · Firebase · Firestore · Firebase Admin SDK · Vapi AI · Shadcn/UI**

## 🚀 Getting Started

Clone the repository:

```bash id="fgt3pv"
git clone git@github.com:Nova-cmd-oss/CrackIt.git
cd CrackIt
```

Install dependencies:

```bash id="u78hio"
npm install
```

Create a `.env.local` file and add your Firebase and Vapi credentials.

Firebase authentication requires these values in `.env.local`:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

The public Firebase configuration and Admin SDK configuration must reference the same Firebase project. Encode line breaks in `FIREBASE_PRIVATE_KEY` as `\\n`. Do not commit `.env.local` or service-account credentials.

Start the development server:

```bash id="jlwmha"
npm run dev
```

Open **http://localhost:3000** in your browser.

## 📁 Project Structure

```text id="8k7xmx"
app/
components/
constants/
firebase/
lib/
public/
types/
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.
