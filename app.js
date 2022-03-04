
//animation text

const animatedTexts = document.querySelectorAll(".animated-text");

function animateText(animatedText) {
    const text = animatedText.textContent;
    let speed  = animatedText.getAttribute("speed");
    let delay = animatedText.getAttribute("delay");
    if (speed == null) {
        speed = 15;
    }
    

    animatedText.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            animatedText.innerHTML += " ";
        }
        animatedText.innerHTML += `<span>${text[i]}</span>`;
    }

    setTimeout(function(){
        let idx = 0;
        function writeChar() {
            const span = animatedText.querySelectorAll("span")[idx];
            span.classList.add("fade");
            idx++;            
            if (idx == text.length) {
                clearInterval(writeCharInterval);
            }
        }

        let writeCharInterval = setInterval(writeChar, speed);
    }, delay);    
}

animatedTexts.forEach(animateText);




// apparission des articles lors du scroll API instersectionObserver...

const ratio = .7
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
}

const handleIntersect = function (entries,observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) {
    observer.observe(r) 

})