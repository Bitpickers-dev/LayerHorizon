// "use client";

// import { useState } from "react";

// import styled from "@emotion/styled";
// import { MultiValue } from "react-select";

// import ChainOption from "@/types/ChainType";

// import styles from "./Styles/page.module.css";
// import Chain from "./components/Chains/Chain";
// import ChainSelector from "./components/Chains/ChainSelector";
// import Icon from "./components/Icon";
// import dummyBlockData from "./dummy_api/BlockData";

// import { getArbBatch } from "@/api/getArbBatch";
// import { getEthList } from "@/api/getEthList";
// import { getOptBatch } from "@/api/getOptBatch";

// import Block from "@/types/Block";
// import Response from "@/types/Response";
// import BlockProps from "@/types/BlockProps";

// const Wrapper = styled.div`
//   padding: 12px;
// `;

// const Header = styled.div`
//   width: fit-content;
//   margin: 0 auto;
// `;

// const Home = () => {
//   //TODO:pass the selectedChain to the Chain component
//   const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);
//   const [numberOfChain, setNumberOfChain] = useState(1); //Ethereumは常に存在するので1から始める

//   const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
//     setSelectedChain(chain);
//     setNumberOfChain(numberOfChain + chain.length);
//   };

//   const requestChanProps = async (): Promise<BlockProps[]> => {
//     let response = await getEthList(6);
//     console.log(response);
//     let number_list = response.result.map(block => block.number);

//     const blocks: BlockProps[] = [];
//     number_list.forEach(async number => {
//       const arb_count = (await getArbBatch(number)).count;
//       const opt_count = (await getOptBatch(number)).count;

//       const l2 = [
//         {
//           name: "arbitrum",
//           count: arb_count
//         },
//         {
//           name: "optimism",
//           count: opt_count
//         }
//       ]

//       blocks.push(
//         {
//           number: parseInt(number, 16),
//           l2: l2
//         }
//       )

//     });

//     return blocks
//   };

//   return (
//     <main className={styles.main}>
//       <Wrapper>
//         <Header>
//           <Icon />
//           <ChainSelector onSelectChain={handleSelectChain} />
//         </Header>
//         <Chain blocks={requestChanProps()}/>
//       </Wrapper>
//     </main>
//   );
// };

// export default Home;

"use client"

import { useState, useEffect } from "react";

import styled from "@emotion/styled";
import { MultiValue } from "react-select";

import ChainOption from "@/types/ChainType";

import styles from "./Styles/page.module.css";
import Chain from "./components/Chains/Chain";
import ChainSelector from "./components/Chains/ChainSelector";
import Icon from "./components/Icon";
import dummyBlockData from "./dummy_api/BlockData";

import { getArbBatch } from "@/api/getArbBatch";
import { getEthList } from "@/api/getEthList";
import { getOptBatch } from "@/api/getOptBatch";

import Block from "@/types/Block";
import Response from "@/types/Response";
import BlockProps from "@/types/BlockProps";

const Wrapper = styled.div`
  padding: 12px;
`;

const Header = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Home = () => {
  const [selectedChain, setSelectedChain] = useState({} as MultiValue<ChainOption>);
  const [numberOfChain, setNumberOfChain] = useState(1); // Ethereumは常に存在するので1から始める
  const [blockProps, setBlockProps] = useState<BlockProps[]>([]);

  useEffect(() => {
    const requestChanProps = async () => {
      let response = await getEthList(6);
      let number_list = response.result.map(block => block.number);

      const blocks: BlockProps[] = await Promise.all(number_list.map(async number => {
        const arb_count = (await getArbBatch(number)).count;
        const opt_count = (await getOptBatch(number)).count;

        const l2 = [
          {
            name: "arbitrum",
            count: arb_count
          },
          {
            name: "optimism",
            count: opt_count
          }
        ];

        return {
          number: parseInt(number, 16),
          l2: l2
        };
      }));

      setBlockProps(blocks);
    };

    requestChanProps();
  }, []);

  const handleSelectChain = (chain: MultiValue<ChainOption>): void => {
    setSelectedChain(chain);
    setNumberOfChain(numberOfChain + chain.length);
  };

  return (
    <main className={styles.main}>
      <Wrapper>
        <Header>
          <Icon />
          <ChainSelector onSelectChain={handleSelectChain} />
        </Header>
        <Chain blocks={blockProps} />
      </Wrapper>
    </main>
  );
};

export default Home;
