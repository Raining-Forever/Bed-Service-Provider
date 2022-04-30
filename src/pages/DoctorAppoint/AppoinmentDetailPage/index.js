import { useState } from "react";
import AppointmentDetail from "../../../components/AppointmentDetail";
import Meeting from "../../../components/ShowStatus/Meeting/inedx";

export default function AppointmentDetailPage() {
  const [onMeet, setOnMeet] = useState(false);
  return (
    <div>
      {onMeet ? (
        <Meeting
          goBack={() => setOnMeet(false)}
        />
      ) : (
        <AppointmentDetail
          goMeeting={() => setOnMeet(true)}
        />
      )}
    </div>
  );
}
