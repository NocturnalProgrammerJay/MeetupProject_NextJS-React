import Head from "next/head";
import { MongoClient } from "mongodb"; //nextjs will detect this and not include this inside the client side bundle.

import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// //regenerate page for every income request. This runs on the server after deployment. Runs on server and never the client.
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

//nextJs function - executes on the build process, never on the clients machine(pre-render).
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://almightyblazee:iMNVf4ncJh435th5@reactcluster.zxtew7g.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find().toArray(); // list of documents

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(), //converts json object to a string.
      })),
    },
    //this page regenerates on the server every #sec if request are coming into the server, so that the page is never longer than #sec old.
    //So this page will be occasionally pre-regenerated on the server after deployment.
    //Meaning the page will dynamically change and pre-render a page to send to the client after it updates itself behind the scenes.
    revalidate: 1,
  };
}

export default HomePage;
