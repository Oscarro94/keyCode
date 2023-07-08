function keyCodes(e){
    const introduce = document.getElementById('introduce');
    introduce.innerHTML = '';

    const kCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.kCodes': e.keyCode,
        'e.code': e.code,
    };

    for (let key in kCodes){
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(kCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        introduce.appendChild(div);
    }
}

window.addEventListener('keydown', keyCodes)