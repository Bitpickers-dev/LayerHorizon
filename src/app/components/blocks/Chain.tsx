
import EthBlockData from "@/types/EthBlockData"
import styled from "@emotion/styled"

import Block from "./Block"

const BlocksContainer = styled.div`
    display: flex;
    margin: 32px 0;
`

const BlockWrapper = styled.div`
    margin: 0 16px;
`

type ChainProps = {
    blockData: EthBlockData[],
    clickBlockHandler: (blockData: EthBlockData) => void
}

const Chain = (props: ChainProps) => {

    return(
        <BlocksContainer>
            {
                props.blockData.map((block) => {
                    return <BlockWrapper><Block onClick={props.clickBlockHandler} blockData={block}/></BlockWrapper>;
                })
            }
        </BlocksContainer>
    )
}

export default Chain
