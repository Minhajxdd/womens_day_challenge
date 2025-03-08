import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { navbar } from './components/navbar.js'

document.querySelector('#app').innerHTML = `
${navbar}    

`

setupCounter(document.querySelector('#counter'))
