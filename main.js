const data = require("./data.json");
const axios = require("axios");

console.log(`Mock API Generator from Rapidmock`);
console.log(`-`.repeat(35));

const apiUrl = "https://api.rapidmock.com/mocks";

const requestBody = { jsonString: JSON.stringify(data) };

const generateMockApi = () => {
  axios
    .post(apiUrl, requestBody)
    .then((response) => {
      console.log(`Success! Your mock API URL is ${response.data.data.url}`);
      console.log(`This URL will never expire.`);
      console.log(`\nVisit https://rapidmock.com to learn more.`);

    })
    .catch((error) => {
      console.log(error.message);
    });
};

generateMockApi();
