import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Daniel Gonzalez",
      image: "https://cdn.pixabay.com/photo/2024/04/26/09/11/picture-8721442_1280.jpg",
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
