"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import arbitrum_logo from "public/img/chain_logo/arbitrum.svg";
import ethereum_logo from "public/img/chain_logo/ethereum.svg";
import optimism_logo from "public/img/chain_logo/optimism.svg";

const Container = styled.div`
  width: 200px;
  padding: 8px 16px;
  padding-top: 16px;
  border-radius: 16px;
  background-color: #fefefe;
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
  font-size: 12px;
  line-height: 24px;
`;

const Block = () => {
  return (
    <Container>
      <Header>
        <Image alt="ethereum" height={40} src={ethereum_logo} width={40} />
        <div>
          <EthereumBlockNumber>16944</EthereumBlockNumber>
          <EthereumBlockAge>3 days ago</EthereumBlockAge>
        </div>
      </Header>
      <L2BlockContainer>
        <L2Block>
          <Image alt="optimism" height={25} src={optimism_logo} width={25} />
          <NumberOfBlocks>100</NumberOfBlocks>
        </L2Block>
        <L2Block>
          <Image alt="arbitrum" height={25} src={arbitrum_logo} width={25} />
          <NumberOfBlocks>100</NumberOfBlocks>
        </L2Block>
      </L2BlockContainer>
    </Container>
  );
};

export default Block;
