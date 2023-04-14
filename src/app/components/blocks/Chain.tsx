import styled from "@emotion/styled";

import Block from "./Block";

const BlocksContainer = styled.div`
  display: flex;
  margin: 32px 0;
`;

const BlockWrapper = styled.div`
  margin: 0 16px;
`;

const Chain = () => {
  const blocks = [];
  for (let i = 0; i < 6; i++) {
    blocks.push(i);
  }

  return (
    <BlocksContainer>
      {blocks.map((block) => {
        return (
          <BlockWrapper key={block}>
            <Block key={block} />
          </BlockWrapper>
        );
      })}
    </BlocksContainer>
  );
};

export default Chain;
