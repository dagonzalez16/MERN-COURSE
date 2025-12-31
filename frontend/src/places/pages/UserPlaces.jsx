import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Sky scraper",
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/11/06/21/06/empire-state-building-6774393_1280.jpg",
    address: "20 W 34th St., New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "Sky scraper",
    imageUrl: "https://media.timeout.com/images/101705309/1920/1080/image.webp",
    address: "20 W 34th St., New York, NY 10001, Estados Unidos",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
