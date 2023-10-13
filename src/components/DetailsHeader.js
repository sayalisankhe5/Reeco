import React from "react";
import styled from "styled-components";
import { OrderData } from "../data/OrderData";

const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #ddd;
  margin: 2% 6%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
`;

const ContentItem = styled.div`
  padding: 0.25% 2%;
  border-right: 1px solid #ddd;
  text-align: left;
  width: 16%;
  &:last-child {
    border-right: none;
  }
`;

const Heading = styled.h3`
  font-size: 14px;
  color: #777;
`;

const Data = styled.div`
  font-weight: bold;
  color: #000;
`;

const DetailsHeader = () => {
  return (
    <Container>
      {Object.entries(OrderData.orderDetails).map(([key, value]) => {
        return (
          <ContentItem key={key}>
            <Heading>{key}</Heading>
            <Data>{value}</Data>
          </ContentItem>
        );
      })}
    </Container>
  );
};

export default DetailsHeader;
