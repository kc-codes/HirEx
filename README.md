# HirEx

## Overview
HirEx is an advanced recruitment system built with React and Node.js. It incorporates artificial intelligence and computer vision technologies to revolutionize the hiring process. The system provides automated assessment techniques, including speech-to-text conversion, facial emotion recognition, and tone analysis, for objective evaluations of candidates. It also features a resume builder and a chatbot for interactive placement training support.

## Already Deployed
The HirEx system has already been deployed and is accessible via the following link: [SmartHire](xyz). You can visit the deployed site to explore the features and functionalities of the system without having to set it up locally.

## Folder Structure
The project's folder structure is organized as follows:

- `HirEx`: The root folder of the project.
  - `client`: Contains the React frontend code.
  - `backend`: Contains the Node.js backend code.

## Getting Started
To get started with Smart Hire, please follow the steps below:

### Prerequisites
- Node.js installed on your machine
- AWS Rekognition API credentials
- Cloudinary API credentials
- OpenAI API credentials

### Installation
1. Clone the repository: `git clone https://github.com/youreachedrahat/HirEx.git`
2. Navigate to the project directory: `cd HirEx`
3. Install the dependencies: `npm install`
4. Install the dependencies for the server: `cd backend && npm install`
5. Install the dependencies for the client: `cd ../client && yarn install`

### Configuration
1. Rename the `.env.example` file in the `backend` directory to `.env`.
2. Open the `.env` file and update the following variables with your credentials:
   - `accessKeyId`, `region` and `secretAccessKey`: AWS Rekognition API credentials
   - `cloudName`, `apiKey`, `apiSecret` and `uploadPreset`: Cloudinary API credentials
   - `OPENAI_API_KEY`: OpenAI API key


### Resume Analyzer Repo
1. Refer this repo for more understanding and working of Resume Analyzer: [https://github.com/kc-codes/Resume_Analyzer](https://github.com/kc-codes/Resume_Analyzer)

### HirEx Bot Repo
1. Refer this repo for more understanding and working of Resume Analyzer: [https://github.com/kc-codes/HirEx_BOT](https://github.com/kc-codes/HirEx_BOT)


### Usage
1. Start the application using the following command: `npm run dev`
2. Access the Smart Hire system through your web browser: `http://localhost:3000`
3. Follow the on-screen instructions to perform various tasks, such as conducting interviews, analyzing candidate responses, and utilizing the chatbot.


### Screenshot

**SmartHire Architecture**
![Screenshot](./Screenshot/SmartHire_ARCHITECTURE.png)

**HireEx Process Design**
![Screenshot](./Screenshot/HireEx%20Process%20Design.png)

**Home**
![Screenshot](./Screenshot/Home.png)

**Feature**
![Screenshot](./Screenshot/Features.png)

**InterviewGenerator**
![Screenshot](./Screenshot/InterviewGenerator.png)

**OrganizationProfile**
![Screenshot](./Screenshot/OrganizationProfile.png)

**OrganizationInterviewCreation**
![Screenshot](./Screenshot/OrganizationInterviewCreation.png)

**CandidateProfile**
![Screenshot](./Screenshot/CandidateProfile.png)

**CandidateInterviewSection**
![Screenshot](./Screenshot/CandidateInterviewSection.png)

**Actual Interview**
![Screenshot](./Screenshot/Interview1.png)

**EmotionDetection of the given interview**
![Screenshot](./Screenshot/EmotionDetection.png)

**ResultInterview**
![Screenshot](./Screenshot/ResultInterview.png)

**ResultInterview1**
![Screenshot](./Screenshot/ResultInterview1.png)

**Resume Analyzer**
![Screenshot](./Screenshot/ResumeAnalyzer.png)

**Resume Analyzer2**
![Screenshot](./Screenshot/ResumeAnalyzer2.png)

**Resume Analyzer3**
![Screenshot](./Screenshot/ResumeAnalyzer3.png)

**ResumeAnalyzer_Admin1**
![Screenshot](./Screenshot/ResumeAnalyzer_Admin1.png)

**ResumeAnalyzer_Admin2**
![Screenshot](./Screenshot/ResumeAnalyzer_Admin2.png)

**ResumeBuilder1**
![Screenshot](./Screenshot/ResumeBuilder1.png)

**ResumeBuilder2**
![Screenshot](./Screenshot/ResumeBuilder2.png)

**HirEx Chatbot**
![Screenshot](./Screenshot/Chatbot.png)

<!-- **abc**
![Screenshot](./Screenshot/)
 -->

