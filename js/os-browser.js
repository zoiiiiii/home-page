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

    return 'Unk B';
}

// 输出示例：192.168.1.1 Windows/Chrome 126
document.write(getOS() + '/' + getBrowser());