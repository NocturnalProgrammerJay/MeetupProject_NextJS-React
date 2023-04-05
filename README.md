# React Meetup

React Meetup is a web application developed using Next.js, React.js, and MongoDB/Mongoose. The project is part of a Udemy course that teaches how to build full-stack web applications using Next.js.

The project allows users to create and join meetups, RSVP to events, and interact with other members of the community. It also includes features such as programmatic imperative navigation, metadata, server-side rendering, file-based routing, and API routes.

## Getting Started

To run the project on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running the command `npm install`.
3. Create a `.env.local` file in the root directory of the project and set the following environment variables:

MONGODB_URI=<your MongoDB URI>
MONGODB_DB=<your MongoDB database name>


4. Run the development server by running the command `npm run dev`.

## Project Structure

The project is organized into the following directories:

- `/components`: Contains reusable React components.
- `/pages`: Contains Next.js pages and API routes.
- `/public`: Contains static assets such as images and fonts.

## File-based Routing

Next.js uses file-based routing to automatically generate routes based on the file system. For example, the `/pages/new-meetup/index.js` file represents the homepage of the application and displays a list of meetups. By organizing the files in this way, we can create a clean and intuitive directory structure for our application.

## API Routes

Next.js allows us to create API routes that can be used to handle HTTP requests. For example, the `/pages/api/new-meetup/index.js` file handles requests to create, read, update, and delete meetups. By using API routes, we can create a powerful and flexible backend for our application.

## Server-side Rendering

Next.js provides server-side rendering (SSR) out of the box. This means that the initial HTML and CSS for each page is generated on the server, which can improve the performance and SEO of our application. To take advantage of SSR, we can use the `getServerSideProps` function to fetch data and pass it to our React components.

## Metadata

Next.js allows us to add metadata to our pages, such as the page title, description, and Open Graph tags. By adding metadata, we can improve the SEO and social sharing of our application. To add metadata, we can use the `Head` component provided by Next.js.

## Programmatic Imperative Navigation

Next.js allows us to perform programmatic imperative navigation using the `router` object. For example, we can use `router.push('/meetups')` to navigate to the meetups page. By using programmatic navigation, we can create a seamless and intuitive user experience for our application.

## Deployment

The project is hosted on Vercel, which provides an easy and scalable deployment platform for Next.js applications. To deploy the project, simply push your changes to the main branch of the GitHub repository. Vercel will automatically build and deploy the application to a production environment.

## Live Demo

![NectJSDemo](https://user-images.githubusercontent.com/96387037/230146271-67b9c50c-36dc-4162-91e4-01a1e1529297.gif)

Check out the live demo of the React Meetup application at [https://react-meetups-3h8hv1lbj-nocturnalprogrammerjay.vercel.app/](https://react-meetups-3h8hv1lbj-nocturnalprogrammerjay.vercel.app/).


