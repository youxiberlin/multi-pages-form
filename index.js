let currentTab = 0;
showTab(currentTab);

const indicator = document.getElementsByClassName("indicator");
indicator[currentTab].style.display = "block";

function showTab(n) {
  const tab = document.getElementsByClassName("tab");
  document.getElementById("nextBtn").classList.remove("submit");
  tab[n].style.display = "block";

  // first tab
  if (n === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  // summary tab
  if (n === (tab.length - 2)) {
    summary();
    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").classList.add("submit");
  } else {
    document.getElementById("nextBtn").innerHTML = "&#8594";
  }

  // the last tab
  if (n === (tab.length - 1)) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
  }

}

function summary() {
  const name = document.getElementById("name").value
  const email = document.getElementById("e-mail").value
  const phone = document.getElementById("phone").value

  const summaryName = document.getElementById("summary-name")
  const summaryEmail = document.getElementById("summary-email")
  const summaryPhone = document.getElementById("summary-phone")
  const summarySalary = document.getElementById("summary-salary")

  summaryName.innerHTML = name;
  summaryEmail.innerHTML = email;
  summaryPhone.innerHTML = phone;

  // getting values of the salary tab
  const radios = document.getElementsByName('radios');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      summarySalary.innerHTML = radios[i].value;
    }
  }
}

function validate(currentTab) {
  const errMsg = document.getElementById("error-msg")
  if (currentTab === 0) {
    const name = document.getElementById("name").value
    const splittedName = name.split(" ")

    if (splittedName.length === 0 || splittedName.length === 1 || splittedName[1] === "") {
      errMsg.innerHTML = "please fill in full name";
      return false;
    } else {
      errMsg.innerHTML = "";
      return true;
    }
  } else if (currentTab === 1) {
    const email = document.getElementById("e-mail").value

    if (!email.includes("@")) {
      errMsg.innerHTML = "please fill in a valid E-mail address";
      return false
    } else {
      errMsg.innerHTML = "";
      return true;
    }
  } else if (currentTab === 2) {
    const phone = document.getElementById("phone").value
    if (!phone) {
      errMsg.innerHTML = "please fill in a phone number";
      return false
    } else {
      errMsg.innerHTML = "";
      return true;
    }
  } else if (currentTab === 3) {
    let radioChecked;
    const radios = document.getElementsByName('radios');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radioChecked = true;
      }
    }

    if (!radioChecked) {
      errMsg.innerHTML = "please choose a salary range";
      return false
    } else {
      errMsg.innerHTML = "";
      return true;
    }
  } else {
    return true;
  }
}

function changeTab(n) {
  const tab = document.getElementsByClassName("tab");

  if (n === -1) {
    currentTab = currentTab + n;
    console.log(currentTab)
    tab[currentTab + 1].style.display = "none";
    indicator[currentTab + 1].style.display = "none";
    showTab(currentTab);

  } else {
    const valid = validate(currentTab);
    if (!valid) {
      return;
    } else {
      tab[currentTab].style.display = "none";
      currentTab = currentTab + n;
      showTab(currentTab);
      indicator[currentTab].style.display = "block";
    }
  }
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Enter') {
    return changeTab(1);
  }

});






