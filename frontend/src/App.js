import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "./App.css";
import Routes from "./routes";

const client = new ApolloClient({
  uri: "http://localhost:4000",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="App-header">
          <h1>Frutas</h1>
        </div>
        <div className="App-body">
          <Routes />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
