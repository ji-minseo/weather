const sunnyMove = (e) => {
    document.querySelector('.sunny-sun').style.top = `${(e.y / window.innerHeight) * (window.innerHeight * 0.5)}px`;
    document.querySelector('.sunny-sun').style.left = `${(e.x / window.innerWidth) * (window.innerWidth * 0.5)}px`;

    document.querySelector('.sun-circle').style.boxShadow = `inset ${e.x / window.innerWidth * 32 - 8}px ${e.y / window.innerHeight * 32 - 8}px 26px rgba(0, 0, 0, 0.25)`;
}

window.addEventListener('mousemove', sunnyMove)