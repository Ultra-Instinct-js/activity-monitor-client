/**
 * @jest-environment jsdom
 */

const render = require("../static/js/render");

describe("render functions", () => {
    describe("renderHome", () => {
        const content = render.renderHome();

        it("<main> element returned for content", () => {
            expect(content.tagName).toBe('MAIN')
        })

        it("content has id of content", () => {
            expect(content.id).toBe("content");
        });

        const heading = content.firstChild.firstChild;

        it("<h1> element returned for heading", () => {
            expect(heading.tagName).toBe('H1')
        })

        it('return element has correct class of text-center for heading', () => {
            expect(heading.classList.contains('text-center')).toBe(true);
        });

        it('return element has correct classe of pt-5 for heading', () => {
            expect(heading.classList.contains('pt-5')).toBe(true);
        });

        it("content has id of content", () => {
            expect(heading.id).toBe("trackYourHabits");
        });

        it("heading has innerHTML of TRACK YOUR HABITS", () => {
            expect(heading.innerHTML).toBe("TRACK YOUR <br> HABITS!");
        });

        const headingContainer = content.children[1]

        it("<div> element returned for headingContainer", () => {
            expect(headingContainer.tagName).toBe('DIV')
        })

        it("headingContainer has 2 children", () => {
            expect(headingContainer.children.length).toBe(2);
        });

        it("content has 4 children", () => {
            expect(content.children.length).toBe(4);
        });

        const container1h = content.children[1].children[0]

        it("container1h has innerHTML of What is Activity Monitor?", () => {
            expect(container1h.innerHTML).toBe("What is Activity Monitor?");
        });

        it("<h3> element returned for container1h", () => {
            expect(container1h.tagName).toBe('H3')
        })

        it('return element has correct class of text-center for container1h', () => {
            expect(container1h.classList.contains('text-center')).toBe(true);
        });

        it('return element has correct classe of pt-5 for container1h', () => {
            expect(container1h.classList.contains('pt-5')).toBe(true);
        });

        it("container1h has 0 children", () => {
            expect(container1h.children.length).toBe(0);
        });

        const container1p = content.children[1].children[1].children[0]

        it("container1p has innerHTML contaning long text beginning with Activity monitor is a webpage", () => {
            expect(container1p.innerHTML).toBe("Activity monitor is a webpage that allows anyone to track their personal habits. <br>We hope that Activity Monitor can aid in helping users remain accountable for habits <br>and to promote a positive lifestyle and reach their goals.");
        });

        it("<p> element returned for container1p", () => {
            expect(container1p.tagName).toBe('P')
        })

        it('return element has correct class of text-center for container1p', () => {
            expect(container1p.classList.contains('text-center')).toBe(true);
        });

        it("container1p has 2 children", () => {
            expect(container1p.children.length).toBe(2);
        });

        const container2h = content.children[2].children[0]

        it("container2h has innerHTML of What am I able to track?", () => {
            expect(container2h.innerHTML).toBe("What am I able to track?");
        });

        
        it("<h3> element returned for container2h", () => {
            expect(container2h.tagName).toBe('H3')
        })

        it('return element has correct class of text-center for container2h', () => {
            expect(container2h.classList.contains('text-center')).toBe(true);
        });

        it('return element has correct classe of pt-5 for container2h', () => {
            expect(container2h.classList.contains('pt-5')).toBe(true);
        });

        it("container2h has 0 children", () => {
            expect(container2h.children.length).toBe(0);
        });

        const container2p = content.children[2].children[1].children[0]

        it("container2p has innerHTML contaning long text beginning with Anything! Activity Monitor is designed", () => {
            expect(container2p.innerHTML).toBe("Anything! Activity Monitor is designed for users to track whatever they wish <br>to track, from studying a Japanese 1 hour a day, to wanting to lose 20 pounds <br> over a year. We have predefined units and timescales so you can spend less time <br> planning and more time completing your goals!.");
        });

        it("<p> element returned for container2p", () => {
            expect(container2p.tagName).toBe('P')
        })

        it('return element has correct class of text-center for container2p', () => {
            expect(container2p.classList.contains('text-center')).toBe(true);
        });

        it("container2p has 3 children", () => {
            expect(container2p.children.length).toBe(3);
        });

        const container3h = content.children[3].children[0]

        it("container3h has innerHTML of Who made Activity Monitor?", () => {
            expect(container3h.innerHTML).toBe("Who made Activity Monitor?");
        });

        it("<h3> element returned for container3h", () => {
            expect(container3h.tagName).toBe('H3')
        })

        it('return element has correct class of text-center for container3h', () => {
            expect(container3h.classList.contains('text-center')).toBe(true);
        });

        it('return element has correct classe of pt-5 for container3h', () => {
            expect(container3h.classList.contains('pt-5')).toBe(true);
        });

        it("container3h has 0 children", () => {
            expect(container3h.children.length).toBe(0);
        })

        const container3p = content.children[3].children[1].children[0]

        it("container3p has innerHTML contaning long text beginning with Anything! Activity Monitor was desogmed, created", () => {
            expect(container3p.innerHTML).toBe("Activity Monitor was designed, created and deployed as a collaborative group project <br> as part of lap 2 of the training course of futureproof. The project occured over the <br> the span of 1 week and was created by team Ultra-Instinct.");
        });

        it("<p> element returned for container3p", () => {
            expect(container3p.tagName).toBe('P')
        })

        it('return element has correct class of text-center for container3p', () => {
            expect(container3p.classList.contains('text-center')).toBe(true);
        });

        it("container3p has 2 children", () => {
            expect(container3p.children.length).toBe(2);
        });

    });

    describe("renderLoginForm", () => {

        const form = render.renderLoginForm();

        it("<form> element returned for form", () => {
            expect(form.tagName).toBe('FORM')
        })

        it("form has id of login-form", () => {
            expect(form.id).toBe("login-form");
        });

        it('return element has correct class of text-center for form', () => {
            expect(form.classList.contains('text-center')).toBe(true);
        });

        it('return element has correct class of login-form for form', () => {
            expect(form.classList.contains('login-form')).toBe(true);
        });

         const emailLabel = form.firstChild.firstChild
                // = content.children[1]

        it("<label> element returned for emailLabel", () => {
            expect(emailLabel.tagName).toBe('LABEL')
        })
        
        it("emailLogin returned for  to be emailLabel", () => {
            expect(emailLabel.for).toBe('emailLogin')
        })

        it('return element has correct class of form-label for emailLabel', () => {
            expect(emailLabel.classList.contains('form-label')).toBe(true);
        });

        it("emailLabel has innerHTML of Email:", () => {
            expect(emailLabel.innerHTML).toBe("Email:");
        });

        const emailInput = form.firstChild.children[1]

        it("<input> element returned for emailInput", () => {
            expect(emailInput.tagName).toBe('INPUT')
        })
        
        it("emailInput returned type to be text", () => {
            expect(emailInput.type).toBe('text')
        });
        
        it("emailLabel has id of emailLogin", () => {
            expect(emailInput.id).toBe("emailLogin");
        });

        it("emailLabel has innerHTML of Email:", () => {
            expect(emailInput.name).toBe("email");
        });

        const div1 = form.firstChild

        it("div1 has 2 children", () => {
            expect(div1.children.length).toBe(2);
        });


        const passwordLabel = form.children[1].firstChild

        it("<label> element returned for passwordLabel", () => {
            expect(passwordLabel.tagName).toBe('LABEL')
        })
        
        it("passwordLabel returned for to be passwordLogin", () => {
            expect(passwordLabel.for).toBe('passwordLogin')
        });
        
        it('return element has correct class of form-label for passwordLabel', () => {
            expect(passwordLabel.classList.contains('form-label')).toBe(true);
        });

        it("passwordLabel has innerHTML of Password:", () => {
            expect(passwordLabel.innerHTML).toBe("Password:");
        });

        const passwordInput = form.children[1].children[1]

        it("<input> element returned for passwordInput", () => {
            expect(passwordInput.tagName).toBe('INPUT')
        })
        
        it("passwordInput returned type to be password", () => {
            expect(passwordInput.type).toBe('password')
        });
        
        it("passwordInput has id of emailLogin", () => {
            expect(passwordInput.id).toBe("passwordLogin");
        });

        it("passwordInput has innerHTML of Email:", () => {
            expect(passwordInput.name).toBe("password");
        });

        const div2 = form.children[1]

        it("div2 has 2 children", () => {
            expect(div2.children.length).toBe(2);
        });

        const submitInput = form.children[2].children[0]

        it("<input> element returned for submitInput", () => {
            expect(submitInput.tagName).toBe('INPUT')
        })
        
        it("submitInput returned type to be submit", () => {
            expect(submitInput.type).toBe('submit')
        });

        it('return element has correct class of btn for submitInput', () => {
            expect(submitInput.classList.contains('btn')).toBe(true);
        });

        it('return element has correct class of btn-dark for submitInput', () => {
            expect(submitInput.classList.contains('btn-dark')).toBe(true);
        });
        
        it("submitInput has id of loginSubmit", () => {
            expect(submitInput.id).toBe("loginSubmit");
        });

        it("submitInput has innerHTML of Log In", () => {
            expect(submitInput.value).toBe("Log In");
        });

        const div3 = form.children[2]

        it("div3 has 1 child", () => {
            expect(div3.children.length).toBe(1);
        });
    });

    describe("renderRegisterForm", () => {

        const form2 = render.renderRegisterForm();

        it("<form> element returned for form2", () => {
            expect(form2.tagName).toBe('FORM')
        })

        it("form2 has id of register-form", () => {
            expect(form2.id).toBe("register-form");
        });

        it('return element has correct class of text-center for form2', () => {
            expect(form2.classList.contains('text-center')).toBe(true);
        });

        it('return element has correct class of login-form for form2', () => {
            expect(form2.classList.contains('login-form')).toBe(true);
        });

        const emailLabel = form2.firstChild.firstChild
                // = content.children[1]

        it("<label> element returned for emailLabel", () => {
            expect(emailLabel.tagName).toBe('LABEL')
        })
        
        it("emailLabel returned for  to be emailRegister", () => {
            expect(emailLabel.for).toBe('emailRegister')
        })

        it('return element has correct class of form-label for emailLabel', () => {
            expect(emailLabel.classList.contains('form-label')).toBe(true);
        });

        it("emailLabel has innerHTML of Email:", () => {
            expect(emailLabel.innerHTML).toBe("Email:");
        });

        const emailInput = form2.firstChild.children[1]

        it("<input> element returned for emailInput", () => {
            expect(emailInput.tagName).toBe('INPUT')
        })
        
        it("emailInput returned type to be text", () => {
            expect(emailInput.type).toBe('text')
        });
        
        it("emailLabel has id of emailRegister", () => {
            expect(emailInput.id).toBe("emailRegister");
        });

        it("emailLabel has innerHTML of Email:", () => {
            expect(emailInput.name).toBe("email");
        });

        const div1 = form2.firstChild

        it("div1 has 2 children", () => {
            expect(div1.children.length).toBe(2);
        });

        const usernameLabel = form2.children[1].firstChild
        // = content.children[1]

        it("<label> element returned for usernameLabel", () => {
            expect(usernameLabel.tagName).toBe('LABEL')
        })
        
        it("usernameLabel returned for  to be emailRegister", () => {
            expect(usernameLabel.for).toBe('usernameRegister')
        })

        it('return element has correct class of form-label for usernameLabel', () => {
            expect(usernameLabel.classList.contains('form-label')).toBe(true);
        });

        it("usernameLabel has innerHTML of Email:", () => {
            expect(usernameLabel.innerHTML).toBe("Username:");
        });

        const usernameInput = form2.children[1].children[1]

        it("<input> element returned for usernameInput", () => {
            expect(usernameInput.tagName).toBe('INPUT')
        })
        
        it("usernameInput returned type to be text", () => {
            expect(usernameInput.type).toBe('text')
        });
        
        it("usernameInput has id of emailRegister", () => {
            expect(usernameInput.id).toBe("usernameRegister");
        });

        it("usernameInput has innerHTML of Email:", () => {
            expect(usernameInput.name).toBe("username");
        });

        const div2 = form2.firstChild

        it("div1 has 2 children", () => {
            expect(div2.children.length).toBe(2);
        });

        const passwordLabel = form2.children[2].firstChild

        it("<label> element returned for passwordLabel", () => {
            expect(passwordLabel.tagName).toBe('LABEL')
        })
        
        it("passwordLabel returned for to be passwordRegister", () => {
            expect(passwordLabel.for).toBe('passwordRegister')
        });
        
        it('return element has correct class of form-label for passwordLabel', () => {
            expect(passwordLabel.classList.contains('form-label')).toBe(true);
        });

        it("passwordLabel has innerHTML of Password:", () => {
            expect(passwordLabel.innerHTML).toBe("Password:");
        });

        const passwordInput = form2.children[2].children[1]

        it("<input> element returned for passwordInput", () => {
            expect(passwordInput.tagName).toBe('INPUT')
        })
        
        it("passwordInput returned type to be password", () => {
            expect(passwordInput.type).toBe('password')
        });
        
        it("passwordInput has id of passwordRegester", () => {
            expect(passwordInput.id).toBe("passwordRegister");
        });

        it("passwordInput has innerHTML of password", () => {
            expect(passwordInput.name).toBe("password");
        });

        const div3 = form2.children[2]

        it("div2 has 2 children", () => {
            expect(div2.children.length).toBe(2);
        });

        const passwordConfirmLabel = form2.children[3].firstChild

        it("<label> element returned for passwordConfirmLabel", () => {
            expect(passwordConfirmLabel.tagName).toBe('LABEL')
        })
        
        it("passwordConfirmLabel returned for to be passwordConfirmRegister", () => {
            expect(passwordConfirmLabel.for).toBe('passwordConfirmRegister')
        });
        
        it('return element has correct class of form-label for passwordConfirmLabel', () => {
            expect(passwordConfirmLabel.classList.contains('form-label')).toBe(true);
        });

        it("passwordConfirmLabel has innerHTML of Confirm Password:", () => {
            expect(passwordConfirmLabel.innerHTML).toBe("Confirm password:");
        });

        const passwordConfirmInput = form2.children[3].children[1]

        it("<input> element returned for passwordConfirmInput", () => {
            expect(passwordConfirmInput.tagName).toBe('INPUT')
        })
        
        it("passwordConfirmInput returned type to be password", () => {
            expect(passwordConfirmInput.type).toBe('password')
        });
        
        it("passwordConfirmInput has id of passwordConfirmRegister", () => {
            expect(passwordConfirmInput.id).toBe("passwordConfirmRegister");
        });

        it("passwordConfirmInput has innerHTML of passwordConfirm", () => {
            expect(passwordConfirmInput.name).toBe("passwordConfirm");
        });

        const div4 = form2.children[3]

        it("div4 has 2 children", () => {
            expect(div2.children.length).toBe(2);
        });

        const submitInput = form2.children[4].children[0]

        it("<input> element returned for submitInput", () => {
            expect(submitInput.tagName).toBe('INPUT')
        })
        
        it("submitInput returned type to be submit", () => {
            expect(submitInput.type).toBe('submit')
        });

        it('return element has correct class of btn for submitInput', () => {
            expect(submitInput.classList.contains('btn')).toBe(true);
        });

        it('return element has correct class of btn-dark for submitInput', () => {
            expect(submitInput.classList.contains('btn-dark')).toBe(true);
        });
        
        it("submitInput has id of registerSubmit", () => {
            expect(submitInput.id).toBe("registerSubmit");
        });

        it("submitInput has innerHTML of Sign Up", () => {
            expect(submitInput.value).toBe("Sign Up");
        });

        const div5 = form2.children[4]

        it("div5 has 2 children", () => {
            expect(div3.children.length).toBe(2);
        });
    });

    describe("renderDashboard", () => {
      
            const content = render.renderDashboard();
    
            it("<main> element returned for content", () => {
                expect(content.tagName).toBe('MAIN')
            })
    
            it("content has id of content", () => {
                expect(content.id).toBe("content");
            });

            const habitList = content.children[0]

            it("habitList has id of habit-list", () => {
                expect(habitList.id).toBe("habit-list");
            });

            it("habitList has 0 children", () => {
                expect(habitList.children.length).toBe(0);
            });

            const cardContainer = content.children[1]
            
            it("cardContainer has 1 child", () => {
                expect(cardContainer.children.length).toBe(1);
            });

            const card = content.children[1].children[0]
    
            it("<div> element returned for card", () => {
                expect(card.tagName).toBe('DIV')
            })
    
            it("card has id of content", () => {
                expect(card.id).toBe("trackerCard");
            });

            it('return element has correct class of card for card', () => {
                expect(card.classList.contains('card')).toBe(true);
            });

            it("card has 1 child", () => {
                expect(card.children.length).toBe(1);
            });

            const cardBody = content.children[1].children[0].children[0]
    
            it("<div> element returned for cardBody", () => {
                expect(cardBody.tagName).toBe('DIV')
            })

            it('return element has correct class of card-body for cardBody', () => {
                expect(cardBody.classList.contains('card-body')).toBe(true);
            });

            it("card has 1 child", () => {
                expect(card.children.length).toBe(1);
            });
    });

    describe("renderNewHabitForm", () => {

            const form = render.renderNewHabitForm();
        
            it("<form> element returned for form", () => {
                expect(form.tagName).toBe('FORM')
            })

            it("form has id of new-habit-form", () => {
                expect(form.id).toBe("new-habit-form");
            });

            const habitLabel = form.children[0]

            it("<label> element returned for habitLabel", () => {
                expect(habitLabel.tagName).toBe('LABEL')
            })

            it("habitLabel returned for to be habitInput", () => {
                expect(habitLabel.for).toBe('habitInput')
            });
            
            it('return element has correct class of form-label for habitLabel', () => {
                expect(habitLabel.classList.contains('form-label')).toBe(true);
            });

            it("habitLabel has innerHTML of Habit", () => {
                expect(habitLabel.innerHTML).toBe("Habit");
            });

            const habitInput = form.children[1]

            it("<input> element returned for habitInput", () => {
                expect(habitInput.tagName).toBe('INPUT')
            })

            it("habitInput returned type to be text", () => {
                expect(habitInput.type).toBe('text')
            });

            it("habitInput has name of habit:", () => {
                expect(habitInput.name).toBe("habit");
            });

            it("habitInput has id of habitInput:", () => {
                expect(habitInput.id).toBe("habitInput");
            });

            it("habitInput has placeholder of Enter the name of the activity you wish to monitor:", () => {
                expect(habitInput.placeholder).toBe("Enter the name of the activity you wish to monitor");
            });
            
            it('return element has correct class of form-control for habitInput', () => {
                expect(habitInput.classList.contains('form-control')).toBe(true);
            });

            const goalLabel = form.children[2]

            it("<label> element returned for goalLabel", () => {
                expect(goalLabel.tagName).toBe('LABEL')
            })

            it("goalLabel returned for to be goalInput", () => {
                expect(goalLabel.for).toBe('goalInput')
            });
            
            it('return element has correct class of form-label for goalLabel', () => {
                expect(goalLabel.classList.contains('form-label')).toBe(true);
            });

            it("goalLabel has innerHTML of Goal", () => {
                expect(goalLabel.innerHTML).toBe("Goal");
            });

            const goalInput = form.children[3]

            it("<input> element returned for goalInput", () => {
                expect(goalInput.tagName).toBe('INPUT')
            })

            it("goalInput returned type to be number", () => {
                expect(goalInput.type).toBe('number')
            });

            it("goalInput has name of goal:", () => {
                expect(goalInput.name).toBe("goal");
            });

            it("goalInput has id of goalInput:", () => {
                expect(goalInput.id).toBe("goalInput");
            });

            it("goalInput has placeholder of how much/many do you wish to complete", () => {
                expect(goalInput.placeholder).toBe("how much/many do you wish to complete");
            });
            
            it('return element has correct class of form-control for goalInput', () => {
                expect(goalInput.classList.contains('form-control')).toBe(true);
            });

            const goalUnitLabel = form.children[4]

            it("<label> element returned for goalUnitLabel", () => {
                expect(goalUnitLabel.tagName).toBe('LABEL')
            })

            it("goalUnitLabel returned for to be unitInput", () => {
                expect(goalUnitLabel.for).toBe('unitInput')
            });
            
            it('return element has correct class of form-label for goalUnitLabel', () => {
                expect(goalUnitLabel.classList.contains('form-label')).toBe(true);
            });

            it("goalUnitLabel has innerHTML of Unit of goal", () => {
                expect(goalUnitLabel.innerHTML).toBe("Unit of goal");
            });

            const goalUnitSelect = form.children[5]

            it("<select> element returned for goalUnitSelect", () => {
                expect(goalUnitSelect.tagName).toBe('SELECT')
            })

            it("goalUnitSelect has name of unit:", () => {
                expect(goalUnitSelect.name).toBe("unit");
            });

            it("goalUnitSelect has id of unitInput:", () => {
                expect(goalUnitSelect.id).toBe("unitInput");
            });
            
            it('return element has correct class of form-select for goalUnitSelect', () => {
                expect(goalUnitSelect.classList.contains('form-select')).toBe(true);
            });

            const goalUnitArray0 = form.children[5].children[0]

            it("<option> element returned for goalUnitArray0", () => {
                expect(goalUnitArray0.tagName).toBe('OPTION')
            })

            it("goalUnitArray0 returned for to be times", () => {
                expect(goalUnitArray0.value).toBe('times')
            });

            it("goalUnitArray0 has innerHTML of times", () => {
                expect(goalUnitArray0.innerHTML).toBe("times");
            });

            it("goalUnitArray0 has 0 children", () => {
                expect(goalUnitArray0.children.length).toBe(0);
            });

            const goalUnitArray1 = form.children[5].children[1]

            it("<option> element returned for goalUnitArray1", () => {
                expect(goalUnitArray1.tagName).toBe('OPTION')
            })

            it("goalUnitArray1 returned for to be minutes", () => {
                expect(goalUnitArray1.value).toBe('minutes')
            });

            it("goalUnitArray1 has innerHTML of minutes", () => {
                expect(goalUnitArray1.innerHTML).toBe("minutes");
            });

            it("goalUnitArray1 has 0 children", () => {
                expect(goalUnitArray1.children.length).toBe(0);
            });

            const goalUnitArray2 = form.children[5].children[2]

            it("<option> element returned for goalUnitArray2", () => {
                expect(goalUnitArray2.tagName).toBe('OPTION')
            })

            it("goalUnitArray2 returned for to be hours", () => {
                expect(goalUnitArray2.value).toBe('hours')
            });

            it("goalUnitArray2 has innerHTML of hours", () => {
                expect(goalUnitArray2.innerHTML).toBe("hours");
            });

            it("goalUnitArray2 has 0 children", () => {
                expect(goalUnitArray2.children.length).toBe(0);
            });

            const goalUnitArray3 = form.children[5].children[3]

            it("<option> element returned for goalUnitArray3", () => {
                expect(goalUnitArray3.tagName).toBe('OPTION')
            })

            it("goalUnitArray3 returned for to be metres", () => {
                expect(goalUnitArray3.value).toBe('metres')
            });

            it("goalUnitArray3 has innerHTML of metres", () => {
                expect(goalUnitArray3.innerHTML).toBe("metres");
            });

            it("goalUnitArray3 has 0 children", () => {
                expect(goalUnitArray3.children.length).toBe(0);
            });
            
            const goalUnitArray4 = form.children[5].children[4]

            it("<option> element returned for goalUnitArray4", () => {
                expect(goalUnitArray4.tagName).toBe('OPTION')
            })

            it("goalUnitArray4 returned for to be kilometres", () => {
                expect(goalUnitArray4.value).toBe('kilometres')
            });

            it("goalUnitArray4 has innerHTML of kilometres", () => {
                expect(goalUnitArray4.innerHTML).toBe("kilometres");
            });

            it("goalUnitArray4 has 0 children", () => {
                expect(goalUnitArray4.children.length).toBe(0);
            });

            const goalUnitArray5 = form.children[5].children[5]

            it("<option> element returned for goalUnitArray5", () => {
                expect(goalUnitArray5.tagName).toBe('OPTION')
            })

            it("goalUnitArray5 returned for to be miles", () => {
                expect(goalUnitArray5.value).toBe('miles')
            });

            it("goalUnitArray5 has innerHTML of miles", () => {
                expect(goalUnitArray5.innerHTML).toBe("miles");
            });

            it("goalUnitArray5 has 0 children", () => {
                expect(goalUnitArray5.children.length).toBe(0);
            });

            const goalUnitArray6 = form.children[5].children[6]

            it("<option> element returned for goalUnitArray6", () => {
                expect(goalUnitArray6.tagName).toBe('OPTION')
            })

            it("goalUnitArray6 returned for to be ounces", () => {
                expect(goalUnitArray6.value).toBe('ounces')
            });

            it("goalUnitArray6 has innerHTML of ounces", () => {
                expect(goalUnitArray6.innerHTML).toBe("ounces");
            });

            it("goalUnitArray6 has 0 children", () => {
                expect(goalUnitArray6.children.length).toBe(0);
            });

            const goalUnitArray7 = form.children[5].children[7]

            it("<option> element returned for goalUnitArray7", () => {
                expect(goalUnitArray7.tagName).toBe('OPTION')
            })

            it("goalUnitArray7 returned for to be cups", () => {
                expect(goalUnitArray7.value).toBe('cups')
            });

            it("goalUnitArray7 has innerHTML of cups", () => {
                expect(goalUnitArray7.innerHTML).toBe("cups");
            });

            it("goalUnitArray7 has 0 children", () => {
                expect(goalUnitArray7.children.length).toBe(0);
            });

            const goalUnitArray8 = form.children[5].children[8]

            it("<option> element returned for goalUnitArray8", () => {
                expect(goalUnitArray8.tagName).toBe('OPTION')
            })

            it("goalUnitArray8 returned for to be millilitres", () => {
                expect(goalUnitArray8.value).toBe('millilitres')
            });

            it("goalUnitArray8 has innerHTML of millilitres", () => {
                expect(goalUnitArray8.innerHTML).toBe("millilitres");
            });

            it("goalUnitArray8 has 0 children", () => {
                expect(goalUnitArray8.children.length).toBe(0);
            });

            const goalUnitArray9 = form.children[5].children[9]

            it("<option> element returned for goalUnitArray9", () => {
                expect(goalUnitArray9.tagName).toBe('OPTION')
            })

            it("goalUnitArray9 returned for to be litres", () => {
                expect(goalUnitArray9.value).toBe('litres')
            });

            it("goalUnitArray9 has innerHTML of litres", () => {
                expect(goalUnitArray9.innerHTML).toBe("litres");
            });

            it("goalUnitArray9 has 0 children", () => {
                expect(goalUnitArray9.children.length).toBe(0);
            });

            const goalUnitArray10 = form.children[5].children[10]

            it("<option> element returned for goalUnitArray10", () => {
                expect(goalUnitArray10.tagName).toBe('OPTION')
            })

            it("goalUnitArray10 returned for to be pounds", () => {
                expect(goalUnitArray10.value).toBe('pounds')
            });

            it("goalUnitArray10 has innerHTML of pounds", () => {
                expect(goalUnitArray10.innerHTML).toBe("pounds");
            });

            it("goalUnitArray10 has 0 children", () => {
                expect(goalUnitArray10.children.length).toBe(0);
            });

            const goalUnitArray11 = form.children[5].children[11]

            it("<option> element returned for goalUnitArray11", () => {
                expect(goalUnitArray11.tagName).toBe('OPTION')
            })

            it("goalUnitArray11 returned for to be stones", () => {
                expect(goalUnitArray11.value).toBe('stones')
            });

            it("goalUnitArray11 has innerHTML of stones", () => {
                expect(goalUnitArray11.innerHTML).toBe("stones");
            });

            it("goalUnitArray11 has 0 children", () => {
                expect(goalUnitArray11.children.length).toBe(0);
            });

            const goalUnitArray12 = form.children[5].children[12]

            it("<option> element returned for goalUnitArray12", () => {
                expect(goalUnitArray12.tagName).toBe('OPTION')
            })

            it("goalUnitArray12 returned for to be kilograms", () => {
                expect(goalUnitArray12.value).toBe('kilograms')
            });

            it("goalUnitArray12 has innerHTML of kilograms", () => {
                expect(goalUnitArray12.innerHTML).toBe("kilograms");
            });

            it("goalUnitArray12 has 0 children", () => {
                expect(goalUnitArray12.children.length).toBe(0);
            });

            const goalDurationLabel = form.children[6]

            it("<label> element returned for goalDurationLabel", () => {
                expect(goalDurationLabel.tagName).toBe('LABEL')
            })

            it("goalDurationLabel returned for to be durationInput", () => {
                expect(goalDurationLabel.for).toBe('durationInput')
            });
            
            it('return element has correct class of form-label for goalDurationLabel', () => {
                expect(goalDurationLabel.classList.contains('form-label')).toBe(true);
            });

            it("goalDurationLabel has innerHTML of Goal duration:", () => {
                expect(goalDurationLabel.innerHTML).toBe("Goal duration:");
            });

            const goalDurationSelect = form.children[7]

            it("<select> element returned for goalDurationSelect", () => {
                expect(goalDurationSelect.tagName).toBe('SELECT')
            })

            it("goalDurationSelect has name of duration", () => {
                expect(goalDurationSelect.name).toBe("duration");
            });

            it("goalDurationSelect has id of durationInput", () => {
                expect(goalDurationSelect.id).toBe("durationInput");
            });
            
            it('return element has correct class of form-select for goalDurationSelect', () => {
                expect(goalDurationSelect.classList.contains('form-select')).toBe(true);
            });

            const goalDurationArray0 = form.children[7].children[0]

            it("<option> element returned for goalDurationArray0", () => {
                expect(goalDurationArray0.tagName).toBe('OPTION')
            })

            it("goalDurationArray0 returned for to be 3600000", () => {
                expect(goalDurationArray0.value).toBe('3600000')
            });

            it("goalDurationArray0 has innerHTML of hour", () => {
                expect(goalDurationArray0.innerHTML).toBe("hour");
            });

            const goalDurationArray1 = form.children[7].children[1]

            it("<option> element returned for goalDurationArray1", () => {
                expect(goalDurationArray1.tagName).toBe('OPTION')
            })

            it("goalDurationArray1 returned for to be 86400000", () => {
                expect(goalDurationArray1.value).toBe('86400000')
            });

            it("goalDurationArray1 has innerHTML of day", () => {
                expect(goalDurationArray1.innerHTML).toBe("day");
            });

            const goalDurationArray2 = form.children[7].children[2]

            it("<option> element returned for goalDurationArray2", () => {
                expect(goalDurationArray2.tagName).toBe('OPTION')
            })

            it("goalDurationArray2 returned for to be 604800000", () => {
                expect(goalDurationArray2.value).toBe('604800000')
            });

            it("goalDurationArray2 has innerHTML of week", () => {
                expect(goalDurationArray2.innerHTML).toBe("week");
            });

            const goalDurationArray3 = form.children[7].children[3]

            it("<option> element returned for goalDurationArray3", () => {
                expect(goalDurationArray3.tagName).toBe('OPTION')
            })

            it("goalDurationArray3 returned for to be 2419200000", () => {
                expect(goalDurationArray3.value).toBe('2419200000')
            });

            it("goalDurationArray3 has innerHTML of month", () => {
                expect(goalDurationArray3.innerHTML).toBe("month");
            });

            const goalDurationArray4 = form.children[7].children[4]

            it("<option> element returned for goalDurationArray4", () => {
                expect(goalDurationArray4.tagName).toBe('OPTION')
            })

            it("goalDurationArray4 returned for to be 31536000000", () => {
                expect(goalDurationArray4.value).toBe('31536000000')
            });

            it("goalDurationArray4 has innerHTML of year", () => {
                expect(goalDurationArray4.innerHTML).toBe("year");
            });

            const submitAddTracker = form.children[8]

            it("<input> element returned for submitAddTracker", () => {
                expect(submitAddTracker.tagName).toBe('INPUT')
            })
            
            it("submitAddTracker returned type to be submit", () => {
                expect(submitAddTracker.type).toBe('submit')
            });
    
            it('return element has correct class of btn for submitAddTracker', () => {
                expect(submitAddTracker.classList.contains('btn')).toBe(true);
            });
    
            it('return element has correct class of btn-success for submitAddTracker', () => {
                expect(submitAddTracker.classList.contains('btn-success')).toBe(true);
            });
            
            it("submitAddTracker has id of submitAddTracker", () => {
                expect(submitAddTracker.id).toBe("submitAddTracker");
            });
    
            it("submitAddTracker has innerHTML of Add tracker", () => {
                expect(submitAddTracker.value).toBe("Add tracker");
            });
    
            it("habitLabel has 0 children", () => {
                expect(habitLabel.children.length).toBe(0);
            });

            it("habitInput has 0 children", () => {
                expect(habitInput.children.length).toBe(0);
            });

            it("goalLabel has 0 children", () => {
                expect(goalLabel.children.length).toBe(0);
            });

            it("goalInput has 0 children", () => {
                expect(goalInput.children.length).toBe(0);
            });

            it("goalUnitLabel has 0 children", () => {
                expect(goalUnitLabel.children.length).toBe(0);
            });

            it("goalUnitSelect has 13 children", () => {
                expect(goalUnitSelect.children.length).toBe(13);
            });

            it("goalDurationLabel has 0 children", () => {
                expect(goalDurationLabel.children.length).toBe(0);
            });

            it("goalDurationSelect has 5 children", () => {
                expect(goalDurationSelect.children.length).toBe(5);
            });

            it("submitAddTracker has 0 children", () => {
                expect(submitAddTracker.children.length).toBe(0);
            });
    });

    describe("renderHabitList", () => {
        const mockData = [
            {
                "_id": "62179f3f0fa1dd12b1546fcf",
                "user": "62168f419dd6daf876f26485",
                "habit": "test habit",
                "goal": 5,
                "unit": "times",
                "creationDate": 1645715263467,
                "duration": 86400000,
                "history": [
                    {
                        "time": 1645715294392,
                        "amount": 3
                    }
                ],
                "durationAsString": "day",
                "streak": 0,
                "progress": 3,
                "progressPercentage": 60,
                "timeUntilReset": "23 hours 37 minutes",
                "consistency": [
                    {
                        length: 100,
                        color: "#00000000"
                    }
                ]
            }
        ];
        const container = render.renderHabitList(mockData);
    
        it("<section> element returned for container", () => {
            expect(container.tagName).toBe('SECTION')
        })

        it("container has id of habit-list", () => {
            expect(container.id).toBe("habit-list");
        });

        const table = container.children[0]

        it("<table> element returned for table", () => {
            expect(table.tagName).toBe('TABLE')
        })

        it('return element has correct class of table for table', () => {
            expect(table.classList.contains('table')).toBe(true);
        });

        it('return element has correct class of table-striped for table', () => {
            expect(table.classList.contains('table-striped')).toBe(true);
        });

        it("table has 2 children", () => {
            expect(table.children.length).toBe(2);
        });

        const thead = table.children[0];

        it("<thead> element returned for thead", () => {
            expect(thead.tagName).toBe('THEAD')
        })

        it("thead has 1 child", () => {
            expect(thead.children.length).toBe(1);
        });

        const tr = thead.children[0];

        it("<tr> element returned for tr", () => {
            expect(tr.tagName).toBe('TR')
        })

        it('return element has correct class of text-center for tr', () => {
            expect(tr.classList.contains('text-center')).toBe(true);
        });

        it("tr has 4 children", () => {
            expect(tr.children.length).toBe(4);
        });

        const th0 = tr.children[0];

        it("<th> element returned for th0", () => {
            expect(th0.tagName).toBe('TH')
        })

        it('correct heading text for th0', () => {
            expect(th0.innerHTML).toBe("Habit");
        });

        
        const th1 = tr.children[1];

        it("<th> element returned for th1", () => {
            expect(th1.tagName).toBe('TH')
        })

        it('correct heading text for th1', () => {
            expect(th1.innerHTML).toBe("Progress");
        });

        const th2 = tr.children[2];

        it("<th> element returned for th2", () => {
            expect(th2.tagName).toBe('TH')
        })

        it('correct heading text for th2', () => {
            expect(th2.innerHTML).toBe("Goal");
        });

        const th3 = tr.children[3];

        it("<th> element returned for th3", () => {
            expect(th3.tagName).toBe('TH')
        })

        it('correct heading text for th3', () => {
            expect(th3.innerHTML).toBe("Progression");
        });

        const tbody = table.children[1]

        it("<tbody> element returned for tbody", () => {
            expect(tbody.tagName).toBe('TBODY')
        })

        it("tbody has 1 child", () => {
            expect(tbody.children.length).toBe(1);
        });

        // // DONT KNOW HOW TO TEST LINE 319-339 IN render.js

        const progCol = tbody.children[0].children[3];

        it("<td> element returned for progCol", () => {
            expect(progCol.tagName).toBe('TD')
        })

        it('return element has correct class of align-middle for progCol', () => {
            expect(progCol.classList.contains('align-middle')).toBe(true);
        });

        it("progCol has 1 child", () => {
            expect(progCol.children.length).toBe(1);
        })

        const progContainer = progCol.children[0]

        it("<div> element returned for progContainer", () => {
            expect(progContainer.tagName).toBe('DIV')
        })

        it('return element has correct class of progress for progContainer', () => {
            expect(progContainer.classList.contains('progress')).toBe(true);
        });

        it("progContainer has 1 child", () => {
            expect(progContainer.children.length).toBe(1);
        })

        const progBar = progContainer.children[0];

        it("<div> element returned for progBar", () => {
            expect(progBar.tagName).toBe('DIV')
        })

        it('return element has correct class of progress-bar for progBar', () => {
            expect(progBar.classList.contains('progress-bar')).toBe(true);
        });

        it("aria-valuenow attribute of progress bar is correct", () => {
            expect(parseInt(progBar.getAttribute("aria-valuenow"))).toBe(mockData[0].progressPercentage);
        })

        it("progBar has 1 child", () => {
            expect(progBar.children.length).toBe(0);
        })

        it("tbody has 1 child", () => {
            expect(tbody.children.length).toBe(1);
        })
    });

    describe("renderHabitInfo", () => {
        const mockData = {
            "_id": "62179f3f0fa1dd12b1546fcf",
            "user": "62168f419dd6daf876f26485",
            "habit": "test habit",
            "goal": 5,
            "unit": "times",
            "creationDate": 1645715263467,
            "duration": 86400000,
            "history": [
                {
                    "time": 1645715294392,
                    "amount": 3
                }
            ],
            "durationAsString": "day",
            "streak": 0,
            "progress": 3,
            "progressPercentage": 60,
            "timeUntilReset": "23 hours 37 minutes",
            "consistency": [
                {
                    length: 100,
                    color: "#00000000"
                }
            ]
        };

        const container = render.renderHabitInfo(mockData);
    
        it("<div> element returned for container", () => {
            expect(container.tagName).toBe('DIV');
        });

        it("container has id of habit-list", () => {
            expect(container.classList.contains('card-body')).toBe(true);
        });
        
        it("container has 3 children", () => {
            expect(container.children.length).toBe(3);
        });

        const h2 = container.children[0];

        it("<h2> element returned for heading", () => {
            expect(h2.tagName).toBe('H2');
        });
        
        it("<h2> has textContent of 'Stats'", () => {
            expect(h2.textContent).toBe("Stats");
        });

        const delBtn = container.children[1];

        it("<button> element returned for delBtn", () => {
            expect(delBtn.tagName).toBe('BUTTON');
        });

        it("delBtn returned id to be delete-btn", () => {
            expect(delBtn.id).toBe('delete-btn');
        });
        
        it('return element has correct class of btn for delBtn', () => {
            expect(delBtn.classList.contains('btn')).toBe(true);
        });

        it('return element has correct class of btn-danger for delBtn', () => {
            expect(delBtn.classList.contains('btn-danger')).toBe(true);
        });

        it("delBtn has correct data-hid attribute", () => {
            expect(delBtn.dataset.hid).toBe(mockData._id);
        });

        it("delBtn has correct text", () => {
            expect(delBtn.textContent).toBe("Delete");
        });

        it("delBtn has 0 children", () => {
            expect(delBtn.children.length).toBe(0);
        });

        const table2 = container.children[2];
        const tbody2 = table2.children[0];

        it("<table> element returned for table2", () => {
            expect(table2.tagName).toBe('TABLE')
        })

        it("<tbody> element returned for tbody2", () => {
            expect(tbody2.tagName).toBe('TBODY')
        })
        
        it('return element has correct class of table for table2', () => {
            expect(table2.classList.contains('table')).toBe(true);
        });

        it('return element has correct class of table-striped for table2', () => {
            expect(table2.classList.contains('table-striped')).toBe(true);
        });

        it("table2 has 1 child", () => {
            expect(table2.children.length).toBe(1);
        });
            
        it("tbody2 has 7 children", () => {
            expect(tbody2.children.length).toBe(7);
        });

        const habitRow = tbody2.children[0];
        const habitLabelCol = habitRow.children[0];


        it("<tr> element returned for habitRow", () => {
            expect(habitRow.tagName).toBe('TR');
        })

        it("<td> element returned for habitLabelCol", () => {
            expect(habitLabelCol.tagName).toBe('TD');
        })
        
        it("habitLabelCol has innerHTML of Habit", () => {
            expect(habitLabelCol.innerHTML).toBe("Habit");
        });

        it("habitLabelCol has 0 children", () => {
            expect(habitLabelCol.children.length).toBe(0);
        });

        const habitCol = habitRow.children[1];

        
        it("<td> element returned for habitCol", () => {
            expect(habitCol.tagName).toBe('TD');
        })
        
        it("habitCol has correct text", () => {
            expect(habitCol.textContent).toBe(mockData.habit);
        });

        it("habitRow has 2 children", () => {
            expect(habitRow.children.length).toBe(2);
        });

        const progressRow = tbody2.children[1];
        const progressLabelCol = progressRow.children[0];


        it("<tr> element returned for progressRow", () => {
            expect(progressRow.tagName).toBe('TR')
        })

        it("<td> element returned for progressLabelCol", () => {
            expect(progressLabelCol.tagName).toBe('TD')
        })
        
        it("progressLabelCol has innerHTML of Progress", () => {
            expect(progressLabelCol.innerHTML).toBe("Progress");
        });

        it('return element has correct class of align-middle for progressLabelCol', () => {
            expect(progressLabelCol.classList.contains('align-middle')).toBe(true);
        });

        it("progressLabelCol has 0 children", () => {
            expect(progressLabelCol.children.length).toBe(0);
        });

        const progressCol = progressRow.children[1];

        
        it("<td> element returned for progressCol", () => {
            expect(progressCol.tagName).toBe('TD')
        })
        
        it("progressCol has correct text", () => {
            expect(progressCol.firstChild.textContent).toBe("3 times");
        });

        it("progressCol has 2 children", () => {
            expect(progressCol.children.length).toBe(2);
        });

        
        const progressInput = progressCol.children[0];

        it("<input> element returned for progressInput", () => {
            expect(progressInput.tagName).toBe('INPUT')
        })

        it("progressInput returned type to be text", () => {
            expect(progressInput.type).toBe('text')
        });

        it("progressInput has id of update-prog-input", () => {
            expect(progressInput.id).toBe("update-prog-input");
        });

        it("progressInput has placeholder of add progress", () => {
            expect(progressInput.placeholder).toBe("add progress");
        });
        
        it('progressInput has correct initial width', () => {
            expect(progressInput.style.width).toBe("0px");
        });

        it("progressInput has 0 children", () => {
            expect(progressInput.children.length).toBe(0);
        });

        const progressInputButton = progressCol.children[1];

        it("<button> element returned for progressInputButton", () => {
            expect(progressInputButton.tagName).toBe('BUTTON')
        })
    
        it("progressInputButton returned id to be update-btn", () => {
            expect(progressInputButton.id).toBe('update-btn')
        });
                
        it('return element has correct class of btn for progressInputButton', () => {
            expect(progressInputButton.classList.contains('btn')).toBe(true);
        });

        it('return element has correct class of btn-dark for progressInputButton', () => {
            expect(progressInputButton.classList.contains('btn-dark')).toBe(true);
        });

        it('return element has correct class of btn-sm for progressInputButton', () => {
            expect(progressInputButton.classList.contains('btn-sm')).toBe(true);
        });

        it("progressInputButton has correct data-hid attribute", () => {
            expect(progressInputButton.dataset.hid).toBe(mockData._id);
        });
    
        it("progressInputButton has innerHTML of +", () => {
            expect(progressInputButton.innerHTML).toBe("+");
        });

        it("progressInputButton has 0 children", () => {
            expect(progressInputButton.children.length).toBe(0);
        });

        it("progressRow has 2 children", () => {
            expect(progressRow.children.length).toBe(2);
        });

        
        const goalRow = tbody2.children[2];
        const goalLabelCol = goalRow.children[0];


        it("<tr> element returned for goalRow", () => {
            expect(goalRow.tagName).toBe('TR')
        })

        it("<td> element returned for goalLabelCol", () => {
            expect(goalLabelCol.tagName).toBe('TD')
        })
        
        it("goalLabelCol has innerHTML of Goal", () => {
            expect(goalLabelCol.innerHTML).toBe("Goal");
        });

        const goalCol = goalRow.children[1]

        
        it("<td> element returned for goalCol", () => {
            expect(goalCol.tagName).toBe('TD')
        })
        
        it("goalCol has correct text", () => {
            expect(goalCol.textContent).toBe("5 times/day");
        });

        it("goalRow has 2 children", () => {
            expect(goalRow.children.length).toBe(2);
        });

        const progbarRow = tbody2.children[3];
        const progBarLabelCol = progbarRow.children[0];


        it("<tr> element returned for progbarRow", () => {
            expect(progbarRow.tagName).toBe('TR')
        })

        it("<td> element returned for progBarLabelCol", () => {
            expect(progBarLabelCol.tagName).toBe('TD')
        })
        
        it("progBarLabelCol has innerHTML of Progression", () => {
            expect(progBarLabelCol.innerHTML).toBe("Progression");
        });

        it("progBarLabelCol has 0 children", () => {
            expect(progBarLabelCol.children.length).toBe(0);
        });

        const progCol = progbarRow.children[1];

        it("<td> element returned for progCol", () => {
            expect(progCol.tagName).toBe('TD')
        })
        
        it('return element has correct class of align-middle for progCol', () => {
            expect(progCol.classList.contains('align-middle')).toBe(true);
        });

        it("progCol has 1 child", () => {
            expect(progCol.children.length).toBe(1);
        });

        const progContainer2 = progCol.children[0];

        it("<div> element returned for progContainer2", () => {
            expect(progContainer2.tagName).toBe('DIV');
        })
        
        it('return element has correct class of progress for progContainer2', () => {
            expect(progContainer2.classList.contains('progress')).toBe(true);
        });

        it("progContainer2 has 1 child", () => {
            expect(progContainer2.children.length).toBe(1);
        });

        const progBar = progContainer2.children[0];

        it("<div> element returned for progBar", () => {
            expect(progBar.tagName).toBe('DIV');
        });

        it('return element has correct class of progress-bar for progBar', () => {
            expect(progBar.classList.contains('progress-bar')).toBe(true);
        });

        it("progBar element has the correct aria-valuenow attribute", () => {
            expect(parseInt(progBar.getAttribute('aria-valuenow'))).toBe(mockData.progressPercentage);
        });

        it("progbarRow has 1 child", () => {
            expect(progbarRow.children.length).toBe(2);
        });

        const streakRow = tbody2.children[4];
        const streakLabelCol = streakRow.children[0];


        it("<tr> element returned for streakRow", () => {
            expect(streakRow.tagName).toBe('TR')
        });

        it("<td> element returned for streakLabelCol", () => {
            expect(streakLabelCol.tagName).toBe('TD')
        });
        
        it("streakLabelCol has innerHTML of Streak", () => {
            expect(streakLabelCol.innerHTML).toBe("Streak");
        });

        it("streakLabelCol has 0 children", () => {
            expect(streakLabelCol.children.length).toBe(0);
        });

        const streakCol = streakRow.children[1];
        
        it("<td> element returned for steakCol", () => {
            expect(streakCol.tagName).toBe('TD');
        });
        
        it("steakCol has correct innerHTML", () => {
            expect(streakCol.innerHTML).toBe("0 day");
        });

        it("streakRow has 2 children", () => {
            expect(streakRow.children.length).toBe(2);
        });

        const resetRow = tbody2.children[5];
        const resetLabelCol = resetRow.children[0];


        it("<tr> element returned for resetRow", () => {
            expect(resetRow.tagName).toBe('TR')
        })

        it("<td> element returned for resetLabelCol", () => {
            expect(resetLabelCol.tagName).toBe('TD')
        })
        
        it("resetLabelCol has innerHTML of Next reset", () => {
            expect(resetLabelCol.innerHTML).toBe("Next reset");
        });

        const resetCol = resetRow.children[1];

        
        it("<td> element returned for resetCol", () => {
            expect(resetCol.tagName).toBe('TD')
        })
        
        it("resetCol has correct textContent", () => {
            expect(resetCol.textContent).toBe(mockData.timeUntilReset);
        });

        const consistencyBarRow = tbody2.children[6];
        const consistencyBarLabelCol = consistencyBarRow.children[0];

        
        it("<tr> element returned for consistencyBarRow", () => {
            expect(consistencyBarRow.tagName).toBe('TR');
        });

        it("consistencyBarRow has 2 children", () => {
            expect(consistencyBarRow.children.length).toBe(2);
        });
        
        it("<td> element returned for consistencyBarLabelCol", () => {
            expect(consistencyBarLabelCol.tagName).toBe('TD');
        });

        it("consistencyBarLabelCol has textContent of 'Consistency'", () => {
            expect(consistencyBarLabelCol.textContent).toBe("Consistency");
        });

        it("consistencyBarLabelCol has 0 children", () => {
            expect(consistencyBarLabelCol.children.length).toBe(0);
        });

        const consistencyCol = consistencyBarRow.children[1];

        it("<td> element returned for consistencyCol", () => {
            expect(consistencyCol.tagName).toBe('TD')
        })

        it('return element has correct class of align-middle for consistencyCol', () => {
            expect(consistencyCol.classList.contains('align-middle')).toBe(true);
        });

        const consistencyContainer = consistencyCol.children[0];

        it("<div> element returned for consistencyContainer", () => {
            expect(consistencyContainer.tagName).toBe('DIV');
        });

        it('return element has correct class of progress for consistencyContainer', () => {
            expect(consistencyContainer.classList.contains('progress')).toBe(true);
        });

        const consistencyBar = consistencyContainer.children[0];

        it("<div> element returned for consistencyBar", () => {
            expect(consistencyBar.tagName).toBe('DIV');
        });

        it('return element has correct class of progress-bar for consistencyBar', () => {
            expect(consistencyBar.classList.contains('progress-bar')).toBe(true);
        });
    });
});
