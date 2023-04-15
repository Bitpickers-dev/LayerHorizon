import Block from "@/types/Block";

export const getOptBatch = (eth: string): Promise<Block[]> =>
  // fetch(`http://127.0.0.1:8000/optblock/?eth=0x${eth}`).then((x) => x.json());
  fetch(`https://layerhorizon-server.azurewebsites.net/optblock/?eth=0x${eth}`,{mode:'cors'}).then((x) => x.json());
