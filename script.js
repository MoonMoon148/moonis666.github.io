window.onload = function() {
    if (localStorage.getItem('privacy-agreed') === 'true') {
        document.getElementById('privacy-overlay').style.display = 'none';
    }
}

function agree(isAgreed) {
    if (isAgreed) {
        alert("동의하셨습니다.");
        localStorage.setItem('privacy-agreed', 'true');
        document.getElementById('privacy-overlay').style.display = 'none';
    } else {
        alert("동의하지 않으시면 사이트를 이용하실 수 없습니다.");
        location.href = "https://www.google.com";
    }
}
