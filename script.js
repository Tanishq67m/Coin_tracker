
const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const marketCapBtn = document.getElementById("marketCapBtn");
const percentageBtn = document.getElementById("percentageBtn");



const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";


let coins = [];


function renderCoins(data) {

    tableBody.innerHTML = "";

    data.forEach((coin) => {

        const row = document.createElement("tr");

        const percentage =
            coin.price_change_percentage_24h;

        row.innerHTML = `
            <td>
                <div class="coin-info">
                    <img
                        src="${coin.image}"
                        alt="${coin.name}"
                    >
                    ${coin.name}
                </div>
            </td>

            <td>
                ${coin.symbol.toUpperCase()}
            </td>

            <td>
                $${coin.current_price.toLocaleString()}
            </td>

            <td>
                $${coin.total_volume.toLocaleString()}
            </td>

            <td class="${
                percentage >= 0
                    ? "positive"
                    : "negative"
            }">

                ${
                    percentage !== null
                        ? percentage.toFixed(2)
                        : "N/A"
                }%

            </td>

            <td class="market-cap">
                Mkt Cap : $${coin.market_cap.toLocaleString()}
            </td>
        `;

        tableBody.appendChild(row);
    });

}


async function fetchCoins() {

    try {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    Loading...
                </td>
            </tr>
        `;

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        coins = data;

        renderCoins(coins);

    }
    catch (error) {

        console.error("Error:", error);

        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    Failed to load data.
                </td>
            </tr>
        `;
    }

}

function fetchCoinsThen() {

    fetch(API_URL)

        .then((response) => {

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            return response.json();

        })

        .then((data) => {

            coins = data;

            renderCoins(coins);

        })

        .catch((error) => {

            console.error("Error:", error);

        });

}




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


marketCapBtn.addEventListener("click", () => {

    const sortedCoins = [...coins].sort((a, b) => {

        return b.market_cap - a.market_cap;

    });

    renderCoins(sortedCoins);

});


percentageBtn.addEventListener("click", () => {

    const sortedCoins = [...coins].sort((a, b) => {

        return (

            b.price_change_percentage_24h -
            a.price_change_percentage_24h

        );

    });

    renderCoins(sortedCoins);

});


fetchCoins();
