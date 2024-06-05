
const Button_search = document.querySelector(".submit-btn")

Button_search.addEventListener("click", function () {
    const input_Search = document.querySelector(".input-field").value
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_vpHUuVP400WqsLHAC0QpySyGsbm31&ipAddress=${input_Search}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
})
