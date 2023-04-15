"use client";

import { useContext } from "react";

import styled from "@emotion/styled";
import Image from "next/image";

import { BlockContext } from "@/app/hooks/useBlockContext";
import EthBlockData from "@/types/EthBlockData";

import EthereumLogo from "public/img/chain_logo/ethereum.svg";
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
        block_number: props.blockData.block_number,
        l2_chains: props.blockData.l2_chains,
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
        {
          props.blockData.l2_chains.map(l2Chain => {
            return (
              <L2Block key={l2Chain.chainName}>
                <Image alt={l2Chain.chainName} height={25} src={l2Chain.chainLogo} width={25} />
                <L2ChainName>{l2Chain.chainName}</L2ChainName>
                <NumberOfBlocks>{l2Chain.blocks.length}</NumberOfBlocks>
              </L2Block>
            )
          })
        }
      </L2BlockContainer>
    </Container>
  );
};

export default Block;
