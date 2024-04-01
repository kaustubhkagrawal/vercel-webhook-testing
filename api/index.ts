import { VercelRequest, VercelResponse } from "@vercel/node";
import { setCors } from "../utils/cors.utils";

export default async (req: VercelRequest, res: VercelResponse) => {

  setCors(res)
  console.log('method', req.method);
  console.log('authorization', req.headers.authorization)
  console.log('body', req.body)
  console.log('query', req.query)
  return res.status(200).json({message: 'hello world'});
};
