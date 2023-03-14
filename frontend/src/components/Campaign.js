/** @format */

import React, { useState, useEffect } from 'react';
import { Divider, List } from 'antd';
import { CampaignModal } from './CampaignModal';
import { donationSubmission, getAllCampaignList } from '../actions';
import styled from 'styled-components';

const Wrapper = styled.div`
  .campaign-list {
    color: red;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Campaign = ({}) => {
  const [open, setOpen] = useState(false);
  const [selectCampaign, setSelectCampaign] = useState({});

  const [allCampaign, setAllCampaign] = useState([]);
  useEffect(() => {
    getAllCampaignList().then((response) => {
      setAllCampaign(response);
    });
  }, []);

  const changeModalState = (item) => {
    setSelectCampaign(!open ? item : {});
    setOpen(!open);
  };

  const submitHandler = (name, amount, id) => {
    donationSubmission({ name, amount, campaignId: id }).then((res) => {
      if (res) {
        setAllCampaign((current) => current.filter((obj) => obj.id !== id));
      }
    });
    setOpen(false);
  };
  return (
    <Wrapper>
      <Divider orientation="centre">Active Campaigns</Divider>
      <List
        header={null}
        footer={null}
        bordered
        className="campaign-list"
        dataSource={allCampaign}
        renderItem={(item) => (
          <List.Item onClick={() => changeModalState(item)}>
            {item.name}
          </List.Item>
        )}
      />
      {open && (
        <CampaignModal
          open={open}
          setOpen={changeModalState}
          selectCampaign={selectCampaign}
          submitHandler={submitHandler}
        />
      )}
    </Wrapper>
  );
};

export default Campaign;
