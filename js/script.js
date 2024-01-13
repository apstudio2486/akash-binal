// ====================== 
// ====================== DAY Counter
// ====================== 

        const year = (new Date().getFullYear()) ;
        const weddingDate = new Date('march 11 2024 17:30:00 GMT+0300').getTime();
        // countdown
        let timer = setInterval(function() {

        // get today's date
        const today = new Date().getTime();

        // get the difference
        const diff = weddingDate - today;

        // math
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // display
        document.getElementById("timer").innerHTML =
            "<div class=\"days\"> \
        <div class=\"numbers\">" + days + "</div>days</div> \
        <div class=\"hours\"> \
        <div class=\"numbers\">" + hours + "</div>hours</div> \
        <div class=\"minutes\"> \
        <div class=\"numbers\">" + minutes + "</div>minutes</div> \
        <div class=\"seconds\"> \
        <div class=\"numbers\">" + seconds + "</div>seconds</div> \
        </div>";

        }, 1000);
            
// ====================== 
// ====================== Heart Rain
// ====================== 

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
}
setInterval(createHeart, 300);