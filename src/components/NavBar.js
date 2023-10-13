import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const LeftNavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: 5%;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-left: 2%;
`;

const RightNavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 5%;
`;

const CartIcon = styled.span`
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

const UserName = styled.div`
  color: white;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LeftNavItems>
          <Logo>Reeco</Logo>
          <NavItem href="#">Store</NavItem>
          <NavItem href="#">Orders</NavItem>
          <NavItem href="#">Analytics</NavItem>
        </LeftNavItems>
        <RightNavItems>
          <CartIcon>🛒</CartIcon>
          <UserName>
            Hello, James <span>&#129171;</span>
          </UserName>
        </RightNavItems>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
