/**
 * 格式化让分,如 3.0,3.5 返回 3.25
 * @param {*} handicap 让分
 */
export function formatHandicap(handicap) {
    if (!handicap) return '-'
    const arr = handicap.split(',').map((item, index) => parseFloat(item))
    // if (!arr[0] || !arr[1]) return false
    if (arr.length === 1 && !isNaN(arr[0])) return arr[0]
    return arr[0] + (arr[1] - arr[0]) / 2
}

/**
 * 格式化时间
 * @param {*} datetime 时间 
 * @param {*} fmt 时间格式
 * @param {*} getUTC 是否返回UTC时间
 */
export function formatDateTime(datetime, fmt, getUTC) {
    datetime = new Date(datetime)
    if (getUTC) {
        datetime.getMonth = datetime.getUTCMonth
        datetime.getDate = datetime.getUTCDate
        datetime.getHours = datetime.getUTCHours
        datetime.getSeconds = datetime.getUTCSeconds
        datetime.getMilliseconds = datetime.getUTCMilliseconds
        datetime.getFullYear = datetime.getUTCFullYear
    }
    var o = {
        'M+': datetime.getMonth() + 1, // 月份 
        'd+': datetime.getDate(), // 日 
        'h+': datetime.getHours(), // 小时 
        'm+': datetime.getMinutes(), // 分 
        's+': datetime.getSeconds(), // 秒 
        'q+': Math.floor((datetime.getMonth() + 3) / 3), // 季度 
        'S': datetime.getMilliseconds() // 毫秒 
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (datetime.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
}

/**
 * 获取比赛事件简写对应的class
 * @param {*} type 事件简写
 */
export function getEventClasses(type) {
    return {
        'match-host-goal': type === 'hg',
        'match-host-goal-cancel': type === 'hgc',
        'match-host-miss-penalty': type === 'hmp',
        'match-host-penalty': type === 'hp',
        'match-host-wulong': type === 'hw',
        'match-guest-goal': type === 'gg',
        'match-guest-goal-cancel': type === 'ggc',
        'match-guest-miss-penalty': type === 'gmp',
        'match-guest-penalty': type === 'gp',
        'match-guest-wulong': type === 'gw',
        'match-event-rc': type === 'hrc' || type === 'grc' || type === 'rc',
        'match-event-yc': type === 'hyc' || type === 'gyc' || type === 'yc',
        'match-host-corner': type === 'hc',
        'match-guest-corner': type === 'gc',
        'match-goal': type === 'g',
        // 'match-goal-cancel': type === 'ggc',
        'match-miss-penalty': type === 'mp',
        'match-penalty': type === 'p',
        'match-ting': type === 'd',
        'match-fulltime': type === 'e',
        'match-halftime': type === 'h',
        'match-bushi': type === 'it',
        'match-huanren': type === 'hs' || type === 'gs',
        'match-space': type === 'cd',
        'match-weather': type === 'tq'
    }
}