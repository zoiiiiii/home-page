// // 1. 获取操作系统
// function getOS() {
//     const ua = navigator.userAgent;
//     const platform = navigator.platform.toLowerCase();

//     if (platform.includes('win')) return 'Windows';
//     if (platform.includes('mac')) return 'Mac';
//     if (platform.includes('x11')) return 'Unix';
//     if (platform.includes('linux')) return 'Linux';
//     if (/android/.test(ua)) return 'Android';
//     if (/iphone|ipad|ipod/.test(ua)) return 'iOS';

//     return 'Unknown OS';
// }

// // 2. 获取浏览器名称和版本
// function getBrowser() {
//     const ua = navigator.userAgent;

//     if (/firefox/i.test(ua)) {
//         const verMatch = ua.match(/Firefox\/(\d+)/i);
//         return verMatch ? 'Firefox ' + verMatch[1] : 'Firefox';
//     }

//     if (/edg/i.test(ua)) {
//         const verMatch = ua.match(/Edg\/(\d+)/i);
//         return verMatch ? 'Edge ' + verMatch[1] : 'Edge';
//     }

//     if (/chrome/i.test(ua) && !/edge/i.test(ua)) {
//         const verMatch = ua.match(/Chrome\/(\d+)/i);
//         return verMatch ? 'Chrome ' + verMatch[1] : 'Chrome';
//     }

//     if (/safari/i.test(ua)) {
//         const verMatch = ua.match(/Version\/(\d+[\.\d]*)/i);
//         return verMatch ? 'Safari ' + verMatch[1] : 'Safari';
//     }

//     if (/msie/i.test(ua) || /trident/i.test(ua)) {
//         if (/rv:11\.0/i.test(ua)) return 'IE 11';
//         if (/MSIE 10\.0/i.test(ua)) return 'IE 10';
//         if (/MSIE 9\.0/i.test(ua)) return 'IE 9';
//         return 'IE';
//     }

//     if (/opera|opr/i.test(ua)) return 'Opera';

//     return 'Unknown Browser';
// }


// document.write(getOS() + '/' + getBrowser())


// -------------------------------------------------------

// 获取操作系统和浏览器信息的函数
// var getOSAndBrowser = function () {
//     var os = navigator.platform;
//     var userAgent = navigator.userAgent;
//     var info = '';
//     var tempArray = '';

//     // 检测操作系统
//     if (os.indexOf('Win') > -1) {
//         if (userAgent.indexOf('Windows NT 5.0') > -1) {
//             info += 'Win2000';
//         } else if (userAgent.indexOf('Windows NT 5.1') > -1 || userAgent.indexOf('Windows XP') > -1) {
//             info += 'WinXP';
//         } else if (userAgent.indexOf('Windows NT 5.2') > -1) {
//             info += 'Win2003';
//         } else if (userAgent.indexOf('Windows NT 6.0') > -1) {
//             info += 'WindowsVista';
//         } else if (userAgent.indexOf('Windows NT 6.1') > -1 || userAgent.indexOf('Windows 7') > -1) {
//             info += 'Win7';
//         } else if (userAgent.indexOf('Windows NT 6.2') > -1 || userAgent.indexOf('Windows 8') > -1) {
//             info += 'Win8';
//         } else if (userAgent.indexOf('Windows NT 6.3') > -1 || userAgent.indexOf('Windows 8.1') > -1) {
//             info += 'Win8.1';
//         } else if (userAgent.indexOf('Windows NT 10.0') > -1 || userAgent.indexOf('Windows 10') > -1) {
//             info += 'Win10';
//         } else {
//             info += 'Other';
//         }
//     } else if (os.indexOf('Mac') > -1) {
//         info += 'Mac';
//     } else if (os.indexOf('X11') > -1) {
//         info += 'Unix';
//     } else if (os.indexOf('Linux') > -1) {
//         info += 'Linux';
//     } else {
//         info += 'Other';
//     }

//     info += '/'; // 分隔符

//     // 浏览器检测
//     var isOpera = userAgent.indexOf('Opera') > -1;
//     var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera;
//     var isEdge = userAgent.toLowerCase().indexOf('edge') > -1 && !isIE;
//     var isIE11 = userAgent.toLowerCase().indexOf('trident') > -1 && userAgent.indexOf('rv') > -1;

//     // 判断具体浏览器类型
//     if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {
//         tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);
//         info += tempArray[1] + tempArray[2];
//     } else if (isIE) {
//         var version = '';
//         var fIEVersion = parseFloat(/MSIE (\d+\.?\d*);/.exec(userAgent)?.[1] || 0);
//         switch (fIEVersion) {
//             case 7: version = 'IE7'; break;
//             case 8: version = 'IE8'; break;
//             case 9: version = 'IE9'; break;
//             case 10: version = 'IE10'; break;
//             default: version = 'IE'; break;
//         }
//         info += version;
//     } else if (isEdge) {
//         info += 'Edge';
//     } else if (isIE11) {
//         info += 'IE11';
//     } else if (/[Cc]hrome\/\d+/.test(userAgent)) {
//         tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);
//         info += tempArray[1] + tempArray[2];
//     } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {
//         tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent);
//         info += tempArray[3] + tempArray[1]; // Safari 版本
//     } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {
//         tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);
//         info += tempArray[1] + tempArray[2];
//     } else {
//         info += 'unknown';
//     }

//     return info;
// };

// // 输出 IP 地址 + OS/Browser 信息（假设 returnCitySN 是外部提供）
// document.write(getOSAndBrowser());


// -------------------------

function getOS() {
    const ua = navigator.userAgent;
    const pf = navigator.platform.toLowerCase();

    if (pf.includes('win')) return 'Windows';
    if (pf.includes('mac')) return 'Mac';
    if (pf.includes('x11')) return 'Unix';
    if (pf.includes('linux')) return 'Linux';
    if (/android/i.test(ua)) return 'Android';
    if (/iphone|ipad|ipod/i.test(ua)) return 'iOS';

    return 'Unk OS';
}

function getBrowser() {
    const ua = navigator.userAgent;

    if (/firefox/i.test(ua)) {
        const match = ua.match(/Firefox\/(\d+)/i);
        return match ? `Firefox ${match[1]}` : 'Firefox';
    }

    if (/edg/i.test(ua)) {
        const match = ua.match(/Edg\/(\d+)/i);
        return match ? `Edge ${match[1]}` : 'Edge';
    }

    if (/chrome/i.test(ua) && !/edge/i.test(ua)) {
        const match = ua.match(/Chrome\/(\d+)/i);
        return match ? `Chrome ${match[1]}` : 'Chrome';
    }

    if (/safari/i.test(ua)) {
        const match = ua.match(/Version\/([\d\.]+)/i);
        return match ? `Safari ${match[1]}` : 'Safari';
    }

    if (/msie/i.test(ua) || /trident/i.test(ua)) {
        if (/rv:11\.0/i.test(ua)) return 'IE 11';
        if (/MSIE 10\.0/i.test(ua)) return 'IE 10';
        if (/MSIE 9\.0/i.test(ua)) return 'IE 9';
        return 'IE';
    }

    if (/opera|opr/i.test(ua)) return 'Opera';

    return 'Unk Browser';
}

// 输出示例：192.168.1.1 Windows/Chrome 126
document.write(getOS() + '/' + getBrowser());