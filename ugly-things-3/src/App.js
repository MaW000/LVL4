import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import {ListContextProvider} from './components/ListContext'
function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Form></Form>
        <List></List>
        </ListContextProvider>
    </div>
  );
}

export default App;
