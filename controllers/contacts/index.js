const { ctrlWrapper } = require("../../helpers");

const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const updateStatusContact = require("./updateStatusContact");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const updateContact = require("./updateContact");

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  removeContact: ctrlWrapper(removeContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
};
