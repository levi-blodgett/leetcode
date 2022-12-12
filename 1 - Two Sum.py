nums=[2,7,11,15]
target=22

class Solution:
    def twoSum(self, nums, target):
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                print([i, hashmap[complement]])
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i

Solution().twoSum(nums, target)