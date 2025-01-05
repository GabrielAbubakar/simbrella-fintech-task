
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup Instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## My Approach

### Step One: Design
The first step that I took in order to start the application was to design the wireframe of what the application would look like on desktop, tablet and mobile views. This was so that i would be able to focus while developing as I would have an actionable structure in my mind. For this stage I took my research online to view different inspirations of financial technology dashboards to understand pain points for users and what needed to be prioritized in the structure of the dashboard.

### Step Two: Data Structure and Mock API
The next important step was for me to determine what platform i would use to develop the mock API that would be called by the frontend application in order to make requests which was one of the important requirements of the task. After extensive research into the options available i decided to use NextJS Route Handlers to send dummy responses to the frontend app as all the other external platforms that offered such either had some form of paywall or limit. 

### Step Three: Frontend App development
Now after having both a simple UI design ready and an API with dummy resources ready I began the development process of the frontend application in accordance with the requirements of the task. I consumed the mock API i had built in the same NextJS application while following the simple wireframe design that  I had built in Figma. This sped up the development process and enabled me to finish the task.

### Step Four: Testing
I proceeded to write a unit test for one of the components using the React Testing Library and Jest. I had some difficulties getting the tests to work properly as a result of typescript compatibility issues with the tests. After extensive research, consultation of Babel and Jest docs and effort I was able to find a solution and get the tests working properly. The command for running the tests in development is:

```
npm run test
```

### Deployment 
I then proceeded to deploy the site on Vercel which then hosted both the frontend of the application and the Mock API.