import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams, Link } from "react-router-dom";

export const GET_FRUIT_BY_ID = gql`
  query GetFruit($id: ID!) {
    fruit(id: $id) {
      id
      name
      nutritions {
        sugar
        calories
      }
    }
  }
`;

const Fruit = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_FRUIT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App-viewbox">
      <p>
        <strong>Fruta: </strong>
        {data.fruit.name}
      </p>
      <p>
        <strong>Açucar: </strong>
        {data.fruit.nutritions.sugar}g
      </p>
      <p>
        <strong>Calorias: </strong>
        {data.fruit.nutritions.calories}kcal
      </p>
      <p className="App-close-btn">
        <Link to="/">
          <button>✖</button>
        </Link>
      </p>
      <p>
        <Link to={`/editFruit/${id}`}>
          <button>Editar</button>
        </Link>
      </p>
    </div>
  );
};

export default Fruit;
