import React from "react";
import styled from "styled-components";
import { OrderData } from "../data/OrderData";

const HeaderContainer = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #333;
  margin-left: 5%;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const BackButton = styled.button`
  background-color: white;
  color: green;
  border: 1px solid green;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
`;

const OrderId = styled.span`
  text-decoration: underline;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Breadcrumb>
        Orders <span>&gt;</span> <OrderId>Order {OrderData.id}</OrderId>
      </Breadcrumb>
      <MainHeader>
        <Heading>Order {OrderData.id}</Heading>
        <ButtonContainer>
          <BackButton>Back</BackButton>
          <Button>Approve Order</Button>
        </ButtonContainer>
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
