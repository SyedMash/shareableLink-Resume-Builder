var subtn = document.querySelector("#subtn");
var form = document.querySelector("form");
var result = document.querySelector("#result");
var editbtn = document.querySelector("#editBtn");
// data from form
var namme = document.querySelector("#name");
var email = document.querySelector("#email");
var number = document.querySelector("#number");
var edu = document.querySelector("#edu");
var work = document.querySelector("#work");
var skills = document.querySelector("#skills");
// data to show
var showname = document.querySelector("#showname");
var showemail = document.querySelector("#showemail");
var shownumber = document.querySelector("#shownumber");
var showedu = document.querySelector("#showedu");
var showork = document.querySelector("#showork");
var showskills = document.querySelector("#showskills");
var shareLinkCont = document.querySelector("#shareAbleLinkCont");
var shareLinkAnchor = document.querySelector("#getLink");
var downloadPdf = document.querySelector("#download");
//click event on generate button
subtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (namme.value !== "" &&
        email.value !== "" &&
        number.value !== "" &&
        edu.value !== "" &&
        work.value !== "" &&
        skills.value !== "") {
        form.style.display = "none";
        result.style.display = "flex";
        editbtn.style.display = "block";
        showname.innerHTML = "Name: ".concat(namme.value);
        showemail.innerHTML = "Email: ".concat(email.value);
        shownumber.innerHTML = "Number: ".concat(number.value);
        showedu.innerHTML = "Education: ".concat(edu.value);
        showork.innerHTML = "Work Experience: ".concat(work.value);
        skills.value.split(",").forEach(function (e) {
            var skillElement = document.createElement("h3");
            skillElement.classList.add("setSkills");
            skillElement.textContent = e.trim();
            showskills.appendChild(skillElement);
        });
        var queryString = new URLSearchParams({
            username: namme.value,
            email: email.value,
            number: number.value,
            edu: edu.value,
            work: work.value,
            skills: skills.value,
        });
        var link = "".concat(window.location.origin, "?").concat(queryString);
        shareLinkAnchor.href = link;
        shareLinkCont.style.display = "flex";
        shareLinkAnchor.textContent = "Your Link";
    }
});
window.addEventListener("DOMContentLoaded", function () {
    var param = new URLSearchParams(window.location.search);
    if (param.has("username")) {
        (form.style.display = "none"), (result.style.display = "flex");
    }
    var username = param.get("username") || "";
    var emailVal = param.get("email") || "";
    var numberVal = param.get("number") || "";
    var eduVal = param.get("edu") || "";
    var workVal = param.get("work") || "";
    var skillsVal = param.get("skills") || "";
    showname.innerHTML = "Name: ".concat(username);
    showemail.innerHTML = "Email: ".concat(emailVal);
    shownumber.innerHTML = "Number: ".concat(numberVal);
    showedu.innerHTML = "Education: ".concat(eduVal);
    showork.innerHTML = "Work Experience: ".concat(workVal);
    if (skillsVal.trim() !== "") {
        skillsVal.split(",").forEach(function (e) {
            var skillElement = document.createElement("h3");
            skillElement.classList.add("setSkills");
            skillElement.textContent = e.trim();
            showskills.appendChild(skillElement);
        });
    }
});
//edit button event listener to edit the values
editbtn.addEventListener("click", function (e) {
    e.preventDefault();
    form.style.display = "flex";
    result.style.display = "none";
    editbtn.style.display = "none";
    subtn.style.display = "block"
    shareLinkCont.style.display = "none";
    while (showskills.firstChild) {
        showskills.removeChild(showskills.firstChild);
    }
});
//download as pdf function
downloadPdf.addEventListener("click", function () {
    shareLinkCont.style.display = "none";
    subtn.style.display = "none";
    window.print();
});
