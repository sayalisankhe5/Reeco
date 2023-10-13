import styled from "styled-components";
import productImage from "../assets/images/avocadohass.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../redux/slice/cartSlice";

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  overflow-x: auto;
`;
const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  word-wrap: break-word;
`;

const StatusTableCell = styled.td`
  background-color: #eaeaea;
  padding: 10px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const StatusButton = styled.button`
  background-color: ${(props) =>
    props.orderstatus === "Approved"
      ? "#3fd833"
      : props.orderstatus === "Missing"
      ? "#f66d44"
      : "#db2114"};
  color: white;
  border: 1px solid
    ${(props) =>
      props.orderstatus === "Approved"
        ? "#3fd833"
        : props.orderstatus === ("Missing" || "Missing - Urgent")
        ? "#f66d44"
        : "#db2114"};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ApprovedButton = styled.span`
  color: ${(props) => (props.orderstatus === "Approved" ? "#3fd833" : "gray")};
  border: none;
  cursor: pointer;
  background: transparent;
`;
const MissingButton = styled.span`
  color: ${(props) =>
    (props.orderstatus === "Missing") |
    (props.orderstatus === "Missing - Urgent")
      ? "#ff0000"
      : "gray"};
  border: none;
  cursor: pointer;
  background: transparent;
`;
const EditButton = styled.span`
  color: gray;
  border: none;
  cursor: pointer;
  background: transparent;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const ModalTitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const CartItem = ({ product }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((_state) => _state.cart.cartItems);
  const currentCartItem = cartItems.find((c) => c.id == product.id);
  const handleRemoveClick = () => {
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    dispatch(changeStatus({ ...product, status: "Missing - Urgent" }));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    dispatch(changeStatus({ ...product, status: "Missing" }));
    setIsModalVisible(false);
  };
  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleApproveClick = () => {
    dispatch(changeStatus({ ...product, status: "Approved" }));
  };
  return (
    <TableRow>
      <TableCell>
        <Image src={productImage} alt="Product" />
      </TableCell>
      <TableCell>{product.productName}</TableCell>
      <TableCell>{product.brand}</TableCell>
      <TableCell>${product.price} / 6+1LB</TableCell>
      <TableCell>{product.quantity} X 6+1LB</TableCell>
      <TableCell>${product.price * product.quantity}</TableCell>
      <StatusTableCell>
        {currentCartItem.status !== "" && (
          <StatusButton orderstatus={currentCartItem.status}>
            {currentCartItem.status}
          </StatusButton>
        )}
      </StatusTableCell>
      <StatusTableCell onClick={handleApproveClick}>
        <ApprovedButton orderstatus={currentCartItem.status}>
          &#10004;
        </ApprovedButton>
      </StatusTableCell>
      <StatusTableCell onClick={handleRemoveClick}>
        <MissingButton orderstatus={currentCartItem.status}>
          &#10006;
        </MissingButton>
      </StatusTableCell>
      <StatusTableCell>
        <EditButton>Edit</EditButton>
      </StatusTableCell>
      {isModalVisible && (
        <ModalOverlay onClick={handleClose}>
          <ModalContainer>
            <ModalTitleBar>
              <h5>Missing product</h5>
              <ModalCloseButton onClick={handleClose}>X</ModalCloseButton>
            </ModalTitleBar>
            <p>is {product.productName} urgent?</p>
            <ModalButtons>
              <ActionButton onClick={handleCancel}>No</ActionButton>
              <ActionButton onClick={handleConfirm}>Yes</ActionButton>
            </ModalButtons>
          </ModalContainer>
        </ModalOverlay>
      )}
    </TableRow>
  );
};

export default CartItem;
