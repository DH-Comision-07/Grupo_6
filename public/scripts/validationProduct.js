window.onload = () => {
  // ELEMENTOS
  let name = document.querySelector("#name");
  let valiName = document.querySelector("#valiname");
  let desc = document.querySelector("#description");
  let valiDesc = document.querySelector("#validesc");
  let image = document.querySelector("#image");
  let valiImg = document.querySelector("#valiimg");

  // NOMBRE
  name.onchange = () => {
    valiName.style.display = "none";

    if (name.value.length == 0) {
      valiName.style.display = "block";
      valiName.innerText = "El nombre no puede estar vacío";
    } else {
      if (name.value.length < 5) {
        valiName.style.display = "block";
        valiName.innerText = "El nombre debe tener como minimo 5 caracteres.";
      }
    }
  };

  // DESCRIPCION
  desc.onchange = () => {
    valiDesc.style.display = "none";

    if (desc.value.length < 20) {
      valiDesc.style.display = "block";
      valiDesc.innerText =
        "La descripcion debe tener como minimo 20 caracteres.";
    }
  };

  // IMAGEN
  image.onchange = () => {
      valiImg.style.display = 'none'
      let file = document.querySelector("#image").value
      let ext = file.substring(file.lastIndexOf('.'),file.length)
      if(image.getAttribute('accept').split(',').indexOf(ext) < 0) {
          valiImg.style.display = 'block'
          valiImg.innerText = 'La imagen debe ser formato PNG, JPEG, JPG o GIF.'
      }
  }
};
