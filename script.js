const btn = document.querySelector('button');

function motion() {
    let height = Math.floor(Math.random() * window.innerHeight);

    let width = Math.floor(Math.random() * window.innerWidth);

    btn.style.top = `${height}px`;
    btn.style.left = `${width}px`;
}

btn.addEventListener('mouseover', motion);

btn.addEventListener('click', function () {
    btn.removeEventListener('mouseover', motion);
    btn.innerText = 'So, You Got me🙌. Refresh to play again';
    alert("You won! Now leave me alone😒");
    btn.style.backgroundColor = '#ff677e';
    btn.style.color = '#FFF';
    btn.style.border = '.5rem solid #fff';
});
