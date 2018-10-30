let currentTab = 0;
showTab(currentTab);

const indicator = document.getElementsByClassName("indicator");
indicator[currentTab].style.display = "block";

function showTab(n) {
  const tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (tab.length - 2)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

}

function nextPrev(n) {
  const tab = document.getElementsByClassName("tab");
  const indicator = document.getElementsByClassName("indicator");
  tab[currentTab].style.display = "none";

  if (n == -1) {
    indicator[currentTab].style.display = "none";
  }

  currentTab = currentTab + n;
  function showIndicator(currentTab) {
    indicator[currentTab].style.display = "block";
  }

  showTab(currentTab);
  showIndicator(currentTab);

  //showing summary 
  if (currentTab === tab.length - 1) {
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

    var radios = document.getElementsByName('radios');

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        summarySalary.innerHTML = radios[i].value;
      }
    }
  }
}

