# leetcode 53. 最大子序和

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

## 示例：

    输入: [-2,1,-3,4,-1,2,1,-5,4],
    输出: 6
    解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

## 进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

## 解析题意

    这道题其实并不复杂，咱们第一时间想到的肯定是计算出所有的可能性然后进行求解，
    这也是大部分人第一时间会想到的暴力求解方式

### 暴力求解

``` 
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j];
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
};
```

    参考以上代码可以看出时间复杂度达到了O(n²),显然达不到题目要求，
    是的我们可以想到经典的解题思路，动态规划


```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let historyMax = nums[0], currentMax = nums[0]
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(currentMax + nums[i], nums[i])
        historyMax = Math.max(currentMax, historyMax)
    }
    return historyMax
};
```

    很明显可以看出我只需遍历一遍即可得出最优解，时间复杂度达到O(n),
    那其实咱们还可以用动态规划中的特殊算法贪心算法去求解

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        //如果sum < 0，重新开始找子序串
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};
```

    由于分治法在时间复杂度和空间复杂度上并没有提升，咱们就不多做分析(才不告诉你是因为我还没搞明白呢>_>)


# 总结

**那这道题到底有什么作用呢，我们前端用的到吗？**

当然了，不然我在这里浪费什么时间，我当时在区块链项目中就遇到过一些走势统计问题，当时我没有多想，直接采用暴力求解的方法，可想而知js性能本身就不咋样，即使我将计算进程用worker分发出去也把浏览器干趴下停止响应了老半天，还好当时项目还没有上线，不然我就真的卑微前端在线乞讨了，而这里我只是借用一道抽象出来的算法题来给大家提供一种动态规划解题的思路，当你仔细想想，其实生活当中也是天天打交道，例如股票历史行情分析，企业历年业绩，店面盈亏统计...
