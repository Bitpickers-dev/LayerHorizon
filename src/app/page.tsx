"use client";

import { useState } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import styles from "./Styles/page.module.css";
import Chain from "./components/Chains/Chain";
import ChainSelector from "./components/Chains/ChainSelector";
import Icon from "./components/Icon";
import dummyBlockData from "./dummy_api/BlockData";

const Wrapper = styled.div`
  padding: 12px;
`;

const Header = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Home = () => {
  //TODO:pass the selectedChain to the Chain component
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);
  const [numberOfChain, setNumberOfChain] = useState(1); //Ethereumは常に存在するので1から始める

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
    setNumberOfChain(numberOfChain + chain.length);
  };

  return (
    <main className={styles.main}>
      <Wrapper>
        <Header>
          <Icon />
          <ChainSelector onSelectChain={handleSelectChain} />
        </Header>
        <Chain chain={selectedChain} ethBlockData={dummyBlockData} />
      </Wrapper>
    </main>
  );
};

export default Home;
