const { renderLoginForm, renderRegisterForm, renderHabitList, renderHome, renderNewHabitForm, renderHabitInfo } = require("./render");

function showHome(){
    const newContent = renderHome();
    const content = document.querySelector("#content");
    content.replaceWith(newContent);
    return newContent;
}

function showHabits(habitData){
    const newHabitList = renderHabitList(habitData);
    const habitList = document.querySelector("#habit-list");
    habitList.replaceWith(newHabitList);
    return newHabitList;
}

function showHabitInfo(habitData){
    const newInfo = renderHabitInfo(habitData);
    const info = document.querySelector("#habit-info");
    info.replaceWith(newInfo);
}

function showLoginForm(){
    const newForm = renderLoginForm();
    return module.exports.showForm(newForm);
}

function showRegisterForm(){
    const newForm = renderRegisterForm();
    return module.exports.showForm(newForm);
}

function showNewHabitForm(){
    const newForm = renderNewHabitForm();
    return module.exports.showForm(newForm);
}

function showForm(newForm){
    const form = document.querySelector("form");
    form.replaceWith(newForm);
    return newForm;
}

function updateNavigation(){
    const newLinks = module.exports.isLoggedIn() ? ["logout"] : ["login", "register"];
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        if(newLinks.includes(link.dataset.page)){
            link.parentElement.classList.remove("d-none");
        } else {
            link.parentElement.classList.add("d-none");
        }
    });
}

function isLoggedIn(){
    const token = localStorage.getItem("token");
    if(token){
        try {
            return !!jwt_decode(token);
        } catch (error) {
            return false;
        }
    }
    return false;
}

function decodeToken(){
    const token = localStorage.getItem("token");
    return jwt_decode(token);
}

function navLinkEvent(page){
    return {
        target: {
            dataset: {page}
        },
        preventDefault: new Function()
    }
}

testingExports = {
    showForm, isLoggedIn
};

module.exports = {
    showLoginForm, showRegisterForm, showNewHabitForm, showHabits, showHabitInfo, showHome, updateNavigation, decodeToken, navLinkEvent, ...testingExports
};
