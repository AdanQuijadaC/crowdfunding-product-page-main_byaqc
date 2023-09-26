//*********** Local Storage Simulation  ***********//
const total = localStorage.getItem("amount");
const checkedPledgeLocal = localStorage.getItem("checkedPledge");
const checkedBambooLocal = localStorage.getItem("checkedBamboo");
const checkedBlackLocal = localStorage.getItem("checkedBlack");
const checkedMahoganyLocal = localStorage.getItem("checkedMahogany");

if (total !== null) {
  if (document.querySelector('[data-amount="total"]')) {
    const dataAmount = document.querySelector('[data-amount="total"]');
    dataAmount.textContent = parseInt(total).toLocaleString();

    // calculating percentage bar
    let calculatePorcentage = (
      (parseInt(dataAmount.textContent) / 100000) *
      100
    ).toFixed(4);

    const dataProgress = document.getElementById("bar");
    dataProgress.style.width = `${calculatePorcentage}%`;
  }
} else {
  document.querySelector('[data-amount="total"]').textContent = "0";
}

//*********** Toggle Menu  ***********//
const hambuger = document.querySelector("#hamburger");
const closeMenu = document.querySelector("#closeMenu");
const nav = document.querySelector("#nav");
nav.classList.add("hidden");

hambuger.addEventListener("click", () => {
  closeMenu.classList.remove("hidden");
  hambuger.classList.add("hidden");
  nav.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.add("hidden");
  hambuger.classList.remove("hidden");

  nav.classList.add("hidden");
});

//*********** Trigger Start Modal  ***********//
const startModal = document.querySelector("#startModal");
const startClose = document.querySelector("#startClose");
const completedModal = document.querySelector("#completedModal");
startClose.addEventListener("click", () => {
  startModal.classList.add("hidden");
});

const backThisProject = document.querySelector("#backproject");
backThisProject.addEventListener("click", () => {
  startModal.classList.remove("hidden");
});

//*********** DOM Elements  ***********//
const checkedPledge = document.querySelector("#checkedPledge");
const checkedBamboo = document.querySelector("#checkedBamboo");
const checkedBlack = document.querySelector("#checkedBlack");
const checkedMahogany = document.querySelector("#checkedMahogany");

const bambooStand = document.getElementById("bambooStand");
const blackEdition = document.getElementById("blackEdition");

const cardPledge = document.querySelector('[data-card="pledge"]');
const cardBamboo = document.querySelector('[data-card="bamboo"]');
const cardBlack = document.querySelector('[data-card="black"]');
const cardMahogany = document.querySelector('[data-card="mahogany"]');

//*********** Events Check Radio  ***********//
checkedPledge.addEventListener("click", () => {
  if (checkedPledge.checked) {
    console.log("checked");

    checkedBamboo.disabled = true;
    checkedBlack.disabled = true;
    checkedMahogany.disabled = true;

    document.querySelector('[data-target="pledge"]').classList.remove("hidden");

    cardPledge.classList.add("border-cyan");
    localStorage.setItem("checkedPledge", true);

    if (!document.querySelector('[data-template="inputPledgeContent"]')) {
      const fragment = document.createDocumentFragment();

      const divOne = document.createElement("div");
      divOne.setAttribute(
        "class",
        "border-t-[1px] md:flex md:justify-between md:p-6 md:pb-0"
      );
      divOne.setAttribute("data-template", "inputPledgeContent");

      const pOne = document.createElement("p");
      pOne.setAttribute("class", "text-center text-[#7a7a7a] py-5");
      pOne.textContent = "Enter your pledge";

      const divTwo = document.createElement("div");
      divTwo.setAttribute("class", "flex justify-center gap-5");
      const divThree = document.createElement("div");
      divThree.setAttribute(
        "class",
        "flex rounded-[2rem] border-[1px] px-8 py-3 gap-2 items-center"
      );
      const spaOne = document.createElement("span");
      spaOne.setAttribute("class", "text-[#7a7a7a] font-bold");
      spaOne.textContent = "$";
      const inpOne = document.createElement("Input");
      inpOne.setAttribute("class", "w-[40px] outline-none");
      inpOne.setAttribute("title", "pledge");
      inpOne.setAttribute("type", "number");
      inpOne.setAttribute("name", "inputPledge");
      inpOne.setAttribute("id", "inputPledge");
      inpOne.setAttribute("min", "25");
      inpOne.setAttribute("value", "25");

      const butOne = document.createElement("button");
      butOne.setAttribute(
        "class",
        "w-max bg-ModerateCyan px-8 py-3 rounded-[2rem] text-white font-bold hover:bg-DarkCyan"
      );
      butOne.setAttribute("type", "button");
      butOne.setAttribute("data-button", "pledge");
      butOne.textContent = "Continue";

      // adding

      divThree.appendChild(spaOne);
      divThree.appendChild(inpOne);
      divTwo.appendChild(divThree);
      divTwo.appendChild(butOne);
      divOne.appendChild(pOne);
      divOne.appendChild(divTwo);

      fragment.appendChild(divOne);
      cardPledge.appendChild(fragment);
    }
  } else {
    console.log("off");
    document.querySelector('[data-target="pledge"]').classList.add("hidden");
    cardPledge.classList.remove("border-cyan");
    checkedBamboo.disabled = false;
    checkedBlack.disabled = false;
    checkedMahogany.disabled = false;

    localStorage.setItem("checkedPledge", false);
    if (document.querySelector('[data-template="inputPledgeContent"]')) {
      document.querySelector('[data-template="inputPledgeContent"]').remove();
    }
  }
});

