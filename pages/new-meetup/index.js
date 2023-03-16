import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupForm(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupForm} />;
}

export default NewMeetupPage;
