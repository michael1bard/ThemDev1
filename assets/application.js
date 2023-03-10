// Put your application javascript here
// alert("i have an alter box");
if (document.getElementById("sort_by") != null) {
  document.querySelector("#sort_by").addEventListener("change", function (e) {
    const url = new URL(window.location.href);
    url.searchParams.set("sort_by", e.currentTarget.value);

    window.location = url.href;
  });
}

// dropdown box in addresses page
if (document.getElementById("AddressCountryNew") != null) {
  document
    .getElementById("AddressCountryNew")
    .addEventListener("change", function (e) {
      const provinces =
        this.options[this.selectedIndex].getAttribute("data-province");
      const provinceSelector = document.getElementById("AddressProvinceNew");
      const provinceArray = JSON.parse(provinces);
    });

  if (provinceArray.length < 1) {
    provinceSelector.setAttribute("disabled", "disabled");
  } else {
    provinceSelector.removeAttribute("disabled");
  }

  provinceSelector.innerHTML = "";
  let options = "";
  for (let i = 0; i < provinceArray.length; i++) {
    options +=
      '<option value ="' +
      provinceArray[i][0] +
      '">' +
      provinceArray[i][0] +
      "</option>";
  }
  provinceSelector.innerHTML = options;
}

// forgot password on login screen
if (document.getElementById("forgotPassword") != null) {
  document
    .getElementById("forgotPassword")
    .addEventListener("click", function (e) {
      console.log("I clicked");
      const element = document.querySelector("#forgot_password_form");

      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
        element.classList.add("d-block");
      }
    });
}

const localeItems = document.querySelectorAll("#localeItem");
if (localeItems.length > 0) {
  localeItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      document.getElementById("locale").value = item.getAttribute("lang");
      document.getElementById("localization_form_tag").submit();
    });
  });
}
