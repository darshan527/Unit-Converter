// Function that calculates and updates the values
function calc(n) {
    let mf = document.getElementById("mf")
    mf.innerText = `${n} meters = ${(n * 3.281).toFixed(3)} feet | ${n} feet = ${(n / 3.281).toFixed(3)} meters`

    let lg = document.getElementById("lg")
    lg.innerText = `${n} liters = ${(n / 3.785).toFixed(3)} gallons | ${n} gallons = ${(n * 3.785).toFixed(3)} meters`

    let kp = document.getElementById("kp")
    kp.innerText = `${n} kilos = ${(n * 2.205).toFixed(3)} pounds | ${n} pounds = ${(n / 2.205).toFixed(3)} kilos`
}

// Get default value from HTML text input "0" and calculate the conversions
let val = document.getElementById("val")
calc(Number(val.value))

// Add event listner on text input when changed call calc() to render new conversions
val.addEventListener("change", (event) => {
    const n = Number(event.target.value)
    calc(n)
});

// Clear the Text box when clicked to type
val.addEventListener("click", () => {
    val.value = null;
})

// Dark Mode function that updates styles based on toggle value
function dark() {
    let tmp = document.querySelectorAll(".calc>h3")
    let tmp2 = document.querySelectorAll(".calc>p")

    tmp.forEach(obj => {
        obj.style.color = toggle ? "#FFF" : "#1A1921"
    })

    tmp2.forEach(obj => {
        obj.style.color = toggle ? "#D2D2D2" : null
    })
}

// Dark mode will be activated when clicked on title
let dn = document.getElementById("title")
let toggle = false
dn.addEventListener("click", (event) => {
    toggle = !toggle;
    document.getElementById("main").style.backgroundColor = toggle ? "#1F2937" : null;
    dark()
})

