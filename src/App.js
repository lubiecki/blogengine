import React from 'react';
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  & {
    width: 1440px;
    margin: 10px 0;
    padding: 20px;
    min-height: 100vh;
    box-sizing: border-box;
  }
`

function App() {
    return (
        <Container>
            <Header/>
        </Container>
    );
}

export default App;
