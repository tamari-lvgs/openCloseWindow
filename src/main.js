const openButton = document.getElementById("open")
let newWindow
openButton.addEventListener("click", () => {
    newWindow = window.open("http://127.0.0.1:5500/public/proxy.html")
})

const closeButton = document.getElementById("close")
closeButton.addEventListener("click", () => {
    newWindow.close()
})