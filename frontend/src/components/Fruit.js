import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./Fruit.css";

const GET_FRUIT_BY_ID = gql`
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

const Fruit = ({ id }) => {
  const { loading, error, data } = useQuery(GET_FRUIT_BY_ID, {
    variables: { id },
  });
  const [
    updateFruit,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_FRUIT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let nameInput;
  let sugarInput;
  let caloriesInput;

  return (
    <div>
      <form
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
        <button type="submit">Salvar</button>
      </form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </div>
  );
};

export default Fruit;
