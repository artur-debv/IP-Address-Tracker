document.addEventListener("DOMContentLoaded", function () {
    const Button_search = document.querySelector(".submit-btn");

    Button_search.addEventListener("click", function () {
        const input_Search = document.querySelector(".input-field").value;
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_vpHUuVP400WqsLHAC0QpySyGsbm31&ipAddress=${input_Search}`)
            .then((response) => response.json())
            .then((data) => {
                if (!data || !data.location) {
                    throw new Error('Invalid data from API');
                }

                const ipAddressField = document.querySelector(".ipAddressField");
                const locationInput = document.querySelector(".locationInput");
                const timezoneInput = document.querySelector(".timezoneInput");
                const ispInput = document.querySelector(".ispInput");

                ipAddressField.innerHTML = data.ip;
                locationInput.innerHTML = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
                timezoneInput.innerHTML = data.location.timezone;
                ispInput.innerHTML = data.isp;

                // Map 

                const latitude = data.location.lat;
                const longitude = data.location.lng;

                // Cria o mapa
                window.Map = L.map('map').setView([latitude,longitude], 13);

                // Adiciona uma camada de tiles ao mapa (OpenStreetMap neste caso)
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(window.Map);

                // Adiciona um marcador ao mapa
                L.marker([latitude,longitude]).addTo(window.Map)
                    .bindPopup(`IP: ${data.ip}<br>Location: ${data.location.city}, ${data.location.region}, ${data.location.country}`)
                    .openPopup();
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                const messageErrorOrSuccess = document.querySelector(".message_error_or_success");
                messageErrorOrSuccess.innerHTML = "Error fetching data. Please try again.";
            });
    });
});
