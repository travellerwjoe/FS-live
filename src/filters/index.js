/**
 * 格式化让分,如 3.0,3.5 返回 3.25
 * @param {*} handicap 让分
 */
export function formatHandicap(handicap) {
    if (!handicap) return false
    const arr = handicap.split(',').map((item, index) => parseFloat(item))
    if (!arr[0] || !arr[1]) return false
    if (arr.length === 1 && arr[0]) return arr[0]
    return arr[0] + (arr[1] - arr[0]) / 2
}