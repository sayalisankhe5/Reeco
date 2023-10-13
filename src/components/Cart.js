import React, { useState } from "react";
import styled from "styled-components";

import { OrderData } from "../data/OrderData";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  margin: 2% 6%;
  padding: 20px;
  border: 2px solid #ddd;
  max-width: 100vw;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25% 2%;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px;
  width: 35%;
`;
const InputBar = styled.input`
  border: none;
  margin-left: 5px;
  width: 95%;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.span`
  display: inline-block;
  fill: gray;
  height: 24px;
  line-height: 24px;
  position: relative;
  width: 24px;
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const AddButton = styled.button`
  background-color: white;
  color: green;
  border: 1px solid green;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
`;

const Button = styled.button`
  color: green;
  border: none;
  cursor: pointer;
  background: transparent;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  padding: 0.25% 2%;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
  overflow-x: auto;
`;

const TableHeader = styled.th`
  padding: 10px;
  font-weight: bold;
  color: #777;
`;

const Cart = () => {
  const cartItems = useSelector((_state) => _state.cart.cartItems);

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container>
      <TopSection>
        <SearchBar>
          <InputBar
            type="text"
            placeholder="Search..."
            onChange={handleSearchInput}
          />
          <SearchIcon>
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </SearchIcon>
        </SearchBar>
        <ButtonContainer>
          <AddButton>Add Item</AddButton>
          <Button>
            <span>🖨️</span>
          </Button>
        </ButtonContainer>
      </TopSection>
      <Table>
        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>Product Name</TableHeader>
          <TableHeader>Brand</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Total</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
        </TableRow>
        {cartItems.map((p) => {
          return <CartItem key={p.id} product={p} />;
        })}
      </Table>
    </Container>
  );
};

export default Cart;
