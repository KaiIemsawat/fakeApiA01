const UserObjectModel = require("../models/faker.model");
const CompanyObjectModel = require("../models/faker.model");

module.exports.getUser = (req, resp) => {
    console.log(req.body);
    resp.json(UserObjectModel);
};

module.exports.getCompany = (req, resp) => {
    console.log(req.body);
    resp.json(CompanyObjectModel);
};
