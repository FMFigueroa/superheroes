import nc from "next-connect";



import onError from '../../../middlewares/errors';
import { searchHeroe } from "../../../controllers/heroControllers";

const handler = nc({ onError });



handler.post(searchHeroe);

export default handler;