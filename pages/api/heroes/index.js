import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";


import onError from '../../../middlewares/errors';
import { allHeroes, newHeroe, } from "../../../controllers/heroControllers";

const handler = nc({ onError });

dbConnect();

handler.get(allHeroes);

handler.post(newHeroe)

export default handler;