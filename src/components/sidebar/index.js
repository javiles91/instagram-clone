import React from "react";
import useUser from "../../hooks/use-user";
import Users from "./user";
import Suggestions from "./suggestions";

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser();

  console.log("fullName, username, userId", fullName, username, userId);
  return (
    <div className="p-4">
      <Users />
      <Suggestions />
    </div>
  );
};

export default Sidebar;
