import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

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
    <>
      <ul>
        {data.fruits &&
          data.fruits.map(({ name, id }) => (
            <li key={id}>
              <span>{name}</span>
              <div>
                <Link className="App-inline-link" to={`/fruits/${id}`}>
                  <span role="img" aria-label="Visualizar">
                    👀
                  </span>
                </Link>
                <Link className="App-inline-link" to={`/fruits/${id}/edit`}>
                  <span role="img" aria-label="Editar">
                    ✏️
                  </span>
                </Link>
                <Link className="App-inline-link" to={`/fruits/${id}/delete`}>
                  <span role="img" aria-label="Excluir">
                    ❌
                  </span>
                </Link>
              </div>
            </li>
          ))}
      </ul>

      <Link to={`/fruits/create`}>
        <button>Nova Fruta</button>
      </Link>
    </>
  );
};

export default FruitsList;
