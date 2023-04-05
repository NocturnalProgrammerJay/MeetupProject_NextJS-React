import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

//getStaticPath must be an export function in a page component file if a dynamic page ([meetupID]) folder and using getStaticProps.
// why? for example meetupId needs to updated for all the pre-render [meetupID] URL pages becomes it being built in the building process.
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://almightyblazee:iMNVf4ncJh435th5@reactcluster.zxtew7g.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray(); //fetching document objects, but only the id's.

  client.close();

  return {
    /**
     * 
    * tells nextJS whether my paths contains all supported parameters values or just some of them. false means supports all meetupID values if m3 for example then it will give the user an 404 page.
      NextJS would try to generate a page for this meetup ID dynamically on the server for the incoming request.
      blocking or true means that you are telling nextJS that the list of paths might not be exhausted and there might be more validate page. Wont respond with 404 page if cant find the page immediately.
      Instead blocking or true nextjs will generate that page on demand and then after cache it, pre generated when needed.
      true - it would immediately return an empty page, and then pull down the dynamically generated content once that's done.
      blocking - the user will not see anything until the page was pre-generated, and the finished page will be served.
     */
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      // Update these paths
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://almightyblazee:iMNVf4ncJh435th5@reactcluster.zxtew7g.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
