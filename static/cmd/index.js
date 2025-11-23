let isopenadmin = false
function openadmin() {
    const admincmd = document.getElementById("admincmd")
    if (!isopenadmin) {
        admincmd.style.display = "block"
        isopenadmin = true
    } else {
        admincmd.style.display = "none"
        isopenadmin = false
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("openadmincmd").addEventListener("click",()=>{
        openadmin()
    })
})