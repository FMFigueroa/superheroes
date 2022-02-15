import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getSingleHeroe, deleteHeroe } from "../../../controllers/heroControllers";

const handler = nc();

dbConnect();


handler.get(getSingleHeroe);
handler.delete(deleteHeroe);

export default handler;