import React, { useState } from "react";
import styled from "styled-components";

import { OrderData } from "../data/OrderData";
import CartItem from "./CartItem";

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
`;
const StyledInput = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.span`
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
`;

const Cart = () => {
  return (
    <Container>
      <TopSection>
        <SearchBar>
          <StyledInput type="text" placeholder="Search..." />
          <SearchIcon>🔍</SearchIcon>
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
          <TableHeader>Name</TableHeader>
          <TableHeader>Brand</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Total</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
        </TableRow>
        {OrderData.products.map((p) => {
          return <CartItem key={p.id} product={p} />;
        })}
      </Table>
    </Container>
  );
};

export default Cart;
