var slcGrandeza = document.getElementById('slcGrandeza')
var slcInicial = document.getElementById('undInicial')
var slcFinal = document.getElementById('undFinal')
var displayOne = document.getElementById('fstInput')
var displayTwo = document.getElementById('scdInput')

window.onload = () => {
  let sltGrand = slcGrandeza.options[slcGrandeza.selectedIndex].value

  Inserir_Valores_Iniciais()
  Criar_Select(sltGrand)
  Inserir_Selected()
}

function Pegar_Selecionado(e) {
  let sltGrand = e.options[e.selectedIndex].value

  Limpar_Display()
  Limpar_Select()
  Criar_Select(sltGrand)
  Inserir_Selected()
}

function Criar_Select(selected) {
  let obj1 = { value: '', texto: '', index: 0 }
  let obj2 = { value: '', texto: '', index: 1 }
  let obj3 = { value: '', texto: '', index: 2 }
  let obj4 = { value: '', texto: '', index: 3 }

  switch (selected) {
    case 'massa':
      obj1.value = 'tn'
      obj1.texto = 'Tonelada'
      obj1.index = 0

      obj2.value = 'kg'
      obj2.texto = 'Quilograma'
      obj2.index = 1

      obj3.value = 'g'
      obj3.texto = 'Grama'
      obj3.index = 2

      obj4.value = 'mg'
      obj4.texto = 'Miligrama'
      obj4.index = 3

      Preencher_Select(obj1, slcInicial)
      Preencher_Select(obj2, slcInicial)
      Preencher_Select(obj3, slcInicial)
      Preencher_Select(obj4, slcInicial)

      Preencher_Select(obj1, slcFinal)
      Preencher_Select(obj2, slcFinal)
      Preencher_Select(obj3, slcFinal)
      Preencher_Select(obj4, slcFinal)
      break

    case 'area':
      obj1.value = 'km2'
      obj1.texto = 'Quilometro Quadrado'
      obj1.index = 0

      obj2.value = 'm2'
      obj2.texto = 'Metro Quadrado'
      obj2.index = 1

      obj3.value = 'milha2'
      obj3.texto = 'Milha Quadrada'
      obj3.index = 2

      Preencher_Select(obj1, slcInicial)
      Preencher_Select(obj2, slcInicial)
      Preencher_Select(obj3, slcInicial)

      Preencher_Select(obj1, slcFinal)
      Preencher_Select(obj2, slcFinal)
      Preencher_Select(obj3, slcFinal)
      break

    case 'volume':
      obj1.value = 'm3'
      obj1.texto = 'Metro Cubico'
      obj1.index = 0

      obj2.value = 'l'
      obj2.texto = 'Litro'
      obj2.index = 1

      obj3.value = 'ml'
      obj3.texto = 'Mililitro'
      obj3.index = 2

      Preencher_Select(obj1, slcInicial)
      Preencher_Select(obj2, slcInicial)
      Preencher_Select(obj3, slcInicial)

      Preencher_Select(obj1, slcFinal)
      Preencher_Select(obj2, slcFinal)
      Preencher_Select(obj3, slcFinal)
      break
  }
}

function Preencher_Select(objeto, select) {
  let elem = document.createElement('option')
  elem.value = objeto.value
  elem.text = objeto.texto

  select.add(elem, objeto.index)
}

function Limpar_Select() {
  for (let i = 0; i <= slcInicial.childElementCount + 1; i++) {
    slcInicial.remove(0)
    slcFinal.remove(0)
  }
}

function Inserir_Selected() {
  slcInicial.options[0].setAttribute('selected', 'selected')
  slcFinal.options[1].setAttribute('selected', 'selected')
}

function Inserir_Valores_Iniciais() {
  displayOne.value = 0
  displayTwo.value = 0
}

function Multiplicador(esc1, esc2, ativou) {
  let mult1 = 0
  let mult2 = 0
  switch (esc1) {
    case 'tn':
      mult1 = 1000000
      break
    case 'kg':
      mult1 = 1000
      break
    case 'g':
      mult1 = 1
      break
    case 'mg':
      mult1 = 0.001
      break
    case 'km2':
      mult1 = 1000000
      break
    case 'm2':
      mult1 = 1
      break
    case 'milha2':
      mult1 = 2590000
      break
    case 'm3':
      mult1 = 1000
      break
    case 'l':
      mult1 = 1
      break
    case 'ml':
      mult1 = 0.001
      break
  }
  switch (esc2) {
    case 'tn':
      mult2 = 1000000
      break
    case 'kg':
      mult2 = 1000
      break
    case 'g':
      mult2 = 1
      break
    case 'mg':
      mult2 = 0.001
      break
    case 'km2':
      mult2 = 1000000
      break
    case 'm2':
      mult2 = 1
      break
    case 'milha2':
      mult2 = 2590000
      break
    case 'm3':
      mult2 = 1000
      break
    case 'l':
      mult2 = 1
      break
    case 'ml':
      mult2 = 0.001
      break
  }

  if (ativou == 'fstInput') {
    return mult1 / mult2
  } else {
    return mult2 / mult1
  }
}

function Calcular(e) {
  let id = e.id
  let escolhido1 = slcInicial.options[slcInicial.selectedIndex].value
  let escolhido2 = slcFinal.options[slcFinal.selectedIndex].value

  let mult = Multiplicador(escolhido1, escolhido2, id)
  if (id == 'fstInput') {
    displayTwo.value = e.value * mult
  } else {
    displayOne.value = e.value * mult
  }
}

function Limpar_Display() {
  displayOne.value = 0
  displayTwo.value = 0
}
