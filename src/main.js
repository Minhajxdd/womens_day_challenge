import './style.css'
import { setupCounter } from './counter.js'
import { navbar } from './components/navbar.js'
import { landingMain } from './components/landing-main.js'
import { component1 } from './components/componen1.js'
import { component2 } from './components/component2.js'
import { footer } from './components/footer.js'

document.querySelector('#app').innerHTML = `
${navbar}

${landingMain}

<div class="mt-[-100px]">
    
    ${component1}

    ${component2}
</div>

${footer}


`

setupCounter(document.querySelector('#counter'))
