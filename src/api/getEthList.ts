import Block from "@/types/Block";

export const getEthList = (length: number): Promise<Block[]> =>
  // fetch(`http://127.0.0.1:8000/ethblock/?size=${length}`).then((x) => x.json());
  // fetch(`https://layerhorizon-server.azurewebsites.net/ethblock/?size=${length}`,{mode:'cors'}).then((x) => x.json());
  fetch(`https://layerhorizon-server.azurewebsites.net/ethblock/?size=${length}&fields[]=count&fields[]=number&fields[]=timestamp`,{mode:'cors'}).then((x) => x.json());
