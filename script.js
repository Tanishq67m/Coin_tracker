const tableBody = document.getElementById("tableBody");

const searchInput = document.getElementById("searchInput");

const marketCapBtn = document.getElementById("marketCapBtn");

const percentageBtn = document.getElementById("percentageBtn");

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

let coins = [];

async function fetchCoins() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        coins = data;

        renderCoins(coins);

    }
    catch(error) {

        console.log("Error:", error);

    }

}

fetchCoins();

searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value.toLowerCase();

    const filteredCoins = coins.filter((coin) => {

        return (
            coin.name
                .toLowerCase()
                .includes(searchTerm)

            ||

            coin.symbol
                .toLowerCase()
                .includes(searchTerm)
        );

    });

    renderCoins(filteredCoins);

});

function renderCoins(data) {

    tableBody.innerHTML = "";

    data.forEach((coin) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <div class="coin-info">
                    <img src="${coin.image}" alt="${coin.name}">
                    ${coin.name}
                </div>
            </td>

            <td>${coin.symbol.toUpperCase()}</td>

            <td>$${coin.current_price.toLocaleString()}</td>

            <td>$${coin.total_volume.toLocaleString()}</td>

            <td class="${
                coin.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
            }">
                ${coin.price_change_percentage_24h.toFixed(2)}%
            </td>

            <td class="market-cap">
                Mkt Cap : $${coin.market_cap.toLocaleString()}
            </td>
        `;

        tableBody.appendChild(row);

    });

}