import express from 'express'
import { UserController } from '../../controllers/user.controller.js'
import { UserValidation } from '../../validations/user.validation.js'
import { UserVerifyToken } from '../../middlewares/verifyToken.js'
const router = express.Router()

router.route('/register')
    .post(UserValidation.createNewUser, UserController.createNewUser)

router.route('/login')
    .post(UserController.login)

router.route('/current_user')
    .post(UserVerifyToken.verifyToken, UserController.getCurrentUser)
export const UserRoutes = router