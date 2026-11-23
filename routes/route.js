import express from 'express';
import { getByID, alterUser, createUser, deleteUser, getAll} from '../repositories/userRepositories.js';
import { alterCat, createCat, deleteCat, getCatByID, getCatAll } from '../repositories/catRepositories.js';


const router = express.Router();

router.route("/v1/user").post(createUser).get(getAll);
router.route("/v1/user/:id").get(getByID).put(alterUser).delete(deleteUser);

router.route("/v1/cat").post(createCat).get(getCatAll);
router.route("/v1/cat/:id").get(getCatByID).put(alterCat).delete(deleteCat);

export default router;