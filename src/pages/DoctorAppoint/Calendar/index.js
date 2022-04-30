/* global gapi */
import React from "react";

export default function Calendar() {
  var gapi = window.gapi;

  const handleClick = (props) => {
    gapi.load("client:auth2", async () => {
      console.log("loaded client");

      const googleUser = await gapi.auth2
        .getAuthInstance()
        .currentUser.get();

      var options =
        await new gapi.auth2.SigninOptionsBuilder(
          {
            scope:
              "email https://www.googleapis.com/auth/calendar.events",
          }
        );

      await googleUser.grant(options).then(
        function (success) {
          console.log(
            JSON.stringify({
              message: "success",
              value: success,
            })
          );
        },
        function (fail) {
          alert(
            JSON.stringify({
              message: "fail",
              value: fail,
            })
          );
        }
      );

      await gapi.client.load(
        "calendar",
        "v3",
        () => console.log("bam!")
      );

      // var event = {
      //   summary: "นัดหมายปรึกษาแพทย์",
      //   description: "Really great refreshments",
      //   start: {
      //     dateTime: "2020-06-28T09:00:00-07:00",
      //     timeZone: "America/Los_Angeles",
      //   },
      //   end: {
      //     dateTime: "2020-06-28T17:00:00-07:00",
      //     timeZone: "America/Los_Angeles",
      //   },
      //   conferenceData: {
      //     createRequest: {
      //       conferenceSolutionKey: {
      //         type: "hangoutsMeet",
      //       },
      //       requestId: "coding-calendar-demo",
      //     },
      //   },
      //   attendees: [
      //     { email: "lpage@example.com" },
      //     { email: "sbrin@example.com" },
      //   ],
      //   reminders: {
      //     useDefault: false,
      //     overrides: [
      //       { method: "email", minutes: 24 * 60 },
      //       { method: "popup", minutes: 10 },
      //     ],
      //   },
      // };
      await gapi.client.load(
        "calendar",
        "v3",
        () => {
          gapi.client.calendar.events
            .insert({
              calendarId: "primary",
              resource: props.event,
              conferenceDataVersion: 1,
            })
            .execute((e) => {
              console.log(e);
              props.url = e.htmlLink;
              window.open(e.htmlLink);
              window.open(e.hangoutLink);
            });
        }
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click to add event to Google Calendar
        </p>
        <p style={{ fontSize: 18 }}>
          Don't forget to add your Client Id and
          Api key
        </p>
        <button
          style={{ width: 200, height: 50 }}
          onClick={handleClick}
        >
          Add Event
        </button>
      </header>
    </div>
  );
}
