function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 5;
    const delay = Math.random() * 2;
    
    snowflake.style.left = left + 'px';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = delay + 's';
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => snowflake.remove(), (duration + delay) * 1000);
}

for (let i = 0; i < 10; i++) {
    createSnowflake();
}

setInterval(createSnowflake, 400);
