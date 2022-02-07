import nc from 'next-connect'
import dbConnect from '../../config/dbConnect'

import { isAuthenticatedUser } from '../../middlewares/auth'
import { currentUserProfile } from '../../controllers/authControllers'
import onError from '../../middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(currentUserProfile)

export default handler;