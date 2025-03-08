import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { navbar } from './components/navbar.js'
import { landingMain } from './components/landing-main.js'

document.querySelector('#app').innerHTML = `
${navbar}

<div>${landingMain}</div>

`

setupCounter(document.querySelector('#counter'))
