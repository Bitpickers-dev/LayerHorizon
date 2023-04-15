import Block from "@/types/Block";

export const getEthBlock = (number: string): Promise<Block> =>
  // fetch(`http://127.0.0.1:8000/ethblock/0x${number}/`).then((x) => x.json());
  fetch(`https://layerhorizon-server.azurewebsites.net/ethblock/0x${number}/`,{mode:'cors'}).then((x) => x.json());
