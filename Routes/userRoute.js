const router = require("express").Router();
const users = require("../Models/userModel");

// ROUTER FOR REGISTER NEW USER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let emailExist = await users.findOne({ email: email.toLowerCase() });

  if (emailExist) {
    res.send("E-mail is already used");
    return;
  }

  users
    .create({
      name: name,
      email: email.toLowerCase(),
      password: password,
    })
    .then(() => {
      res.send("done");
    })
    .catch((err) => {
      if (err) res.send("email is already used");
    });
});

// ROUTER FOR CHECK SIGN IN
router.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  let userExist = await users.findOne({ email: email.toLowerCase() });
  if (userExist == null) {
    res.send("invalid email/password");
    return;
  }

  if (userExist.password == password) {
    res.json(userExist._id);
  } else {
    res.send("invalid email/password");
    return;
  }
});

module.exports = router;
