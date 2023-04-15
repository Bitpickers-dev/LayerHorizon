import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";

import { MultiValue } from "react-select";

import { getEthBlock } from "@/api/getEthBlock";

import { getOptBatch } from "@/api/getOptBatch";

import Block from "@/app/components/Blocks/Block";
import { BlockContext } from "@/app/hooks/useBlockContext";

import BlockProps from "@/types/BlockProps";
import Chain from "@/types/ChainData";

import ChainOption from "@/types/ChainType";

import BlockContainer from "../Blocks/BlockContainer";

const BlocksContainer = styled.div`
  display: flex;
  margin: 32px 0;
`;

const BlockWrapper = styled.div`
  margin: 0 16px;
`;

type ChainProps = {
  blocks: BlockProps[];
  selectedChain: MultiValue<ChainOption>;
};

//選択されたチェーンを表示する
const Chain = (props: ChainProps) => {
  const [activeBlock, setActiveBlock] = useState<number>(0);
  const [blockContainerProps, setBlockContainerProps] = useState<Chain[]>([]);
  console.log("props.selectedChain=", props.selectedChain)

  console.log(`Object.values(props.selectedChain).some(chain => chain.value === "Aribitrum")=`,Object.values(props.selectedChain).some(chain => chain.value === "Aribitrum"))

  const chains: Chain[] = []

  const chainSelectHandler = async () => {
    if (Object.values(props.selectedChain).some(chain => chain.value === "Aribitrum")) {
      console.log("arbitrum is selected")

    }
    if (Object.values(props.selectedChain).some(chain => chain.value === "Optimism")) {
      console.log("optimism is selected")
      const optBlocks = await getOptBatch(activeBlock.toString(16));
      chains.push({
        blocks: optBlocks,
        chain_name: 'optimism'
      });
    }
  }

  useEffect(() => {
    const requestBlockContainerProps = async () => {

      const ethBlockResponse = await getEthBlock(activeBlock.toString(16));
      chains.push({
        blocks: [ethBlockResponse],
        chain_name:'ethreum'
      });

      const arbBlocks = await getArbBatch(activeBlock.toString(16));
      const optBlocks = await getOptBatch(activeBlock.toString(16));
      const ethBlocks = [await getEthBlock(activeBlock.toString(16))];

      const eth: Chain = {
        blocks: ethBlocks,
        chain_name: "ethreum",
      };

      const arb: Chain = {
        blocks: arbBlocks,
        chain_name: "arbitrum",
      };

      const opt: Chain = {
        blocks: optBlocks,
        chain_name: "optimism",
      };

      setBlockContainerProps([eth, arb, opt]);
    };

    requestBlockContainerProps();
  }, [activeBlock]);
  return (
    <BlockContext.Provider value={{ activeBlock, setActiveBlock }}>
      <BlocksContainer>
        <BlockWrapper>
          {props.blocks.map((block) => {
            return <Block key={block.number} l2={block.l2} number={block.number} />;
          })}
        </BlockWrapper>
      </BlocksContainer>
      <BlockContainer chains={blockContainerProps} />
    </BlockContext.Provider>
  );
};

export default Chain;
