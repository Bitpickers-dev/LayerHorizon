import Block from "@/types/Block";

export const getEthBlock = (number: string): Promise<Block> =>
  fetch(`https://layerhorizon-server.azurewebsites.net/ethblock/0x${number}/`,{mode:'cors'}).then((x) => x.json());
