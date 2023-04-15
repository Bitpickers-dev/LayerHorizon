type L2ChainData = {
  blocks: {
    blockNumber: number;
    numberOfTransactions: number;
    timestamp: number;
  }[];
  chainLogo: string;
  chainName: string;
};

export default L2ChainData;
