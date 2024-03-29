const express = require("express");

const ctrl = require("../../controllers/auth");

const {
  authenticate,
  validateBody,
  uploadAndProcessAvatar,
} = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.subcsriptionSchema),
  ctrl.changeSubcsription
);

router.patch(
  "/avatars",
  authenticate,
  uploadAndProcessAvatar,
  ctrl.updateAvatar
);

module.exports = router;
