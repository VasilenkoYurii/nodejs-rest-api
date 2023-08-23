const { Contact } = require("../../models/contact");

const updateStatusContact = async (req, res) => {
  const result = await Contact.findByIdAndUpdate(
    req.params.contactId,
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
  return result;
};

module.exports = updateStatusContact;
