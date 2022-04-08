import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Container} from "react-bootstrap";

function App() {
  return (
      <>
        <Header/>
        <Container>
        <main className="py-3">
          <h1>Welcome to Proshop</h1>
        </main>
        </Container>
        <Footer/>
      </>
  );
}

export default App;
