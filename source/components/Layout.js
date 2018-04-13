import React, { Component } from "react";
import styled from "styled-components";

const RootContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
const Container = styled.div`
    width: 600px;
`;
const Header = styled.header`
    padding: 10px 0px;
    width: 100%;
    text-align: center;
`;
const Main = styled.main`
    width: 100%;
`;

export default () => (
    <RootContainer>
        <Container>
            <Header>
                <h1>Sample</h1>
            </Header>
            <Main>
                {this.props.children}
            </Main>
        </Container>
    </RootContainer>
);
