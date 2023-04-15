import Response from "@/types/Response";

export const getArbBatch = (eth: string): Promise<Response> =>
  fetch(`http://127.0.0.1:8000/arbblock/?eth=${eth}`).then((x) => x.json());
