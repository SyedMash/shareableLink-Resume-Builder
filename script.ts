const subtn = document.querySelector("#subtn") as HTMLButtonElement;
const form = document.querySelector("form") as HTMLFormElement;
const result = document.querySelector("#result") as HTMLButtonElement;
const editbtn = document.querySelector("#editBtn") as HTMLButtonElement;

// data from form
const namme = document.querySelector("#name") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;
const number = document.querySelector("#number") as HTMLInputElement;
const edu = document.querySelector("#edu") as HTMLInputElement;
const work = document.querySelector("#work") as HTMLInputElement;
const skills = document.querySelector("#skills") as HTMLInputElement;

// data to show
const showname = document.querySelector("#showname") as HTMLHeadingElement;
const showemail = document.querySelector("#showemail") as HTMLHeadingElement;
const shownumber = document.querySelector("#shownumber") as HTMLHeadingElement;
const showedu = document.querySelector("#showedu") as HTMLHeadingElement;
const showork = document.querySelector("#showork") as HTMLHeadingElement;
const showskills = document.querySelector("#showskills") as HTMLDivElement;
const shareLinkCont = document.querySelector(
  "#shareAbleLinkCont"
) as HTMLDivElement;
const shareLinkAnchor = document.querySelector("#getLink") as HTMLAnchorElement;
const downloadPdf = document.querySelector("#download") as HTMLButtonElement

//click event on generate button
subtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    namme.value !== "" &&
    email.value !== "" &&
    number.value !== "" &&
    edu.value !== "" &&
    work.value !== "" &&
    skills.value !== ""
  ) {
    form.style.display = "none";
    result.style.display = "flex";
    editbtn.style.display = "block";

    showname.innerHTML = `Name: ${namme.value}`;
    showemail.innerHTML = `Email: ${email.value}`;
    shownumber.innerHTML = `Number: ${number.value}`;
    showedu.innerHTML = `Education: ${edu.value}`;
    showork.innerHTML = `Work Experience: ${work.value}`;
        skills.value.split(",").forEach((e) => {
            const skillElement = document.createElement("h3");
            skillElement.classList.add("setSkills");
            skillElement.textContent = e.trim();
            showskills.appendChild(skillElement);
        });

    const queryString = new URLSearchParams({
      username: namme.value,
      email: email.value,
      number: number.value,
      edu: edu.value,
      work: work.value,
      skills: skills.value,
    });

    const link = `${window.location.origin}?${queryString}`;
    shareLinkAnchor.href = link;
    shareLinkCont.style.display = "flex";
    shareLinkAnchor.textContent = "Your Link";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const param = new URLSearchParams(window.location.search);
  if (param.has("username")) {
    (form.style.display = "none"), (result.style.display = "flex");
  }
  const username = param.get("username") || "";
  const emailVal = param.get("email") || "";
  const numberVal = param.get("number") || "";
  const eduVal = param.get("edu") || "";
  const workVal = param.get("work") || "";
  const skillsVal = param.get("skills") || "";

  showname.innerHTML = `Name: ${username}`;
  showemail.innerHTML = `Email: ${emailVal}`;
  shownumber.innerHTML = `Number: ${numberVal}`;
  showedu.innerHTML = `Education: ${eduVal}`;
  showork.innerHTML = `Work Experience: ${workVal}`;

  if(skillsVal.trim() !== ""){
      skillsVal.split(",").forEach((e) => {
          const skillElement = document.createElement("h3");
          skillElement.classList.add("setSkills");
          skillElement.textContent = e.trim();
          showskills.appendChild(skillElement);
          subtn.style.display = "block
        });
    }
});

//edit button event listener to edit the values
editbtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "flex";
  result.style.display = "none";
  editbtn.style.display = "none";
  shareLinkCont.style.display = "none";

  while (showskills.firstChild) {
    showskills.removeChild(showskills.firstChild);
  }
});


//download as pdf function
downloadPdf.addEventListener("click", () => {
  shareLinkCont.style.display = "none"
  subtn.style.display = "none"
  window.print()
})
