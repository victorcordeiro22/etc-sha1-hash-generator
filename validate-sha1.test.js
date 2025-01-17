const { validateSHA1Signature } = require("./validate-sha1");

const SECRET_TOKEN = process.env.SECRET_TOKEN || "my-secret";

describe("validateSHA1Signature", () => {
  const payload = {
    ping: "pong",
  };

  const validSignature = "a58060f85f92b4f35fbc0923c0fcaf7ae86f46f0";
  const invalidSignature = "invalidSignature";

  it("should return true for a valid signature", () => {
    const result = validateSHA1Signature(validSignature, SECRET_TOKEN, payload);

    expect(result).toBe(true);
  });

  it("should return false for an invalid signature", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    
    const result = validateSHA1Signature(
      invalidSignature,
      SECRET_TOKEN,
      payload
    );

    expect(result).toBe(false);

    console.error.mockRestore();
  });

  it("should return false if no signature", () => {
    const result = validateSHA1Signature(undefined, SECRET_TOKEN, payload);

    expect(result).toBe(false);
  });
});
