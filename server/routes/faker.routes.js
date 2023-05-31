const FakerController = require("../controllers/faker.controller");

module.exports = (app) => {
    app.get("/api/users/new", FakerController.getUser);
    // app.get("/api/companies/new", FakerController.getCompany);
    // app.get("/api/user/company", [
    //     FakerController.getUser,
    //     FakerController.getCompany,
    // ]);
};
