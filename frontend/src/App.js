import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css";
import Routes from "./routes";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
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
