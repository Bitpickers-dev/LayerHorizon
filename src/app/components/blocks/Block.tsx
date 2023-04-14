"use client"

import styled from "@emotion/styled";
import Image from "next/image";

import ethereum_logo from "public/img/chain_logo/ethereum.svg"
import optimism_logo from "public/img/chain_logo/optimism.svg"
import arbitrum_logo from "public/img/chain_logo/arbitrum.svg"

const Container = styled.div`
    width: 200px;
    padding: 8px 16px;
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

const L2Block = styled.div`
    display: flex;
    height: 40px;
    padding: 0 16px;
    border-radius: 20px;
    background-color: #F6F6F6;
`

const L2ChainName = styled.div`
    line-height: 40px;
    font-size: 12px;
`

const NumberOfBlocks = styled.div`
    min-width: 24px;
    height: 24px;
    border-radius: 10px;
    background-color: #EBEBEA;
`

const Block = () => {
    return(
        <Container>
            <Header>
                <Image src={ethereum_logo} alt="ethereum" width={35} height={35}/>
                <div>
                    <EthereumBlockNumber>16944</EthereumBlockNumber>
                    <EthereumBlockAge>3 days ago</EthereumBlockAge>
                </div>
            </Header>
            <div>
                <L2Block>
                    <Image src={optimism_logo} alt="optimism" width={25} height={25}/>
                    <L2ChainName>Optimism</L2ChainName>
                    <NumberOfBlocks>100</NumberOfBlocks>
                </L2Block>
            </div>
        </Container>
    )
}

export default Block;