const { generateSHA1 } = require("./generate-sha1");
const crypto = require("crypto");

const SECRET_TOKEN = process.env.SECRET_TOKEN || "my-secret";

describe("generateSHA1", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  it("should generate the correct SHA1 hash", () => {
    const payload = {
      ping: "pong",
    };

    const expectedHash = crypto
      .createHmac("sha1", SECRET_TOKEN)
      .update(JSON.stringify(payload))
      .digest("hex");

    const actualHash = generateSHA1(SECRET_TOKEN, payload);

    expect(actualHash).toBe(expectedHash);
  });

  it("should generate the correct SHA1 hash with empty payload", () => {
    const expectedHash = crypto.createHmac("sha1", SECRET_TOKEN).digest("hex");

    const actualHash = generateSHA1(SECRET_TOKEN);

    expect(actualHash).toBe(expectedHash);
  });

  it("should return null if error", () => {
    expect(generateSHA1()).toBe(null);
  });
});
