function toggleMode() {

  //pegando o HTML
  const html = document.documentElement

  //troca das classes
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains("light")) {
    
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {

    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}