// var getOSAndBrowser = function () { var os = navigator.platform, userAgent = navigator.userAgent, info = '', tempArray = ''; os.indexOf('Win') > -1 ? userAgent.indexOf('Windows NT 5.0') > -1 ? info += 'Win2000' : userAgent.indexOf('Windows NT 5.1') > -1 ? info += 'WinXP' : userAgent.indexOf('Windows NT 5.2') > -1 ? info += 'Win2003' : userAgent.indexOf('Windows NT 6.0') > -1 ? info += 'WindowsVista' : userAgent.indexOf('Windows NT 6.1') > -1 || userAgent.indexOf('Windows 7') > -1 ? info += 'Win7' : userAgent.indexOf('Windows NT 6.2') > -1 || userAgent.indexOf('Windows 8') > -1 ? info += 'Win8' : userAgent.indexOf('Windows NT 6.3') > -1 || userAgent.indexOf('Windows 8.1') > -1 ? info += 'Win8.1' : userAgent.indexOf('Windows NT 10.0') > -1 || userAgent.indexOf('Windows 10') > -1 ? info += 'Win10' : info += 'Other' : os.indexOf('Mac') > -1 ? info += 'Mac' : os.indexOf('X11') > -1 ? info += 'Unix' : os.indexOf('Linux') > -1 ? info += 'Linux' : info += 'Other', info += '/'; var isOpera = userAgent.indexOf('Opera') > -1, isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera, isEdge = userAgent.toLowerCase().indexOf('edge') > -1 && !isIE, isIE11 = userAgent.toLowerCase().indexOf('trident') > -1 && userAgent.indexOf('rv') > -1; if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) info += (tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent))[1] + tempArray[2]; else if (isIE) { var version = '', reIE; new RegExp('MSIE (\\d+\\.\\d+);').test(userAgent); var fIEVersion = parseFloat(RegExp.$1); info += version = 7 == fIEVersion ? 'IE7' : 8 == fIEVersion ? 'IE8' : 9 == fIEVersion ? 'IE9' : 10 == fIEVersion ? 'IE10' : '0' } else isEdge ? info += 'Edge' : isIE11 ? info += 'IE11' : /[Cc]hrome\/\d+/.test(userAgent) ? info += (tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent))[1] + tempArray[2] : /[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent) ? info += (tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent))[3] + tempArray[1] : /[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent) ? info += (tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent))[1] + tempArray[2] : info += 'unknown'; return info }; document.write(returnCitySN.cip + ' ' + getOSAndBrowser());

// ================== 工具函数 ==================

// 1. 获取操作系统
function getOS() {
    const ua = navigator.userAgent;
    const platform = navigator.platform.toLowerCase();

    if (platform.includes('win')) return 'Windows';
    if (platform.includes('mac')) return 'Mac';
    if (platform.includes('x11')) return 'Unix';
    if (platform.includes('linux')) return 'Linux';
    if (/android/.test(ua)) return 'Android';
    if (/iphone|ipad|ipod/.test(ua)) return 'iOS';

    return 'Unknown OS';
}

// 2. 获取浏览器名称和版本
function getBrowser() {
    const ua = navigator.userAgent;

    if (/firefox/i.test(ua)) {
        const verMatch = ua.match(/Firefox\/(\d+)/i);
        return verMatch ? 'Firefox ' + verMatch[1] : 'Firefox';
    }

    if (/edg/i.test(ua)) {
        const verMatch = ua.match(/Edg\/(\d+)/i);
        return verMatch ? 'Edge ' + verMatch[1] : 'Edge';
    }

    if (/chrome/i.test(ua) && !/edge/i.test(ua)) {
        const verMatch = ua.match(/Chrome\/(\d+)/i);
        return verMatch ? 'Chrome ' + verMatch[1] : 'Chrome';
    }

    if (/safari/i.test(ua)) {
        const verMatch = ua.match(/Version\/(\d+[\.\d]*)/i);
        return verMatch ? 'Safari ' + verMatch[1] : 'Safari';
    }

    if (/msie/i.test(ua) || /trident/i.test(ua)) {
        if (/rv:11\.0/i.test(ua)) return 'IE 11';
        if (/MSIE 10\.0/i.test(ua)) return 'IE 10';
        if (/MSIE 9\.0/i.test(ua)) return 'IE 9';
        return 'IE';
    }

    if (/opera|opr/i.test(ua)) return 'Opera';

    return 'Unknown Browser';
}

// 3. 使用 ipapi.co 获取 IP 地址（异步）
// function fetchIP(callback) {
//     fetch('https://ipapi.co/json/')
//         .then(response => response.json())
//         .then(data => {
//             callback(null, data.ip || '未知');
//         })
//         .catch(err => {
//             console.error('获取IP失败:', err);
//             callback('Error fetching IP', '未知');
//         });
// }
// 使用 async/await 方式获取 IP
// async function getIP() {
//   try {
//     const response = await fetch('https://ipapi.co/json/');
//     if (!response.ok) {
//       throw new Error('网络请求失败');
//     }
//     const data = await response.json();
//     const ip = data.ip; // 提取 IP 地址

//     // 现在你可以在其他代码中使用这个 ip 变量
//     console.log('获取到的 IP 是:', ip);

//     // 示例：调用其他函数并传入 ip
//     doSomethingWithIP(ip);
    
//   } catch (error) {
//     console.error('获取 IP 失败:', error);
//   }
// }

// // 示例函数，使用获取到的 IP
// function doSomethingWithIP(ip) {
//   console.log(`正在使用 IP: ${ip} 做一些事情...`);
//   // 在这里写你需要对 IP 进行操作的逻辑
// }

// // 调用主函数

// console.log(getIP());


// 页面加载完成后执行
document.write(returnCitySN["cip"] +' ' + getOS() +'/'+ getBrowser())