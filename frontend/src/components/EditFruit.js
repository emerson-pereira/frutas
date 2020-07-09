import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useParams, Link, useHistory } from "react-router-dom";
import { GET_FRUIT_BY_ID } from "./Fruit";

const UPDATE_FRUIT = gql`
  mutation UpdateFruit(
    $id: String!
    $name: String
    $sugar: String
    $calories: String
  ) {
    updateFruit(
      id: $id
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

const EditFruit = () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_FRUIT_BY_ID, {
    variables: { id },
  });
  const [updateFruit, { error: mutationError }] = useMutation(UPDATE_FRUIT, {
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

          updateFruit({
            variables: {
              id: data.fruit.id,
              name: nameInput.value,
              sugar: sugarInput.value,
              calories: caloriesInput.value,
            },
          });
        }}
      >
        <p>
          <label>
            Fruta
            <br />
            <input
              type="text"
              name="name"
              defaultValue={data.fruit.name}
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
              defaultValue={data.fruit.nutritions.sugar}
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
              defaultValue={data.fruit.nutritions.calories}
              ref={(node) => {
                caloriesInput = node;
              }}
            />
          </label>
        </p>
        <p className="App-close-btn">
          <Link to="/">
            <button type="button">✖</button>
          </Link>
        </p>
        <p>
          <button className="App-btn" type="submit">
            Salvar
          </button>
        </p>
      </form>
      {mutationError && <p>Error :( Please try again</p>}
    </div>
  );
};

export default EditFruit;
