// Obtém o IP assim que a página carrega
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=at_vpHUuVP400WqsLHAC0QpySyGsbm31");
        const data = await response.json();

        // Aqui você pode usar os dados obtidos, como o IP, a localização, etc.
      
        // Atualize os elementos HTML com os dados relevantes
        ipAddressField.innerHTML = data.ip;
        timezoneInput.innerHTML = `UTC ${data.time_zone.offset}`;
        countryLocationInput.innerHTML = `${data.country_name}, ${data.city} ${data.zipcode}`;
        ispInput.innerHTML = data.isp;

        // Chame a função para exibir o mapa com as coordenadas
        mapLocation(data.latitude, data.longitude);
    } catch (error) {
        console.error("Erro ao obter dados de geolocalização:", error);
    }
});

// Função para exibir o mapa
function mapLocation(lat, lng) {
    const map = L.map("map").setView([lat, lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([lat, lng]).addTo(map).bindPopup("Sua Localização").openPopup();
}
