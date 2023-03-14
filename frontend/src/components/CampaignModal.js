import React, { useState } from "react";
import { Modal, Input, InputNumber } from "antd";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .ant-modal-body {
    column-gap: 40px;
  }
`;

export const CampaignModal = (props) => {
  const { open, setOpen, selectCampaign, submitHandler } = props;
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const modalSubmitHandler = () => {
    if (!/^[a-zA-Z0-9_]+$/.test(name)) {
      alert("Please Enter Correct Name");
      setName("");
      return;
    }
    if (!(amount > 0)) {
      alert("Please Enter Valid Amount");
      setAmount(0);
      return;
    }
    submitHandler(name, amount, selectCampaign?.id);
  };

  return (
    <StyledModal
      title={`Donation For ${selectCampaign?.name} Campaign`}
      centered
      open={open}
      onOk={modalSubmitHandler}
      onCancel={() => setOpen({})}
      width={1000}
      okText="Submit"
      getContainer=""
      wrapClassName="donation-modal"
    >
      <div>
        <label>Name</label>
        <Input
          placeholder="Basic usage"
          autoFocus
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <div>Amount</div>
        <InputNumber
          min={0}
          max={selectCampaign?.amount}
          defaultValue={0}
          value={amount}
          onChange={(e) => setAmount(e)}
        />
      </div>
    </StyledModal>
  );
};
