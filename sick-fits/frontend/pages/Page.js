import React from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import styled from "styled-components";

const MyButton = styled.button`
  background: red;
  font-size: 100px;
  span {
    font-size: 200px;
  }
`;

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Click me
          <span>Something</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}
