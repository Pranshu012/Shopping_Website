import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
      <>
        <Header/>
        <Container>
        <main className="py-3">
          <HomeScreen/>
        </main>
        </Container>
        <Footer/>
      </>
  );
}

export default App;
