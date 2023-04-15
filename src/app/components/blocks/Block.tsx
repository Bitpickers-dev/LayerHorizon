"use client";

import { useContext } from "react";

import styled from "@emotion/styled";
import Image from "next/image";

import EthereumLogo from "public/img/chain_logo/ethereum.svg";

import { BlockContext } from "@/app/hooks/useBlockContext";
import EthBlockData from "@/types/EthBlockData";

import ArbitrumLogo from "../../public/img/chain_logos/arbitrum.svg";
import OptimismLogo from "../../public/img/chain_logos/optimism.svg";

const Container = styled.button<BlockProps>`
  width: 200px;
  padding: 8px 16px;
  padding-top: 16px;
  border-radius: 16px;
  background-color: #fefefe;
  margin-left: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const EthereumBlockNumber = styled.p`
  text-align: right;
  font-size: 15px;
  color: #818181;
`;

const EthereumBlockAge = styled.p`
  text-align: right;
  font-size: 12px;
  color: #818181;
`;

const L2BlockContainer = styled.div`
  margin: 8px 0;
`;

const L2Block = styled.div`
  display: flex;
  height: 40px;
  padding: 0 8px;
  margin: 8px 0;
  border-radius: 20px;
  background-color: #f6f6f6;
  justify-content: space-between;
  align-items: center;
`;

const L2ChainName = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const NumberOfBlocks = styled.div`
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border-radius: 12px;
  background-color: #ebebea;
  font-size: 12px;
  line-height: 24px;
`;

type BlockProps = {
  blockData: EthBlockData;
};

const Block = (props: BlockProps) => {
  const { activeBlock, setActiveBlock } = useContext(BlockContext);
  const isBlockVisible = activeBlock;
  const toggleBlockDetail = () => {
    if (isBlockVisible) {
      setActiveBlock(0);
    } else {
      setActiveBlock(props.blockData.block_number);
    }
  };
  return (
    <Container
      blockData={{
        block_number: 0,
        l2_chains: [],
      }}
      onClick={toggleBlockDetail}
    >
      <Header>
        <Image alt="ethereum" height={40} src={EthereumLogo} width={40} />
        <div>
          <EthereumBlockNumber>{props.blockData.block_number}</EthereumBlockNumber>
          <EthereumBlockAge>TODO display age</EthereumBlockAge>
        </div>
      </Header>
      <L2BlockContainer>
        <L2Block>
          <Image alt={"arbitrum"} height={25} src={ArbitrumLogo} width={25} />
          <L2ChainName>{"hoge"}</L2ChainName>
          <NumberOfBlocks>{12}</NumberOfBlocks>
        </L2Block>{" "}
        <L2Block>
          <Image alt={"arbitrum"} height={25} src={OptimismLogo} width={25} />
          <L2ChainName>{"hoge"}</L2ChainName>
          <NumberOfBlocks>{12}</NumberOfBlocks>
        </L2Block>{" "}
      </L2BlockContainer>
    </Container>
  );
};

export default Block;