checkedBamboo.addEventListener("click", () => {
  if (checkedBamboo.checked) {
    console.log("checked");

    checkedPledge.disabled = true;
    checkedBlack.disabled = true;
    checkedMahogany.disabled = true;

    document.querySelector('[data-target="bamboo"]').classList.remove("hidden");
    cardBamboo.classList.add("border-cyan");
    localStorage.setItem("checkedBamboo", true);

    if (!document.querySelector('[data-template="inputBambooContent"]')) {
      const fragment = document.createDocumentFragment();

      const divOne = document.createElement("div");
      divOne.setAttribute(
        "class",
        "border-t-[1px] md:flex md:justify-between md:p-6 md:pb-0"
      );
      divOne.setAttribute("data-template", "inputBambooContent");

      const pOne = document.createElement("p");
      pOne.setAttribute("class", "text-center text-[#7a7a7a] py-5");
      pOne.textContent = "Enter your reward";

      const divTwo = document.createElement("div");
      divTwo.setAttribute("class", "flex justify-center gap-5");
      const divThree = document.createElement("div");
      divThree.setAttribute(
        "class",
        "flex rounded-[2rem] border-[1px] px-8 py-3 gap-2 items-center"
      );
      const spaOne = document.createElement("span");
      spaOne.setAttribute("class", "text-[#7a7a7a] font-bold");
      spaOne.textContent = "$";
      const inpOne = document.createElement("Input");
      inpOne.setAttribute("class", "w-[40px] outline-none");
      inpOne.setAttribute("title", "bamboo");
      inpOne.setAttribute("type", "number");
      inpOne.setAttribute("name", "inputBamboo");
      inpOne.setAttribute("id", "inputBamboo");
      inpOne.setAttribute("min", "25");
      inpOne.setAttribute("value", "25");

      const butOne = document.createElement("button");
      butOne.setAttribute(
        "class",
        "w-max bg-ModerateCyan px-8 py-3 rounded-[2rem] text-white font-bold hover:bg-DarkCyan"
      );
      butOne.setAttribute("type", "button");
      butOne.setAttribute("data-button", "bamboo");
      butOne.textContent = "Continue";

      // adding

      divThree.appendChild(spaOne);
      divThree.appendChild(inpOne);
      divTwo.appendChild(divThree);
      divTwo.appendChild(butOne);
      divOne.appendChild(pOne);
      divOne.appendChild(divTwo);

      fragment.appendChild(divOne);
      cardBamboo.appendChild(fragment);
    }
  } else {
    console.log("off");
    document.querySelector('[data-target="bamboo"]').classList.add("hidden");
    cardBamboo.classList.remove("border-cyan");

    checkedPledge.disabled = false;
    checkedBlack.disabled = false;
    checkedMahogany.disabled = false;

    localStorage.setItem("checkedBamboo", false);
    if (document.querySelector('[data-template="inputBambooContent"]')) {
      document.querySelector('[data-template="inputBambooContent"]').remove();
    }
  }
});

