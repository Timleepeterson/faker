const faker = require("faker");

const express = require("express");

const app = express();
const port = 8000;

const generateUserObj = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const generateCompanyObject = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObj();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = generateCompanyObject();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => { 
    const newUser = generateUserObj();
    const newComany = generateCompanyObject();
    const responseObj = {
        user: newUser,
        company: newCompany,
    };
    res.json(responseObject);
});

app.listen(port, () => console.log(`express server running on port${port}`));

//i was only able to complete this assignment by following along with the walkthru.
// I have to submit because I don't have any more time to continue to work today, but I will continue to work on this project