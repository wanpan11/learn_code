// 编程题（30min）
// 题 1：
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 示例 1：
// 输入：x = 121
// 输出：true

// 示例2：
// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

// 示例 3：
// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。

function test_1(number) {
  const str = `${number}`;

  const arr = [...str];
  const arr2 = arr.reverse();

  const str_1 = arr.join("");
  const str_2 = arr2.join("");

  console.log("str_1 ===> ", str_1);
  console.log("str_2 ===> ", str_2);

  return str_1 === str_2;
}

// test_1(11211);

// 题 2：无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。

// 示例1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
// 请注意，你的答案必须是 子串 的长度"pwke"是一个子序列，不是子串。

function test_2(arr) {
  let obj = {};
  const strArr = [];
  let idx = 0;

  let maxIdx = 0;
  let currentLen = 0;
  let maxLen = 0;

  arr.forEach((e, i) => {
    /* 进入下一组 记录上次数据 重置数据 */
    if (obj[e] === 1) {
      /* 进入下一组 比对数据 */
      if (currentLen > maxLen) {
        maxLen = currentLen;
        maxIdx = idx;
      }

      /* 重置数据 */
      obj = {};
      idx += 1;
      currentLen = 0;
    }

    /* 建立map 拼接str */
    obj[e] = 1;
    if (strArr[idx]) {
      strArr[idx] += e;
    } else {
      strArr[idx] = e;
    }

    currentLen += 1;

    /* 结束检查 */
    if (i === arr.length - 1) {
      if (currentLen > maxLen) {
        maxLen = currentLen;
        maxIdx = idx;
      }
    }
  });

  console.log("strArr ===> ", strArr, maxIdx);
  console.log("maxIdx ===> ", strArr[maxIdx]);
}

test_2([..."abcabcbbcadwqeekjhgyuytrqwertyuiopasdfgh"]);

const str = new String("123");
console.dirxml(str);
