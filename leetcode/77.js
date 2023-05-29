// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 1 - n 选 n 个数
  let result = []
  let arr = new Array(n).fill(null).map((item, index) => {
    return index + 1
  })

  function collect(a, waitArr, k) {
    if (k === 0) {
      result.push(a)
    }
    if (waitArr.length === 0) {
      return
    }
    for (let i = 0; i < waitArr.length; i++) {
      let newArr = waitArr.slice(i + 1)
      collect([...a, waitArr[i]], newArr, k - 1)
    }
  }

  collect([], arr, k)

  // console.log(result)
  return result
}

// // 生成的数组太多

var combine2 = function (n, k) {
  // 1 - n 选 n 个数
  let result = []

  let arr = []

  function collect(path, cur, n, k) {
    if (k === 0) {
      // 存储结果
      result.push([...path])
      return
    }
    if (cur > n) {
      return
    }

    for (let i = cur; i <= n; i++) {
      collect([...path, i], i + 1, n, k - 1)
    }
  }

  collect([], 1, n, k)
  return result
}

var combine3 = function (n, k) {
  // 1 - n 选 n 个数
  let result = []

  let arr = []

  function collect(path, cur, n, k) {
    if (k === 0) {
      // 存储结果
      result.push([...path])
      return
    }
    if (cur > n) {
      return
    }
    let len = path.length

    for (let i = cur; i <= n; i++) {
      path.push(i)
      collect(path, i + 1, n, k - 1)
      while (path.length > len) {
        path.pop()
      }
    }
  }

  collect([], 1, n, k)
  // console.log(result)
  return result
}

combine3(4, 2)





import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

// *
public class Solution {

    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> res = new ArrayList<>();
        if (k <= 0 || n < k) {
            return res;
        }
        // 从 1 开始是题目的设定
        Deque<Integer> path = new ArrayDeque<>();
        dfs(n, k, 1, path, res);
        return res;
    }

    private void dfs(int n, int k, int begin, Deque<Integer> path, List<List<Integer>> res) {
        // 递归终止条件是：path 的长度等于 k
        if (path.size() == k) {
            res.add(new ArrayList<>(path));
            return;
        }

        // 遍历可能的搜索起点
        for (int i = begin; i <= n; i++) {
            // 向路径变量里添加一个数
            path.addLast(i);
            // 下一轮搜索，设置的搜索起点要加 1，因为组合数理不允许出现重复的元素
            dfs(n, k, i + 1, path, res);
            // 重点理解这里：深度优先遍历有回头的过程，因此递归之前做了什么，递归之后需要做相同操作的逆向操作
            path.removeLast();
        }
    }
}

作者：liweiwei1419
链接：https://leetcode.cn/problems/combinations/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-ma-/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。