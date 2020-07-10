import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link, useHistory } from "react-router-dom";
import { GET_FRUITS } from "./Fruits";

const CREATE_FRUIT = gql`
  mutation UpdateFruit($name: String!, $sugar: String!, $calories: String!) {
    createFruit(
      fruit: { name: $name, nutritions: { sugar: $sugar, calories: $calories } }
    ) {
      id
      name
      nutritions {
        calories
        sugar
      }
    }
  }
`;

const CreateFruit = () => {
  const history = useHistory();

  const [createFruit, { loading, error }] = useMutation(CREATE_FRUIT, {
    update(cache, { data: { createFruit } }) {
      const { fruits } = cache.readQuery({ query: GET_FRUITS });
      cache.writeQuery({
        query: GET_FRUITS,
        data: { fruits: fruits.concat([createFruit]) },
      });
    },
    onCompleted() {
      history.push(`/`);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let nameInput;
  let sugarInput;
  let caloriesInput;

  return (
    <div>
      <form
        className="App-viewbox"
        onSubmit={(e) => {
          e.preventDefault();

          createFruit({
            variables: {
              name: nameInput.value,
              sugar: sugarInput.value,
              calories: caloriesInput.value,
            },
          });

          nameInput.value = "";
          sugarInput.value = "";
          caloriesInput.value = "";
        }}
      >
        <p>
          <label>
            Fruta
            <br />
            <input
              type="text"
              name="name"
              ref={(node) => {
                nameInput = node;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Açucar (g)
            <br />
            <input
              type="text"
              name="sugar"
              ref={(node) => {
                sugarInput = node;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Calorias
            <br />
            <input
              type="text"
              name="calories"
              ref={(node) => {
                caloriesInput = node;
              }}
            />
          </label>
        </p>
        <p className="App-close-btn">
          <Link to="/">
            <button>✖</button>
          </Link>
        </p>
        <p>
          <button className="App-btn" type="submit">
            Salvar
          </button>
        </p>
      </form>
    </div>
  );
};

export default CreateFruit;
