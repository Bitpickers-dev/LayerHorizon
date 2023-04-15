"use client"

import { useState, useEffect } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import { getArbBatch } from "@/api/getArbBatch";
import { getEthList } from "@/api/getEthList";
import { getOptBatch } from "@/api/getOptBatch";
import { LogoContext, DefaultLogo} from "@/app/hooks/useLogoContext";
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
      const number_list = response.map(block => block.number);

      const blocks: BlockProps[] = await Promise.all(number_list.map(async number => {
        const arb_count = (await getArbBatch(number)).length;
        const opt_count = (await getOptBatch(number)).length;

        const l2 = [
          {
            count: arb_count,
            name: "arbitrum"
          },
          {
            count: opt_count,
            name: "optimism"
          }
        ];

        return {
          l2: l2,
          number: parseInt(number, 16)
        };
      }));

      setBlockProps(blocks.reverse());
    };

    requestChainProps();
  }, []);

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
          <Chain blocks={blockProps} />
        </Wrapper>
      </LogoContext.Provider>
    </main>
  );
};

export default Home;
