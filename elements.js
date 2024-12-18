
const form = document.getElementsByTagName('form')[0]

const inputs = document.getElementsByTagName('input')

const passwordEls = document.getElementsByClassName('password')

const symbols = document.getElementById('symbols')
const numbers = document.getElementById('numbers')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const length = document.getElementById('length')

// Add event listeners to the form


export { form, symbols, numbers, lowercase, uppercase, length, passwordEls }