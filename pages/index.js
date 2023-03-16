import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://i.ytimg.com/vi/CQ2GuHkuuz0/maxresdefault.jpg?v=640f426f",
    address: "some address 3, 12345 some city",
    description: "this is a first meetup!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://cronkitenews.azpbs.org/wp-content/uploads/2021/10/Bader-Bellator-800x500-1.jpg",
    address: "some address 4, 12345 some city",
    description: "this is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

//nextJs function - executes on the build process, never on the clients machine(pre-render).
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    //this page regenerates on the server every #sec if request are coming into the server, so that the page is never longer than #sec old.
    //So this page will be occasionally pre-regenerated on the server after deployment.
    //Meaning the page will dynamically change and pre-render a page to send to the client after it updates itself behind the scenes.
    revalidate: 1,
  };
}

export default HomePage;
