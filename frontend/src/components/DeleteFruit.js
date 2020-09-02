import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, Link, useHistory } from "react-router-dom";
import { GET_FRUITS } from "./Fruits";
import { GET_FRUIT_BY_ID } from "./Fruit";

const DELETE_FRUIT = gql`
  mutation DeleteFruit($id: String) {
    deleteFruit(id: $id) {
      id
      name
      nutritions {
        calories
        sugar
      }
    }
  }
`;

const DeleteFruit = () => {
  const history = useHistory();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_FRUIT_BY_ID, {
    variables: { id },
  });

  const [deleteFruit, { error: mutationError }] = useMutation(DELETE_FRUIT, {
    update(cache) {
      const { fruits } = cache.readQuery({ query: GET_FRUITS });

      const deletedIndex = fruits.findIndex((fruit) => fruit.id === id);
      const updatedCache = [
        ...fruits.slice(0, deletedIndex),
        ...fruits.slice(deletedIndex + 1, fruits.length),
      ];
      cache.writeQuery({
        query: GET_FRUITS,
        data: {
          fruits: updatedCache,
        },
      });
    },
    onCompleted() {
      history.push(`/`);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error :(</p>;

  return (
    <div>
      <form
        className="App-viewbox"
        onSubmit={(e) => {
          e.preventDefault();

          deleteFruit({
            variables: { id },
          });
        }}
      >
        <p>
          Excluir <strong>{data.fruit.name}</strong>?
        </p>
        <p className="App-close-btn">
          <Link to="/">
            <button>X</button>
          </Link>
        </p>
        <p>
          <button className="App-btn" type="submit">
            Excluir
          </button>
        </p>
      </form>
    </div>
  );
};

export default DeleteFruit;
