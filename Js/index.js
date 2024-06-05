document.addEventListener("DOMContentLoaded", function () {
    const Button_search = document.querySelector(".submit-btn");

    Button_search.addEventListener("click", function () {
        const input_Search = document.querySelector(".input-field").value;
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_vpHUuVP400WqsLHAC0QpySyGsbm31&ipAddress=${input_Search}`)
            .then((response) => response.json())
            .then((data) => {
             
                const ipAddressField = document.querySelector(".ipAddressField");
                const locationInput = document.querySelector(".locationInput");
                const timezoneInput = document.querySelector(".timezoneInput");
                const ispInput = document.querySelector(".ispInput");

                ipAddressField.innerHTML = data.ip
                locationInput.innerHTML = data.location.city
                timezoneInput.innerHTML = data.location.timezone
                ispInput.innerHTML = data.isp
                
            })
    });
});