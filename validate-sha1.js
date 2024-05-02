const crypto = require("crypto");
const { generateSHA1 } = require("./generate-sha1");

function validateSHA1Signature(signature, secretToken, payload) {
  try {
    if (!signature) return false;

    const expectedHash = generateSHA1(secretToken, payload);

    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expectedHash, 'hex')
    );
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  validateSHA1Signature,
};
