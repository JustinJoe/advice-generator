const adviceNumber = document.querySelector('cite')
const advice = document.querySelector('blockquote')
const button = document.querySelector('.card__button')

button.addEventListener('click', async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
    const message = data.slip

    adviceNumber.innerText = `Advice #${message.id}`
    advice.innerText = `${message.advice}`
}
)
