"use client"

import styled from "@emotion/styled";
import Image from "next/image";

import ethereum_logo from "public/img/chain_logo/ethereum.svg"
import optimism_logo from "public/img/chain_logo/optimism.svg"
import arbitrum_logo from "public/img/chain_logo/arbitrum.svg"
import EthBlockData from "@/types/EthBlockData";
import L2ChainData from "@/types/L2ChainData";

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

type BlockProps = {
    onClick: (blockData: EthBlockData) => void
    blockData: EthBlockData
}

const Block = (props: BlockProps) => {

    const renderL2Block = (l2ChainData: L2ChainData) => {
        return(
            <L2Block>
                <Image src={l2ChainData.chainLogo} alt={l2ChainData.chainName} width={25} height={25}/>
                <L2ChainName>{l2ChainData.chainName}</L2ChainName>
                <NumberOfBlocks>{l2ChainData.blocks.length}</NumberOfBlocks>
            </L2Block>
        )
    }

    return(
        <Container onClick={()=>props.onClick(props.blockData)}>
            <Header>
                <Image src={ethereum_logo} alt="ethereum" width={40} height={40}/>
                <div>
                    <EthereumBlockNumber>{props.blockData.blockNumber}</EthereumBlockNumber>
                    <EthereumBlockAge>TODO display age</EthereumBlockAge>
                </div>
            </Header>
            <L2BlockContainer>
                {props.blockData.l2Chains.map(l2ChainData => renderL2Block(l2ChainData))}
            </L2BlockContainer>
        </Container>
    )
}

export default Block;
