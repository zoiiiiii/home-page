fetch('https://ipinfo.io/ip')
    .then(response => response.text())
    .then(ip => {
        document.getElementById('visitor-ip').textContent = ip.trim();
    })
    .catch(error => {
        document.getElementById('visitor-ip').textContent = '无法获取IP';
        console.error('获取IP失败:', error);
    });