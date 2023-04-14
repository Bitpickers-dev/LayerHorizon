type L2ChainData = {
    chainName: string;
    chainLogo: string;
    blocks: {
        blockNumber: number;
        timestamp: number;
        numberOfTransactions: number;
    }[]
}

export default L2ChainData;
