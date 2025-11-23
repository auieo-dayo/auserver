document.addEventListener("DOMContentLoaded",()=>{
    const elements = document.querySelectorAll('.float-in');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // 一度だけでOKなら外す
        }
    });
    }, {
    threshold: 0.6 // 60%見えたら発動
    });

    elements.forEach(el => observer.observe(el));
})

document.addEventListener("DOMContentLoaded",async()=>{
    if (location.search == "?debug") return
    const bdsstatusres = await fetch("https://api.mcsrvstat.us/bedrock/3/star.ssnetwork.io:52532")
    const json = await bdsstatusres.json()
    const date = new Date()
    let hh = String(date.getHours()).padStart(2, "0");
    let mm = String(date.getMinutes()).padStart(2, "0");
    let ss = String(date.getSeconds()).padStart(2, "0");
    const player = json.players
    for (const ele of document.querySelectorAll(".bdsstatus")) {
        if (json.online) {
            ele.querySelector(".isonline").classList.add("online")
            ele.querySelector(".isonline").textContent = "オンライン"
            ele.querySelector(".player").textContent = `${player.online}/${player.max}`
        } else {
            ele.querySelector(".isonline").textContent = "オフライン"
            ele.querySelector(".isonline").classList.add("offline")
        }
        ele.querySelector(".gettime").textContent = `${hh}:${mm}:${ss}`
    }
})