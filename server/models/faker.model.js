const { faker } = require("@faker-js/faker");

const UserObjectModel = () => {
    const newFaker = {
        password: faker.internet.password({ length: 16 }),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid(),
    };
    return newFaker;
};
module.exports = UserObjectModel();

const CompanyObjectModel = () => {
    const companyFaker = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        street: faker.location.streetAddress(true),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    };
    return companyFaker;
};
module.exports = CompanyObjectModel;
