const requests = require("../static/js/requests");

describe("fetch request functions", () => {
    global.API_HOST = "hostname";

    describe("login", () => {
        beforeAll(() => {
            global.fetch = jest.fn((url, opt) => {
                return new Promise((resolve, reject) => {
                    try {
                        if(!url) throw new Error();
                        if(!opt.body) throw new Error();
                        if(opt.headers["Content-Type"] !== "application/json") throw new Error();
                        const {email, password} = JSON.parse(opt.body);
                        resolve({
                            json: jest.fn(() => {
                                return Promise.resolve(
                                !(email && password) ? {
                                    success: false,
                                    error: "error"
                                } : {
                                    success: true,
                                    token: "Bearer token"
                                });
                            })
                        });
                    } catch (err) {
                        reject(err);
                    }
                });
            });
        });

        const mockFormData = {
            email: "test@email.com",
            password: "testpassworD"
        };

        it("calls fetch with correct url and options", async () => {
            await requests.login(mockFormData);
            const options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(mockFormData)
            };
            expect(global.fetch).toBeCalledWith("hostname/auth/login", options);
        });

        it("returns json with token", async () => {
            const output = await requests.login(mockFormData);
            expect(output).toMatchObject({
                token: "Bearer token"
            });
        });

        it("throws error if fetch fails", () => {
            expect(async () => {
                await requests.login({});
            }).rejects.toThrow("error");
        });
    });

    describe("register", () => {
        beforeAll(() => {
            global.fetch = jest.fn((url, opt) => {
                return new Promise((resolve, reject) => {
                    try {
                        if(!url) throw new Error();
                        if(!opt.body) throw new Error();
                        if(opt.headers["Content-Type"] !== "application/json") throw new Error();
                        const {username, email, password} = JSON.parse(opt.body);
                        resolve({
                            status: !(username && email && password) ? 500 : 201,
                            json: jest.fn(() => {
                                return Promise.resolve(
                                !(username && email && password) ? {
                                    success: false,
                                    error: "error"
                                } : {
                                    success: true,
                                    token: "Bearer token"
                                });
                            })
                        });
                    } catch (err) {
                        reject(err);
                    }
                });
            });
        });

        const mockFormData = {
            username: "testusername",
            email: "test@email.com",
            password: "testpassworD"
        };

        it("calls fetch with correct url and options", async () => {
            await requests.register(mockFormData);
            const options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(mockFormData)
            };
            expect(global.fetch).toBeCalledWith("hostname/auth/register", options);
        });

        it("returns json with token", async () => {
            const output = await requests.register(mockFormData);
            expect(output).toMatchObject({
                token: "Bearer token"
            });
        });

        it("throws error if fetch fails", () => {
            expect(async () => {
                await requests.register({});
            }).rejects.toThrow("error");
        });
    });
});
