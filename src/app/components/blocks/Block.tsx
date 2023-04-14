"use client"

import styled from "@emotion/styled";
import Image from "next/image";

import ethereum_logo from "public/img/chain_logo/ethereum.svg"
import optimism_logo from "public/img/chain_logo/optimism.svg"
import arbitrum_logo from "public/img/chain_logo/arbitrum.svg"

const Container = styled.div`
    width: 200px;
    padding: 8px 16px;
    padding-top: 16px;
    border-radius: 16px;
    background-color: #FEFEFE;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const EthereumBlockNumber = styled.p`
    text-align: right;
    font-size: 15px;
    color: #818181;
`

const EthereumBlockAge = styled.p`
    text-align: right;
    font-size: 12px;
    color: #818181;
`

const L2BlockContainer = styled.div`
    margin: 8px 0;
`

const L2Block = styled.div`
    display: flex;
    height: 40px;
    padding: 0 8px;
    margin: 8px 0;
    border-radius: 20px;
    background-color: #F6F6F6;
    justify-content: space-between;
    align-items: center;
`

const L2ChainName = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
`

const NumberOfBlocks = styled.div`
    min-width: 24px;
    height: 24px;
    padding: 0 8px;
    border-radius: 12px;
    background-color: #EBEBEA;
    font-size: 12px;
    line-height: 24px;
`

const Block = () => {
    return(
        <Container>
            <Header>
                <Image src={ethereum_logo} alt="ethereum" width={40} height={40}/>
                <div>
                    <EthereumBlockNumber>16944</EthereumBlockNumber>
                    <EthereumBlockAge>3 days ago</EthereumBlockAge>
                </div>
            </Header>
            <L2BlockContainer>
                <L2Block>
                    <Image src={optimism_logo} alt="optimism" width={25} height={25}/>
                    <L2ChainName>Optimism</L2ChainName>
                    <NumberOfBlocks>100</NumberOfBlocks>
                </L2Block>
                <L2Block>
                    <Image src={arbitrum_logo} alt="arbitrum" width={25} height={25}/>
                    <L2ChainName>Arbitrum</L2ChainName>
                    <NumberOfBlocks>100</NumberOfBlocks>
                </L2Block>
            </L2BlockContainer>
        </Container>
    )
}

export default Block;