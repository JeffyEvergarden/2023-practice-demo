class Solution {
    /**
     * 两数相除
     * 
     * dividend 被除数
     * divisor 除数
     */
     // 32位  -2^31 = 2^31 - 1
     

     // 举个例子 4位bit  0000  第一位表示 +-

     // 2^1  =  10   2^0 = 01
     
     // 111 - 000 ---->   -8 -> 7   -> 4位  --> 2^3-1 ~ -2^3

     // 
     public int divide(int dividend, int divisor) {
        // 处理整型溢出问题，-2³¹=0x80000000
        // -2^31 / -1 =2^31   2^31 溢出了 > 2^31 - 1
        if (dividend == -0x80000000 && divisor == -1) {
            return 0x80000000 - 1;
        }

        // 用来记录除数和被除数是负整数的个数，初始化为2
        int negative = 2;

        // 如果被除数是正整数，则转换成对应的负整数
        if (dividend > 0) {
            negative--;
            dividend = -dividend;
        }

        // 如果除数是正整数，则转换成对应的负整数
        if (divisor > 0) {
            negative--;
            divisor = -divisor;
        }
        // 两个都转成负数

        int result = divideCore(dividend, divisor);
        return negative == 1 ? -result : result;
    }

    /**
     * 使用减法实现两个负整数的相除操作
     * 
     * dividend：被除数
     * divisor：除数
     */
    
    // -100  -9
        
    private int divideCore(int dividend, int divisor) {
        int ans = 0;
        while (dividend <= divisor) {
            // 商
            int quotient = 1;
            
            // 临时变量
            int value = divisor;

            // 注意题目要求，只能使用加法和减法
            // 因此，通过value+value实现value*2的效果
            // 注意这里 value 是大于等于 0xc0000000，不是小于等于，因为是负数，思维得转变过来
            while (value >= 0xc0000000 && dividend <= value + value) {
                // quotient 通过自身不断叠加实现乘以 2 的效果
                quotient += quotient;  // 1 -> 2 -> 4 -> 8
                // value 通过自身不断叠加实现乘以 2 的效果
                value += value; // -9 -> -18 -> -36 -> -72 ->  // -144
            }

            ans += quotient;
            dividend -= value;
        }

        return ans;
    }
}
