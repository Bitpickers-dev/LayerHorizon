import Block from "@/types/Block";

export const getEthList = (length: number): Promise<Block[]> =>
  fetch(`https://layerhorizon-server.azurewebsites.net/ethblock/?size=${length}`,{mode:'cors'}).then((x) => x.json());
