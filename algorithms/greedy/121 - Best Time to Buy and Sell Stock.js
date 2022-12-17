// Define new array of stock prices
const prices = [7, 1, 5, 3, 6, 4];

// Define the StockCalculator class
class StockCalculator {
  // Define the calculateMaxProfit method
  calculateMaxProfit(prices) {
    // Initialize the max profit to 0
    let maxProfit = 0;

    // Initialize the min price to positive infinity
    let minPrice = Number.POSITIVE_INFINITY;

    // Iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
      // If the current price is less than the min price seen so far, update the min price
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
      // If the current price minus the min price seen so far is greater than the max profit, update the max profit
      else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }

    // Print the max profit
    console.log(maxProfit);

    // Return the max profit
    return maxProfit;
  }
}

// Create a new instance of the StockCalculator class and call the calculateMaxProfit method
new StockCalculator().calculateMaxProfit(prices);