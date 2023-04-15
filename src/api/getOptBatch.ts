import Block from "@/types/Block";

export const getOptBatch = (eth: string): Promise<Block[]> =>
  fetch(`https://layerhorizon-server.azurewebsites.net/optblock/?eth=0x${eth}`,{mode:'cors'}).then((x) => x.json());
