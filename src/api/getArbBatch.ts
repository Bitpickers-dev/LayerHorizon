import Block from "@/types/Block";

export const getArbBatch = (eth: string): Promise<Block[]> =>
  fetch(`https://layerhorizon-server.azurewebsites.net/arbblock/?eth=0x${eth}`,{mode:'cors'}).then((x) => x.json());
