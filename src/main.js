import './style.css'
import { setupCounter } from './counter.js'
import { navbar } from './components/navbar.js'
import { landingMain } from './components/landing-main.js'
import { component1 } from './components/componen1.js'

document.querySelector('#app').innerHTML = `
${navbar}

${landingMain}

<div>
    ${component1}
</div>


`

setupCounter(document.querySelector('#counter'))
