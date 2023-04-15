import Block from "@/types/Block";

export const getArbBatch = (eth: string): Promise<Block[]> =>
  // fetch(`http://127.0.0.1:8000/arbblock/?eth=0x${eth}`).then((x) => x.json());
  // fetch(`https://layerhorizon-server.azurewebsites.net/arbblock/?eth=0x${eth}`).then((x) => x.json());
  fetch(`https://layerhorizon-server.azurewebsites.net/arbblock/?eth=0x${eth}&fields[]=count&fields[]=number&fields[]=timestamp`).then((x) => x.json());
