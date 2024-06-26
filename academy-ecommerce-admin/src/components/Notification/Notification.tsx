import React from "react";
import {
  NotificationContainer,
  NotificationDescription,
  NotificationHeader,
  NotificationImage,
  NotificationTitle,
} from "./Notification.styled";
import Success from "../../assets/success.svg";
import Fail from "../../assets/fail.svg";

interface NotificationProps {
  text: string;
  status: string;
  title: string;
  show: boolean;
}

const Notification = ({ text, status, title, show }: NotificationProps) => {
  let notificationIcon;

  if (status === "success") {
    notificationIcon = Success;
  }
  if (status === "fail") {
    notificationIcon = Fail;
  }

  return (
    <>
      {show && (
        <NotificationContainer>
          <NotificationHeader>
            <NotificationImage src={notificationIcon} />{" "}
            <NotificationTitle>{title}</NotificationTitle>
          </NotificationHeader>
          <NotificationDescription>{text}</NotificationDescription>
        </NotificationContainer>
      )}
    </>
  );
};

export default Notification;
