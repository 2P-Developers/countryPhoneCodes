async function getUserCountry() {
    const response = await fetch("https://ipgeo.2p-host.com/");
    let myData = await response.json();
    return myData;
}


var ul = document.getElementById('countryList');  // Parent
let selectedFlag = document.getElementById("selectedFlag");

ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        selectedFlag.src = `https://www.countryflagsapi.com/png/${e.target.id}`;
    }
});

var selectedFlagContainer = document.getElementById('selectedFlagContainer');
let countryList = document.getElementById("countryList");

selectedFlagContainer.addEventListener('click', function (e) {
    if (countryList.style.display === 'none') {
        countryList.style.display = 'block';
    } else {
        countryList.style.display = 'none';
    }
});
async function getCountryPhoneCode2() {
    const response = await fetch("CountryCodes.json");
    let myData = await response.json();
    let userCountryCode = await getUserCountry();

    let countryList = document.getElementById("countryList");

    myData.forEach((e) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        img.classList.add("flag-img");

        img.src = `https://www.countryflagsapi.com/png/${e.code}`;
        span.textContent = `${e.name} : ${e.dial_code}`;
        li.setAttribute("id", `${e.code}`);

        li.appendChild(img);
        li.appendChild(span);
        countryList.appendChild(li);

        if (e.code === userCountryCode.country_code2) {
            selectedFlag.src = `https://www.countryflagsapi.com/png/${e.code}`;
        }
    });
}

//call functions
getCountryPhoneCode2();
