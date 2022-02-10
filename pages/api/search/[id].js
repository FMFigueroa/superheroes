import nc from "next-connect";



import onError from '../../../middlewares/errors';
import { deatilsHeroe } from "../../../controllers/heroControllers";

const handler = nc({ onError });



handler.post(deatilsHeroe);

export default handler;