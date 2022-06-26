import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const key = 'a';
import(`./resource-${key}.json?raw`)
.then(it => app.innerHTML = it.default);
