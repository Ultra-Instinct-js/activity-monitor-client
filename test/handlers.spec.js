/**
 * @jest-environment jsdom
 */

 const handlers = require("../static/js/handlers");
 const requests = require("../static/js/requests");
 const helpers = require("../static/js/helpers");
 
 jest.mock("../static/js/requests");
 jest.mock("../static/js/helpers");

 describe("event handler functions", () => {
    console.warn = jest.fn();
    helpers.navLinkEvent.mockImplementation(page => ({page}));
    jest.spyOn(handlers, "navLinkHandler").mockImplementation(jest.fn());
    HTMLElement.prototype.click = jest.fn();

    describe("pageLoadHandler", () => {
        it("navigates to home", () => {
            handlers.pageLoadHandler();
            expect(handlers.navLinkHandler).toBeCalledWith({page: "home"});
        });
    });

    describe("loginSubmitHandler", () => {
        beforeEach(() => {
            document.documentElement.innerHTML = "<div id='login-modal'><form><input value='test@mail.com' name='email'/><input value='testpassword' name='password'/></form></div>";
        });

        requests.login.mockImplementation(data => {
            return new Promise((resolve, reject) => {
                try {
                    if(data.email && data.password){
                        resolve({
                            token: "Bearer token"
                        });
                    }
                    else throw new Error("error");
                } catch (err) {
                    reject(err);
                }
            });
        });

        const mockEvent = () => ({
            target: document.querySelector("form"),
            preventDefault: jest.fn()
        });

        it("warns for missing input fields", () => {
            document.documentElement.innerHTML = "<form><input value='' name='email'/><input value='' name='password'/></form>";
            const mockEvent = {
                target: document.querySelector("form"),
                preventDefault: jest.fn()
            };
            handlers.loginSubmitHandler(mockEvent);
            expect(console.warn).toBeCalledWith(new Error("Required fields missing."));
            expect(requests.login).not.toBeCalled();
        });

        it("calls requests.login with form data", () => {
            const form = document.querySelector("form");
            const formData = Object.fromEntries(new FormData(form));
            handlers.loginSubmitHandler(mockEvent());
            expect(requests.login).toBeCalledWith(formData);
        });

        it("sets localStorage.token to response token", () => {
            handlers.loginSubmitHandler(mockEvent());
            expect(localStorage.getItem("token")).toBe("token");
        });

        it("navigates to home", () => {
            handlers.loginSubmitHandler(mockEvent());
            expect(handlers.navLinkHandler).toBeCalledWith({page: "home"});
        });

        it("closes modal", () => {
            const modal = document.querySelector("#login-modal");
            handlers.loginSubmitHandler(mockEvent());
            expect(modal.click).toBeCalled();
        });
    });

    describe("registerSubmitHandler", () => {
        jest.spyOn(handlers, "loginSubmitHandler");

        beforeEach(() => {
            document.documentElement.innerHTML = "<form><input value='test@mail.com' name='email'/><input value='testpassworD' name='password'/><input value='testpassworD' name='passwordConfirm'/><input value='testusername' name='username'/></form>";
        });

        requests.register.mockImplementation(data => {
            return new Promise((resolve, reject) => {
                try {
                    if(data.email && data.password && data.username){
                        resolve("User created");
                    }
                    else throw new Error("error");
                } catch (err) {
                    reject(err);
                }
            });
        });

        const mockEvent = () => ({
            target: document.querySelector("form"),
            preventDefault: jest.fn()
        });

        it("warns for missing input fields", () => {
            document.documentElement.innerHTML = "<form><input value='' name='email'/><input value='' name='password'/><input value='' name='passwordConfirm'/><input value='' name='username'/></form>";
            handlers.registerSubmitHandler(mockEvent());
            expect(console.warn).toBeCalledWith(new Error("Required fields missing."));
            expect(requests.register).not.toBeCalled();
        });

        it("warns for unmatching passwords", () => {
            document.documentElement.innerHTML = "<form><input value='test@mail.com' name='email'/><input value='testpasswor' name='password'/><input value='testpassworD' name='passwordConfirm'/><input value='testusername' name='username'/></form>";
            handlers.registerSubmitHandler(mockEvent());
            expect(console.warn).toBeCalledWith(new Error("Passwords don't match."));
            expect(requests.register).not.toBeCalled();
        });

        it("warns for password less than 8 chars", () => {
            document.documentElement.innerHTML = "<form><input value='test@mail.com' name='email'/><input value='tesT' name='password'/><input value='tesT' name='passwordConfirm'/><input value='testusername' name='username'/></form>";
            handlers.registerSubmitHandler(mockEvent());
            expect(console.warn).toBeCalledWith(new Error("Password must be at least 8 characters long."));
            expect(requests.register).not.toBeCalled();
        });

        it("warns for password with no uppercase chars", () => {
            document.documentElement.innerHTML = "<form><input value='test@mail.com' name='email'/><input value='testpassword' name='password'/><input value='testpassword' name='passwordConfirm'/><input value='testusername' name='username'/></form>";
            handlers.registerSubmitHandler(mockEvent());
            expect(console.warn).toBeCalledWith(new Error("Password must contain at least 1 uppercase char."));
            expect(requests.register).not.toBeCalled();
        });

        it("calls requests.register with form data", () => {
            const form = document.querySelector("form");
            const formData = Object.fromEntries(new FormData(form));
            handlers.registerSubmitHandler(mockEvent());
            expect(requests.register).toBeCalledWith(formData);
        });

        it("logs user in after account creation", () => {
            handlers.registerSubmitHandler(mockEvent());
            expect(handlers.loginSubmitHandler).toBeCalled();
        });
    });
 });
