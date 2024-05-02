const { generateSHA1 } = require("./generate-sha1");

const SECRET_TOKEN = "my-secret";

const payload = {
  a: "b",
  c: "d",
};

const sha1 = generateSHA1(SECRET_TOKEN, payload);
console.log({ sha1 });