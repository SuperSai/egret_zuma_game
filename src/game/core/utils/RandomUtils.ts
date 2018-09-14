class RandomUtils extends BaseClass {
    /**
     * 获取一个区间的随机数
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    public limit($from: number, $end: number): number {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range: number = $end - $from;
        return $from + Math.random() * range;
    }

    /**
     * 获取一个区间的随机数(帧数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    public limitInteger($from: number, $end: number): number {
        return Math.round(this.limit($from, $end));
    }

    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @returns {any} 随机出来的结果
     */
    public randomArray(arr: Array<any>): any {
        var index: number = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    /**
     * 在 start 与 stop之间取一个随机整数，可以用step指定间隔， 但不包括较大的端点（start与stop较大的一个）
     * 如 
     * Random.randrange(1, 10, 3) 
     * 则返回的可能是   1 或  4 或  7  , 注意 这里面不会返回10，因为是10是大端点
     * @return 假设 start < stop,  [start, stop) 区间内的随机整数
     */
    public randrange(start: number, stop: number, step: number = 1): number {
        if (step == 0)
            throw new Error('step 不能为 0');

        var width: number = stop - start;
        if (width == 0)
            throw new Error('没有可用的范围(' + start + ',' + stop + ')');
        if (width < 0)
            width = start - stop;

        var n: number = Math.floor((width + step - 1) / step);
        return Math.floor(Math.random() * n) * step + Math.min(start, stop);
    }

    /**
     * 返回a 到 b直间的随机整数，包括 a 和 b
     * @param a
     * @param b
     * @return [a, b] 直接的随机整数
     * 
     */
    public randint(a: number, b: number): number {
        if (a > b)
            a++;
        else
            b++;
        return this.randrange(a, b);
    }
}
