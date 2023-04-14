
import styled from "@emotion/styled"

import Block from "./Block"

const BlocksContainer = styled.div`
    display: flex;
`

const BlockWrapper = styled.div`
    margin: 0 16px;
`

const Chain = () => {

    let blocks = []
    for(let i = 0;i < 6;i++){
        blocks.push(i)
    }

    return(
        <BlocksContainer>
            {
                blocks.map(block => {
                    return <BlockWrapper><Block/></BlockWrapper>;
                })
            }
        </BlocksContainer>
    )
}

export default Chain
