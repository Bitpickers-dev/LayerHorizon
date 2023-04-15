"use client";

import { useState, useEffect } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import { getArbBatch } from "@/api/getArbBatch";
import { getEthList } from "@/api/getEthList";
import { getOptBatch } from "@/api/getOptBatch";
import { LogoContext, DefaultLogo } from "@/app/hooks/useLogoContext";
import BlockProps from "@/types/BlockProps";
import ChainOption from "@/types/ChainType";

import styles from "./Styles/page.module.css";
import Chain from "./components/Chains/Chain";
import ChainSelector from "./components/Chains/ChainSelector";
import Icon from "./components/Icon";

const Wrapper = styled.div`
  padding: 12px;
`;

const Header = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Home = () => {
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);
  const [numberOfChain, setNumberOfChain] = useState(1); // Ethereumは常に存在するので1から始める
  const [blockProps, setBlockProps] = useState<BlockProps[]>([]);

  useEffect(() => {

    const requestChainProps = async () => {
      const response = await getEthList(6);

      const blocks: BlockProps[] = await Promise.all(response.map(async (block) => {
        const l2:{count: number, name: string}[] = [];
        if (Object.values(selectedChain).some(chain => chain.value === "Arbitrum")) {
          const arb_count = (await getArbBatch(block.number)).length;
          console.log("arb_count=", arb_count)
          l2.push({
            count: arb_count,
            name: "arbitrum"
          })
        }
        if (Object.values(selectedChain).some(chain => chain.value === "Optimism")) {
          const opt_count = (await getOptBatch(block.number)).length;
          console.log("opt_count=", opt_count)
          l2.push({
            count: opt_count,
            name: "optimism"
          })
        }
        return {
          l2: l2,
          number: parseInt(block.number, 16),
          timestamp: block.timestamp
        };
      }));
      setBlockProps(blocks.reverse());
    };

    requestChainProps();
  }, [selectedChain]);

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
    setNumberOfChain(numberOfChain + chain.length);
  };

  return (
    <main className={styles.main}>
      <LogoContext.Provider value={DefaultLogo}>
        <Wrapper>
          <Header>
            <Icon />
            <ChainSelector onSelectChain={handleSelectChain} />
          </Header>
          <Chain blocks={blockProps} selectedChain={selectedChain} />
        </Wrapper>
      </LogoContext.Provider>
    </main>
  );
};

export default Home;
