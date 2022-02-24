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
    EventTarget.prototype.addEventListener = jest.fn();

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

    describe("formToggleHandler", () => {
        beforeEach(() => {
            document.documentElement.innerHTML = "<form class='login-form'></form>";
        });

        beforeAll(() => {
            helpers.showRegisterForm.mockImplementation(() => {
                return document.createElement("form");
            });

            helpers.showLoginForm.mockImplementation(() => {
                return document.createElement("form");
            });
        });

        const mockEvent = {
            preventDefault: jest.fn()
        };

        it("shows register form if on login form", () => {
            document.documentElement.innerHTML = "<form id='login-form' class='login-form'></form>";
            handlers.formToggleHandler(mockEvent);
            expect(helpers.showRegisterForm).toBeCalled();
        });
        
        it("attaches event listener to register form", () => {
            document.documentElement.innerHTML = "<form id='login-form' class='login-form'></form>";
            handlers.formToggleHandler(mockEvent);
            const form = document.querySelector("form");
            expect(form.addEventListener).toBeCalledWith("submit", handlers.registerSubmitHandler);
        });

        it("shows login form if on register form", () => {
            document.documentElement.innerHTML = "<form id='register-form' class='login-form'></form>";
            handlers.formToggleHandler(mockEvent);
            expect(helpers.showLoginForm).toBeCalled();
        });

        it("attaches event listener to login form", () => {
            document.documentElement.innerHTML = "<form id='register-form' class='login-form'></form>";
            handlers.formToggleHandler(mockEvent);
            const form = document.querySelector("form");
            expect(form.addEventListener).toBeCalledWith("submit", handlers.loginSubmitHandler);
        });
    });

    describe("navLinkHandler", () => {
        beforeAll(() => {
            jest.spyOn(handlers, "navLinkHandler").mockRestore();

            helpers.decodeToken.mockReturnValue({uid: "test_uid"});

            requests.getHabits.mockImplementation(uid => {
                return new Promise((resolve, reject) => {
                    if(uid) resolve([]);
                    else reject("error");
                });
            });
    
            helpers.showHabits.mockImplementation(() => {
                const table = document.createElement("table");
                table.innerHTML = "<tbody><tr></tr></tbody>";
                document.querySelector("#content").appendChild(table);
                return table;
            });
    
            helpers.showNewHabitForm.mockImplementation(() => {
                const form = document.createElement("form");
                document.querySelector("#content").appendChild(form);
                return form;
            });
    
            helpers.showLoginForm.mockImplementation(() => {
                const form = document.createElement("form");
                document.querySelector("#content").appendChild(form);
                return form;
            });
    
            helpers.showRegisterForm.mockImplementation(() => {
                const form = document.createElement("form");
                document.querySelector("#content").appendChild(form);
                return form;
            });
        });

        beforeEach(() => {
            document.documentElement.innerHTML = "<main id='content'></main>";
            jest.clearAllMocks();
        });

        const mockEvent = page => ({
            target: {
                dataset: {page}
            },
            preventDefault: jest.fn()
        });

        it("logout link removes token then goes to home", () => {
            handlers.navLinkHandler(mockEvent("logout"));
            expect(localStorage.getItem("token")).toBe(null);
            expect(helpers.showHome).toBeCalled();
        });

        it("home link goes to home if localStorage.token empty", () => {
            localStorage.removeItem("token");
            handlers.navLinkHandler(mockEvent("home"));
            expect(helpers.showHome).toBeCalled();
        });

        it("home link loads dashboard if localStorage.token exists", async () => {
            localStorage.setItem("token", "token");
            await handlers.navLinkHandler(mockEvent("home"));
            const row = document.querySelector("tr");
            const form = document.querySelector("form");
            expect(helpers.decodeToken).toBeCalled();
            expect(requests.getHabits).toBeCalledWith("test_uid");
            expect(helpers.showDashboard).toBeCalled();
            expect(row.addEventListener).toBeCalledWith("click", handlers.habitClickHandler);
            expect(helpers.showNewHabitForm).toBeCalled();
            expect(form.addEventListener).toBeCalledWith("submit", handlers.habitSubmitHandler);
        });

        it("login link shows login form", () => {
            handlers.navLinkHandler(mockEvent("login"));
            const form = document.querySelector("form");
            expect(helpers.showLoginForm).toBeCalled();
            expect(form.addEventListener).toBeCalledWith("submit", handlers.loginSubmitHandler);
        });

        it("register link shows register form", () => {
            handlers.navLinkHandler(mockEvent("register"));
            const form = document.querySelector("form");
            expect(helpers.showRegisterForm).toBeCalled();
            expect(form.addEventListener).toBeCalledWith("submit", handlers.registerSubmitHandler);
        });

        it("nav bar is updated afterwards", async () => {
            localStorage.setItem("token", "token");
            await handlers.navLinkHandler(mockEvent("home"));
            handlers.navLinkHandler(mockEvent("login"));
            handlers.navLinkHandler(mockEvent("register"));
            handlers.navLinkHandler(mockEvent("logout"));
            expect(helpers.updateNavigation).toBeCalledTimes(4);
        });

        it("user is logged out if API request fails", async () => {
            requests.getHabits.mockImplementation(uid => {
                return new Promise((resolve, reject) => {
                    reject("error");
                });
            });
            localStorage.setItem("token", "token");
            await handlers.navLinkHandler(mockEvent("home"));
            expect(localStorage.getItem("token")).toBe(null);
            expect(helpers.showHome).toBeCalled();
            expect(helpers.updateNavigation).toBeCalled();
        });
    });
 });
