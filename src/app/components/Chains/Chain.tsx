import React, { useState } from "react";

import styled from "@emotion/styled";


import Block from "@/app/components/Blocks/Block";
import { BlockContext } from "@/app/hooks/useBlockContext";

import BlockProps from "@/types/BlockProps";

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
};

//選択されたチェーンを表示する
const Chain = (props: ChainProps) => {
  const [activeBlock, setActiveBlock] = useState<number>(0);
  return (
    <BlockContext.Provider value={{ activeBlock, setActiveBlock }}>
      <BlocksContainer>
        <BlockWrapper>
          {props.blocks.map((block) => {
            return (
              <Block
                key={block.number}
                l2={block.l2}
                number={block.number}
              />
            );
          })}
        </BlockWrapper>
      </BlocksContainer>
      <BlockContainer chains={
        [
          {
            blocks: [
              {
                count: 5,
                number: "100000000",
                timestamp: 0,
              }
            ],
            chain_name: "ethereum"
          },
          {
            blocks: [
              {
                count: 5,
                number: "100000000",
                timestamp: 0,
              },
              {
                count: 5,
                number: "100000001",
                timestamp: 0,
              },
              {
                count: 5,
                number: "100000002",
                timestamp: 0
              },
              {
                count: 5,
                number: "100000003",
                timestamp: 0,
              }
            ],
            chain_name: "arbitrum"
          },
          {
            blocks: [
              {
                count: 5,
                number: "100000000",
                timestamp: 0,
              },
              {
                count: 5,
                number: "100000001",
                timestamp: 0,
              },
              {
                count: 5,
                number: "100000002",
                timestamp: 0
              },
              {
                count: 5,
                number: "100000003",
                timestamp: 0,
              }
            ],
            chain_name: "optimism"
          }
        ]
      }/>
    </BlockContext.Provider>
  );
};

export default Chain;
