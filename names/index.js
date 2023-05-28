let firstNamesList = require("../country/state/city/index");
let importItem = require("../utilities/utils/index");
let getPeopleInCity = (firstNamesList) => {
  return importItem(firstNamesList);
};
module.exports = getPeopleInCity;
