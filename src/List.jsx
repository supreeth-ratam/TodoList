import React from "react";
import styled from "styled-components";

function List(props) {
  return (
    <Item>
      <li>{props.list}</li>
      <Button
        onClick={(event) => {
          event.preventDefault();
          props.handleClick(props.index);
        }}
      >
        Completed
      </Button>
    </Item>
  );
}
export default List;
const Item = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  min-width: 400px;
  max-width: 600px;
  justify-content: space-between;
  margin: 10px;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  transition: border 0.15s, transform 0.15s;

  &:hover {
    /* box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset; */
    transform: translateY(-2px);
    border: 1px solid grey;
  }
`;
const Button = styled.button`
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 30px;
  outline: 0;
  padding: 5px 7px;
  margin: 0 10px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover,
  &:active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }

  &:active {
    opacity: 0.5;
  }
`;
