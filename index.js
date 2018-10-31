let currentTab = 0;
showTab(currentTab);

const indicator = document.getElementsByClassName("indicator");
indicator[currentTab].style.display = "block";

function showTab(n) {
  const tab = document.getElementsByClassName("tab");
  tab[n].style.display = "block";

  // first tab
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  // summary tab
  if (n == (tab.length - 2)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").classList.add("submit");
  } else {
    document.getElementById("nextBtn").innerHTML = "&#8594";
  }

  // the last tab
  if (n == (tab.length - 1)) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
  }

}

function nextPrev(n) {
  const tab = document.getElementsByClassName("tab");
  const indicator = document.getElementsByClassName("indicator");
  tab[currentTab].style.display = "none";

  // when prev btn clicked, set the indicator to the prev stage
  if (n == -1) {
    indicator[currentTab].style.display = "none";
  }

  // showing next/prev tabs & indicator
  currentTab = currentTab + n;
  function showIndicator(currentTab) {
    indicator[currentTab].style.display = "block";
  }

  showTab(currentTab);
  showIndicator(currentTab);
  // showing summary 
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

  console.log('name:', name);

  // getting values of the salary tab
  var radios = document.getElementsByName('radios');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      summarySalary.innerHTML = radios[i].value;
    }
  }
}