checkedBlack.addEventListener("click", () => {
  if (checkedBlack.checked) {
    console.log("checked");

    checkedPledge.disabled = true;
    checkedBamboo.disabled = true;
    checkedMahogany.disabled = true;

    document.querySelector('[data-target="black"]').classList.remove("hidden");
    cardBlack.classList.add("border-cyan");
    localStorage.setItem("checkedBlack", true);

    if (!document.querySelector('[data-template="inputBlackContent"]')) {
      const fragment = document.createDocumentFragment();

      const divOne = document.createElement("div");
      divOne.setAttribute(
        "class",
        "border-t-[1px] md:flex md:justify-between md:p-6 md:pb-0"
      );
      divOne.setAttribute("data-template", "inputBlackContent");

      const pOne = document.createElement("p");
      pOne.setAttribute("class", "text-center text-[#7a7a7a] py-5");
      pOne.textContent = "Enter your reward";

      const divTwo = document.createElement("div");
      divTwo.setAttribute("class", "flex justify-center gap-5");
      const divThree = document.createElement("div");
      divThree.setAttribute(
        "class",
        "flex rounded-[2rem] border-[1px] px-8 py-3 gap-2 items-center"
      );
      const spaOne = document.createElement("span");
      spaOne.setAttribute("class", "text-[#7a7a7a] font-bold");
      spaOne.textContent = "$";
      const inpOne = document.createElement("Input");
      inpOne.setAttribute("class", "w-[40px] outline-none");
      inpOne.setAttribute("title", "black");
      inpOne.setAttribute("type", "number");
      inpOne.setAttribute("name", "inputBlack");
      inpOne.setAttribute("id", "inputBlack");
      inpOne.setAttribute("min", "75");
      inpOne.setAttribute("value", "75");

      const butOne = document.createElement("button");
      butOne.setAttribute(
        "class",
        "w-max bg-ModerateCyan px-8 py-3 rounded-[2rem] text-white font-bold hover:bg-DarkCyan"
      );
      butOne.setAttribute("type", "button");
      butOne.setAttribute("data-button", "black");
      butOne.textContent = "Continue";

      // adding

      divThree.appendChild(spaOne);
      divThree.appendChild(inpOne);
      divTwo.appendChild(divThree);
      divTwo.appendChild(butOne);
      divOne.appendChild(pOne);
      divOne.appendChild(divTwo);

      fragment.appendChild(divOne);
      cardBlack.appendChild(fragment);
    }
  } else {
    console.log("off");
    document.querySelector('[data-target="black"]').classList.add("hidden");
    cardBlack.classList.remove("border-cyan");

    checkedPledge.disabled = false;
    checkedBamboo.disabled = false;
    checkedMahogany.disabled = false;

    localStorage.setItem("checkedBlack", false);
    if (document.querySelector('[data-template="inputBlackContent"]')) {
      document.querySelector('[data-template="inputBlackContent"]').remove();
    }
  }
});

checkedMahogany.addEventListener("click", () => {
  if (checkedMahogany.checked) {
    console.log("checked");

    checkedPledge.disabled = true;
    checkedBamboo.disabled = true;
    checkedBlack.disabled = true;

    document
      .querySelector('[data-target="mahogany"]')
      .classList.remove("hidden");
    cardMahogany.classList.add("border-cyan");
    localStorage.setItem("checkedMahogany", true);

    if (!document.querySelector('[data-template="inputMahoganyContent"]')) {
      const fragment = document.createDocumentFragment();

      const divOne = document.createElement("div");
      divOne.setAttribute(
        "class",
        "border-t-[1px] md:flex md:justify-between md:p-6 md:pb-0"
      );
      divOne.setAttribute("data-template", "inputMahoganyContent");

      const pOne = document.createElement("p");
      pOne.setAttribute("class", "text-center text-[#7a7a7a] py-5");
      pOne.textContent = "Enter your reward";

      const divTwo = document.createElement("div");
      divTwo.setAttribute("class", "flex justify-center gap-5");
      const divThree = document.createElement("div");
      divThree.setAttribute(
        "class",
        "flex rounded-[2rem] border-[1px] px-8 py-3 gap-2 items-center"
      );
      const spaOne = document.createElement("span");
      spaOne.setAttribute("class", "text-[#7a7a7a] font-bold");
      spaOne.textContent = "$";
      const inpOne = document.createElement("Input");
      inpOne.setAttribute("class", "w-[40px] outline-none");
      inpOne.setAttribute("title", "mahogany");
      inpOne.setAttribute("type", "number");
      inpOne.setAttribute("name", "inputMahogany");
      inpOne.setAttribute("id", "inputMahogany");
      inpOne.setAttribute("min", "200");
      inpOne.setAttribute("value", "200");

      const butOne = document.createElement("button");
      butOne.setAttribute(
        "class",
        "w-max bg-ModerateCyan px-8 py-3 rounded-[2rem] text-white font-bold hover:bg-DarkCyan"
      );
      butOne.setAttribute("type", "button");
      butOne.setAttribute("data-button", "mahogany");
      butOne.textContent = "Continue";

      // adding

      divThree.appendChild(spaOne);
      divThree.appendChild(inpOne);
      divTwo.appendChild(divThree);
      divTwo.appendChild(butOne);
      divOne.appendChild(pOne);
      divOne.appendChild(divTwo);

      fragment.appendChild(divOne);
      cardMahogany.appendChild(fragment);
    }
  } else {
    console.log("off");
    document.querySelector('[data-target="mahogany"]').classList.add("hidden");
    cardMahogany.classList.remove("border-cyan");

    checkedPledge.disabled = false;
    checkedBamboo.disabled = false;
    checkedBlack.disabled = false;

    localStorage.setItem("checkedMahogany", false);
    if (document.querySelector('[data-template="inputMahoganyContent"]')) {
      document.querySelector('[data-template="inputMahoganyContent"]').remove();
    }
  }
});

