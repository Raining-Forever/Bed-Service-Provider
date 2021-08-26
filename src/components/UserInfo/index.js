import React from "react";

export default function UserInfo(props) {
  return (
    <div>
      <p> {props.user.name} </p>
      <p> {props.user.email} </p>
      <img src={props.user.image} />
    </div>
  );
}
