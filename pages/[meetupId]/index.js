import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";
import { DUMMY_MEETUPS } from "..";

function MeetupDetailPage() {
  const router = useRouter();

  const meetupId = router.query.meetupId;

  const singleItem = DUMMY_MEETUPS.find((item) => meetupId === item.id);

  console.log(singleItem)

  return (
    <MeetupDetail
      id={meetupId}
      title={singleItem.title}
      address={singleItem.address}
      description={singleItem.description}
      image={singleItem.image}
    />
  );
}

export default MeetupDetailPage;