//*********** Trigger Button Page  ***********//
const bambooStandButton = document.querySelector('[data-button="bambooStand"]');
bambooStandButton.addEventListener("click", () => {
  bambooStand.classList.toggle("border-cyan");
  if (!document.querySelector('[data-template="inputBamboo"]')) {
    const fragment = document.createDocumentFragment();

    const divOne = document.createElement("div");
    divOne.setAttribute(
      "class",
      "border-t-[1px] md:flex md:justify-between md:p-6 md:pb-0"
    );
    divOne.setAttribute("data-template", "inputBamboo");

    const pOne = document.createElement("p");
    pOne.setAttribute("class", "text-center text-[#7a7a7a] py-5");
    pOne.textContent = "Enter your reward";

    const divTwo = document.createElement("div");
    divTwo.setAttribute("class", "flex justify-center gap-5");
    const divThree = document.createElement("div");
    divThree.setAttribute(
      "class",
      "flex rounded-[2rem] border-[1px] px-8 py-3 gap-2 items-center"
    );
    const spaOne = document.createElement("span");
    spaOne.setAttribute("class", "text-[#7a7a7a] font-bold");
    spaOne.textContent = "$";
    const inpOne = document.createElement("Input");
    inpOne.setAttribute("class", "w-[40px] outline-none");
    inpOne.setAttribute("title", "bamboo");
    inpOne.setAttribute("type", "number");
    inpOne.setAttribute("name", "inputBamboo");
    inpOne.setAttribute("id", "inputBamboo");
    inpOne.setAttribute("min", "25");
    inpOne.setAttribute("value", "25");

    const butOne = document.createElement("button");
    butOne.setAttribute(
      "class",
      "w-max bg-ModerateCyan px-8 py-3 rounded-[2rem] text-white font-bold hover:bg-DarkCyan"
    );
    butOne.setAttribute("type", "button");
    butOne.setAttribute("data-button", "bamboo");
    butOne.textContent = "Continue";

    // adding

    divThree.appendChild(spaOne);
    divThree.appendChild(inpOne);
    divTwo.appendChild(divThree);
    divTwo.appendChild(butOne);
    divOne.appendChild(pOne);
    divOne.appendChild(divTwo);

    fragment.appendChild(divOne);
    bambooStand.appendChild(fragment);
  } else {
    document.querySelector('[data-template="inputBamboo"]').remove();
  }
});
const blackEditionButton = document.querySelector(
  '[data-button="blackEdition"]'
);
blackEditionButton.addEventListener("click", () => {
  blackEdition.classList.toggle("border-cyan");
  if (!document.querySelector('[data-template="inputBlack"]')) {
    const fragment = document.createDocumentFragment();

    const divOne = document.createElement("div");
    divOne.setAttribute(
      "class",
      "border-t-[1px] md:flex md:justify-between md:p-6 md:pb-0"
    );
    divOne.setAttribute("data-template", "inputBlack");

    const pOne = document.createElement("p");
    pOne.setAttribute("class", "text-center text-[#7a7a7a] py-5");
    pOne.textContent = "Enter your reward";

    const divTwo = document.createElement("div");
    divTwo.setAttribute("class", "flex justify-center gap-5");
    const divThree = document.createElement("div");
    divThree.setAttribute(
      "class",
      "flex rounded-[2rem] border-[1px] px-8 py-3 gap-2 items-center"
    );
    const spaOne = document.createElement("span");
    spaOne.setAttribute("class", "text-[#7a7a7a] font-bold");
    spaOne.textContent = "$";
    const inpOne = document.createElement("Input");
    inpOne.setAttribute("class", "w-[40px] outline-none");
    inpOne.setAttribute("title", "black");
    inpOne.setAttribute("type", "number");
    inpOne.setAttribute("name", "inputBlack");
    inpOne.setAttribute("id", "inputBlack");
    inpOne.setAttribute("min", "75");
    inpOne.setAttribute("value", "75");

    const butOne = document.createElement("button");
    butOne.setAttribute(
      "class",
      "w-max bg-ModerateCyan px-8 py-3 rounded-[2rem] text-white font-bold hover:bg-DarkCyan"
    );
    butOne.setAttribute("type", "button");
    butOne.setAttribute("data-button", "black");
    butOne.textContent = "Continue";

    // adding

    divThree.appendChild(spaOne);
    divThree.appendChild(inpOne);
    divTwo.appendChild(divThree);
    divTwo.appendChild(butOne);
    divOne.appendChild(pOne);
    divOne.appendChild(divTwo);

    fragment.appendChild(divOne);
    blackEdition.appendChild(fragment);
  } else {
    document.querySelector('[data-template="inputBlack"]').remove();
  }
});

