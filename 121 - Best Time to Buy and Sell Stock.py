prices = [7,1,5,3,6,4]

class Solution:
    def stonk_machine(self, prices):
        optimized_profit = 0
        minimum_profit = float('inf')
        for i in range(len(prices)):
            if prices[i] < minimum_profit:
                minimum_profit = prices[i]
            elif (prices[i] - minimum_profit) > optimized_profit:
                optimized_profit = prices[i] - minimum_profit
        print(optimized_profit)
        return optimized_profit

Solution().stonk_machine(prices)