"use client";

import { useState } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import ChainSelector from "./components/Chains/ChainSelector";
import Icon from "./components/Icon";
import Chain from "./components/blocks/Chain";
import dummyBlockData from "./dummy_api/BlockData";
import styles from "./Styles/page.module.css";

const Wrapper = styled.div`
  padding: 12px;
`;

const Header = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Home = () => {
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);
  const [numberOfChain, setNumberOfChain] = useState(1);

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
    setNumberOfChain(numberOfChain + 1); //TODO:chainが消された場合は-1にする
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
