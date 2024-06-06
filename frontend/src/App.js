import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header/>
        <main>
          <Container>
            <h1>Welcome to Pawsome Shop</h1>
          </Container>
        </main>
    </>

  );
}

export default App