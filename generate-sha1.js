const crypto = require("crypto");

function generateSHA1(secretToken, payload) {
  try {
    if (!secretToken) {
      throw new Error("Secret token was not provided.");
    }

    const hash = crypto.createHmac("sha1", secretToken);

    if (payload) {
      return hash.update(JSON.stringify(payload)).digest("hex");
    } else {
      return hash.digest("hex");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  generateSHA1,
};