document.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target === document.querySelector('[data-button="pledge"]')) {
    document.querySelector('[data-button="pledge"]');
    // console.log("Existe");

    const inputPledgeValue = document.getElementById("inputPledge").value;
    // adding to bar
    localStorage.setItem("amount", inputPledgeValue);

    if (total !== null) {
      newAmount = parseInt(total) + parseInt(inputPledgeValue);
      localStorage.setItem("amount", newAmount);
    } else {
      localStorage.setItem("amount", inputPledgeValue);
    }

    completedModal.classList.remove("hidden");
    startModal.classList.add("hidden");
  }

  if (e.target === document.querySelector('[data-button="bamboo"]')) {
    document.querySelector('[data-button="bamboo"]');
    // console.log("Existe");

    const inputBambooValue = document.getElementById("inputBamboo").value;
    // adding to bar
    localStorage.setItem("amount", inputBambooValue);

    if (total !== null) {
      newAmount = parseInt(total) + parseInt(inputBambooValue);
      localStorage.setItem("amount", newAmount);
    } else {
      localStorage.setItem("amount", inputBambooValue);
    }

    completedModal.classList.remove("hidden");
    startModal.classList.add("hidden");
  }
  if (e.target === document.querySelector('[data-button="black"]')) {
    document.querySelector('[data-button="black"]');
    // console.log("Existe");

    const inputBlackValue = document.getElementById("inputBlack").value;
    // adding to bar
    localStorage.setItem("amount", inputBlackValue);

    if (total !== null) {
      newAmount = parseInt(total) + parseInt(inputBlackValue);
      localStorage.setItem("amount", newAmount);
    } else {
      localStorage.setItem("amount", inputBlackValue);
    }

    completedModal.classList.remove("hidden");
    startModal.classList.add("hidden");
  }
  if (e.target === document.querySelector('[data-button="mahogany"]')) {
    document.querySelector('[data-button="mahogany"]');
    // console.log("Existe");

    const inputMahoganyValue = document.getElementById("inputMahogany").value;
    // adding to bar
    localStorage.setItem("amount", inputMahoganyValue);

    if (total !== null) {
      newAmount = parseInt(total) + parseInt(inputMahoganyValue);
      localStorage.setItem("amount", newAmount);
    } else {
      localStorage.setItem("amount", inputMahoganyValue);
    }

    completedModal.classList.remove("hidden");
    startModal.classList.add("hidden");
  }
});

//*********** Trigger Completed Modal ***********//
document
  .querySelector('[data-button="complete"]')
  .addEventListener("click", () => {
    completedModal.classList.add("hidden");
    window.location.reload();
  });
