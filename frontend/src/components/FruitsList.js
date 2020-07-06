import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const FRUITS = gql`
  {
    fruits {
      id
      name
    }
  }
`;

const FruitsList = () => {
  const { loading, error, data } = useQuery(FRUITS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.fruits &&
        data.fruits.map(({ name, id }) => <li key={id}>{name}</li>)}
    </ul>
  );
};

export default FruitsList;
