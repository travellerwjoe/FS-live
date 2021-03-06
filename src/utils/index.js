/**
 * 页面可见性回调
 * @param {*} visibleCallback 可见时回调
 * @param {*} hiddenCallback 隐藏时回调
 */
function visibility(visibleCallback, hiddenCallback) {
    var hidden, visibilityChange
    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden'
        visibilityChange = 'visibilitychange'
    } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden'
        visibilityChange = 'mozvisibilitychange'
    } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden'
        visibilityChange = 'msvisibilitychange'
    } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden'
        visibilityChange = 'webkitvisibilitychange'
    }
    document.addEventListener(visibilityChange, function (e) {
        if (document[hidden]) {
            typeof hiddenCallback === 'function' && hiddenCallback()
        } else {
            typeof visibleCallback === 'function' && visibleCallback()
        }
    }, false)
}

/**
 * 桌面通知
 * @param {*} title 标题
 * @param {*} options 选项
 */
function notify(title, options) {
    if (window.Notification) {
        return new Promise((resolve, reject) => {
            if (Notification.permission !== 'denied') {
                Notification.requestPermission().then((permission) => {
                    if (permission === 'granted') {
                        const notifycation = new Notification(title, options)
                        resolve(notifycation)
                    } else {
                        reject(permission)
                    }
                })
            } else {
                reject(Notification.permission)
            }
        })
    }
}

export default {
    visibility,
    notify
}