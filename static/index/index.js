document.addEventListener("DOMContentLoaded",async()=>{
    document.querySelectorAll(".clickopen").forEach((element)=>{
        element.addEventListener("click",(ev)=>{
            if (confirm("別タブで画像を開きますか？")) {
                window.open(ev.target.src,"_blank")
            }
        })
    })
})