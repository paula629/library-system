import { Router } from "express";
import { getUsers, createUser} from "../controllers/users.controller.js";
import { validate } from "../middlewares/validation.middleware.js";

import { createUserSchema } from "../schemas/user.schema.js";

const router=Router();
router.get("/", getUsers);
router.post(
  "/",
  validate(createUserSchema),
  createUser
);
export default router;