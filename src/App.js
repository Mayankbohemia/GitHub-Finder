import "./App.css";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import { Container } from "@chakra-ui/react";

function App() {
  return <Container >
    <NavBar/>
    <Users/>
  </Container>;
}

export default App;
