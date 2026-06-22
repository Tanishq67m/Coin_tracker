# 🚀 Crypto Coin Tracker

A responsive cryptocurrency tracking web application built using HTML, CSS, and Vanilla JavaScript. The application fetches real-time cryptocurrency market data from the CoinGecko API and displays it in a clean, dark-themed interface. Users can search for coins and sort them based on market capitalization and 24-hour percentage price changes.

## 📌 Features

- 🔄 **Fetch live cryptocurrency data** from the CoinGecko API
- ⚡ **Uses Async/Await** for the main API implementation
- 🔗 **Includes `.then()` Promise implementation** for evaluation purposes
- 🔍 **Search cryptocurrencies** by name or symbol
- 📈 **Sort coins** by Market Capitalization
- 📊 **Sort coins** by 24-hour Percentage Change
- 🎨 **Dark-themed responsive UI** matching the design
- ⚠️ **Basic error handling** for failed API requests
- ⏳ **Displays a loading state** while fetching data

## 📷 Preview

The application displays cryptocurrency information similar to the following layout:

- Coin Image and Name
- Symbol
- Current Price
- Total Volume
- 24-Hour Percentage Change
- Market Capitalization

> [!NOTE]
> Positive percentage changes are displayed in green, while negative changes are displayed in red.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- CoinGecko API

## 📡 API Used

**CoinGecko Markets API**

`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`

### Parameters Used

| Parameter | Value | Description |
| :--- | :--- | :--- |
| `vs_currency` | `usd` | Currency used for prices |
| `order` | `market_cap_desc` | Sort by market cap descending |
| `per_page` | `10` | Fetch top 10 cryptocurrencies |
| `page` | `1` | First page of results |
| `sparkline` | `false` | Excludes sparkline data |

## 📂 Project Structure

```text
coin-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/crypto-coin-tracker.git
```

### 2. Navigate to the Project Folder
```bash
cd crypto-coin-tracker
```

### 3. Open the Project

You can either:
- Open `index.html` directly in your browser, or
- Use VS Code Live Server for a better development experience.

**To use Live Server:**
1. Install the **Live Server** extension in VS Code.
2. Right-click on `index.html`.
3. Select **"Open with Live Server"**.

## 💻 Functionalities

### Fetch Cryptocurrency Data

The application fetches live data from CoinGecko using two approaches:

#### Async/Await
```javascript
async function fetchCoins() {
    const response = await fetch(API_URL);
    const data = await response.json();
}
```

#### Promise Chaining (`.then()`)
```javascript
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        // Handle data
    });
```

### Search Functionality

Users can search cryptocurrencies by:
- Coin Name
- Coin Symbol

**Examples:**

| Search Input | Result |
| :--- | :--- |
| `bit` | Bitcoin |
| `eth` | Ethereum, Tether |
| `doge` | Dogecoin |

### Sorting Options

#### Sort By Market Cap
Displays cryptocurrencies in descending order of market capitalization.
```javascript
b.market_cap - a.market_cap
```

#### Sort By Percentage Change
Displays cryptocurrencies based on the highest 24-hour percentage gain.
```javascript
b.price_change_percentage_24h - a.price_change_percentage_24h
```

## 🧠 Concepts Practiced

This project helped reinforce the following JavaScript concepts:
- **DOM Manipulation**
- **Event Listeners**
- **Fetch API**
- **Promises** (Async/Await & Promise Chaining)
- **Error Handling**
- **Arrays of Objects** (`forEach()`, `filter()`, `sort()`)
- **Spread Operator (`...`)**
- **Template Literals**
- **Dynamic Rendering**
- **Basic State Management**

## ⚠️ Error Handling

The application includes:
- API response validation using `response.ok`
- `try...catch` blocks for Async/Await
- `.catch()` for Promise-based requests
- Loading and error messages displayed to the user

## 🎯 Future Improvements

Possible enhancements include:
- Pagination support
- Responsive mobile layout improvements
- Sort toggling (ascending/descending)
- Displaying additional coin information
- Favorites/Watchlist functionality
- Charts using CoinGecko sparkline data
- Auto-refreshing market data

## 👨‍💻 Author

Developed as a JavaScript practice project to strengthen understanding of:
- API Integration
- Asynchronous JavaScript
# Coin_tracker
