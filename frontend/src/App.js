import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import FruitsList from "./components/FruitsList";
import Fruit from "./components/Fruit";
// import logo from './logo.svg';
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="App-header">
          <FruitsList />
          <Fruit id="5efacfb151d4c30530048053" />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
