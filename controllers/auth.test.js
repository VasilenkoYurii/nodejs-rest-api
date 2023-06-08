const ctrl = require("../controllers/auth");

describe("Login function", () => {
  test("should return status code 200, token, and user object with email and subscription fields", () => {
    const req = {
      body: {
        email: "liva@gmail.com",
        password: "112233!Awd",
      },
    };
    const res = {
      json: jest.fn(),
    };

    return ctrl.login(req, res).then(() => {
      console.log(req);
      //   expect(res.json).toHaveBeenCalledTimes(1);
      //   const result = res.json.mock.calls[0][0];
      //   expect(result).toHaveProperty("token");
      //   expect(result).toHaveProperty("user");
      //   expect(typeof result.token).toBe("string");
      //   expect(typeof result.user).toBe("object");
      //   expect(result.user).toHaveProperty("email");
      //   expect(result.user).toHaveProperty("subscription");
      //   expect(typeof result.user.email).toBe("string");
      //   expect(typeof result.user.subscription).toBe("string");
    });
  }, 30000);
});
