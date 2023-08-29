function verificar() {
  let altura = document.getElementById('altura')
  let peso = document.getElementById('peso')
  let res = document.getElementById('res')
  let imc = 0

  let categoria01 = document.getElementById('categoria01')
  let categoria02 = document.getElementById('categoria02')
  let categoria03 = document.getElementById('categoria03')
  let categoria04 = document.getElementById('categoria04')

  if (altura.value == 0 || peso.value == 0) {
    alert("Verifique os dados e tente novamente!")
  }

  else {

    imc = peso.value / (altura.value * altura.value)

    res.innerHTML = `O seu IMC é ${imc.toFixed(1)}`

    if (imc < 22) {
      categoria01.style.opacity = '1'
    }

    else if (imc >= 22 && imc < 27) {
      categoria02.style.opacity = '1'
    }
    
    else if (imc > 27 && imc <= 29) {
      categoria03.style.opacity = '1'
    }

    else {
      categoria04.style.opacity = '1'
    }
  }
}

let clear = document.getElementById('clear')
let vass = document.getElementById('limpar')

clear.addEventListener('click', () => {
  vass.click()
})

function reset() {

  res.innerHTML = ''
  altura.value = ''
  peso.value = ''

  categoria01.style.opacity = '0.5'
  categoria02.style.opacity = '0.5'
  categoria03.style.opacity = '0.5'
  categoria04.style.opacity = '0.5'
}
