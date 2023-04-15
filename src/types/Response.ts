import Block from '@/types/Block'

type Response = {
  count: number;
  next: string;
  previous: string;
  result: Block[];
};

export default Response;
