/**
 * 循环执行times回调函数callback
 */
export const doCustomTimes = (times, callback) => {
  while (times--) {
    callback()
  }
}