import UserSettingItem from "../../components/UserSettingItem";
import React from 'react';




export default function UserSettingContainer(props) {
  return (
    <div className="container-fluid">
      <UserSettingItem
        user={props.user}
        itemText={"@username"}
        valueText={props.user.username}
      />
      <UserSettingItem
        user={props.user}
        itemText={"displayName"}
        valueText={props.user.displayName}
      />
      <UserSettingItem
        user={props.user}
        itemText={"email"}
        valueText={props.user.email}
      />
    </div>
  );
}