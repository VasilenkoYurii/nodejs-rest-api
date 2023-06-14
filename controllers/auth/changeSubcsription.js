const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const changeSubcsription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const user = await User.findById(_id);

  if (user.subscription === subscription) {
    throw HttpError(400, `Subscription already has a value ${subscription}`);
  }

  await User.findByIdAndUpdate(_id, { subscription });

  res.json({
    message: "Subscription changed success",
    subscription,
  });
};

module.exports = changeSubcsription;
