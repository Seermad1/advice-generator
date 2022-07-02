const dice = document.getElementById("dice")
const adviceId = document.getElementById("advice_id")
const advice = document.getElementById("advice")

let getAdvice = async ()=>{
    let response = await fetch("https://api.adviceslip.com/advice")
    let data = await response.json()
    let  id = data.slip.id
    let adviceMessage = data.slip.advice

    adviceId.innerHTML = id
    advice.innerHTML = adviceMessage
}

getAdvice()

dice.addEventListener("click", getAdvice)