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


document.write(getOS() + '/' + getBrowser())
