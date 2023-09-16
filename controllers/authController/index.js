const { controlWrapper } = require("../../utils");

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscr = require("./updateSubscr");

module.exports = {
  signup: controlWrapper(signup),
  login: controlWrapper(login),
  logout: controlWrapper(logout),
  getCurrent: controlWrapper(getCurrent),
  updateSubscr: controlWrapper(updateSubscr),
};
