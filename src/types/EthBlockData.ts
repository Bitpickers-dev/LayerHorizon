import L2ChainData from "./L2ChainData";

type EthBlockData = {
  block_number: number;
  l2_chains: L2ChainData[];
};

export default EthBlockData;
