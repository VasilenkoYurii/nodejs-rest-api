const axios = require("axios");
const ctrl = require("../controllers/auth");

describe("Login function", () => {
  test("the data is peanut butter", async () => {
    const body = {
      email: "liva@gmail.com",
      password: "112233!Awd",
    };

    const respons = await axios.post(
      "http://localhost:3000/api/auth/login",
      body
    );

    expect(respons.status).toBe(200);
    expect(typeof respons.data.email).toBe("string");
    expect(typeof respons.data.subscription).toBe("string");
    expect(typeof respons.data.token).toBe("string");
  });
});
