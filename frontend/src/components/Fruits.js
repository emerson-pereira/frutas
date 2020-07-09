import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

export const GET_FRUITS = gql`
  {
    fruits {
      id
      name
    }
  }
`;

const FruitsList = () => {
  const { loading, error, data } = useQuery(GET_FRUITS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <ul>
        {data.fruits &&
          data.fruits.map(({ name, id }) => (
            <li key={id}>
              <span>{name}</span>
              <div className="App-item-actions">
                <Link to={`/fruit/${id}`}>
                  <span role="img" aria-label="Visualizar">
                    👀
                  </span>
                </Link>
                <Link to={`/editFruit/${id}`}>
                  <span role="img" aria-label="Editar">
                    ✏️
                  </span>
                </Link>
                <Link to={`/deleteFruit/${id}`}>
                  <span role="img" aria-label="Excluir">
                    ❌
                  </span>
                </Link>
              </div>
            </li>
          ))}
      </ul>

      <p>
        <Link to="/createFruit">
          <button>Nova Fruta</button>
        </Link>
      </p>
    </>
  );
};

export default FruitsList;
