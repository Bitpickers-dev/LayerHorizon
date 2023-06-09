"use client";

import { useContext } from "react";

import styled from "@emotion/styled";
import dayjs from "dayjs";
import Image from "next/image";

import DummyLogo from "public/img/chain_logo/dummy.svg";
import EthereumLogo from "public/img/chain_logo/ethereum.svg";

import { BlockContext } from "@/app/hooks/useBlockContext";
import { LogoContext } from "@/app/hooks/useLogoContext";
import BlockProps from "@/types/BlockProps";

const Container = styled.button`
  width: 200px;
  padding: 8px 16px;
  padding-top: 16px;
  border-radius: 16px;
  background-color: #fefefe;
  margin: 0 8px;
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

const NumberOfBlocks = styled.div`
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border-radius: 12px;
  background-color: #ebebea;
  color: black;
  font-size: 12px;
  line-height: 24px;
`;

const Block = (props: BlockProps) => {
  const { activeBlock, setActiveBlock } = useContext(BlockContext);
  const { logos } = useContext(LogoContext);
  const isBlockVisible = activeBlock;

  const displayBlockDetail = () => {
    setActiveBlock(props.number);
  };
  return (
    <Container onClick={displayBlockDetail}>
      <Header>
        <Image alt="ethereum" height={40} src={EthereumLogo} width={40} />
        <div>
          <EthereumBlockNumber>{props.number}</EthereumBlockNumber>
          <EthereumBlockAge>{dayjs.unix(props.timestamp).fromNow()}</EthereumBlockAge>
        </div>
      </Header>
      <L2BlockContainer>
        {props.l2.map((l2) => {
          const logo = logos.find((logo) => logo.name === l2.name)?.logo ?? DummyLogo;

          return (
            <L2Block key={l2.name}>
              <Image alt={l2.name} height={25} src={logo} width={25} />
              <NumberOfBlocks>{l2.count}</NumberOfBlocks>
            </L2Block>
          );
        })}
      </L2BlockContainer>
    </Container>
  );
};

export default Block;
