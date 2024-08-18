//---Selección de Elementos---//
const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptar"); 
const warning = document.querySelector(".warning-text");
const response = document.querySelector(".respuesta");
const contenido = document.querySelector(".card-container");
const btnCopiar = document.querySelector(".btn-copy");
const btnDesencriptar = document.querySelector(".btn-desencriptar");


//---configuracion de metodos para warnings---//

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        warning.style.background = "#e60026";
        warning.style.color = "#e3dac9";
        warning.style.fontWeight = "800";
        warning.textContent = "El campo de texto NO puede estar vacio";

        setTimeout(()=>{
            warning.removeAttribute("style");
        },1500);
    }

   else if(texto !== txt){
        warning.style.background = "#e60026";
        warning.style.color = "#e3dac9";
        warning.style.fontWeight = "800";
        warning.textContent = "El texto NO debe tener acentos ni caracteres especiales";
        warning.style.fontColor = "#ff4500";

        setTimeout(()=>{
            warning.removeAttribute("style");
        },1500);  

    }

    else if(texto !== texto.toLowerCase()){
        warning.style.background = "#e60026";
        warning.style.color = "#e3dac9";
        warning.style.fontWeight = "800";
        warning.textContent = "El texto NO debe tener letras mayúsculas";

        setTimeout(()=>{
            warning.removeAttribute("style");
        },1500);
    }

//---configuracion de metodos de Encriptación---//

else {
    texto = texto.replace(/e/mg,"enter");
    texto = texto.replace(/i/mg,"imes");
    texto = texto.replace(/a/mg,"ai");
    texto = texto.replace(/o/mg,"ober");
    texto = texto.replace(/u/mg,"ufat");

    response.innerHTML = texto;
    btnCopiar.style.visibility ="inherit";
    contenido.remove();
    
}
});


//---configuracion de metodos de warnings y Desencriptar---//

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        warning.style.background = "#e60026";
        warning.style.color = "#e3dac9";
        warning.style.fontWeight = "800";
        warning.textContent = "El campo de texto NO puede estar vacio";

        setTimeout(()=>{
            warning.removeAttribute("style");
        },1500);
    }

   else if(texto !== txt){
        warning.style.background = "#e60026";
        warning.style.color = "#e3dac9";
        warning.style.fontWeight = "800";
        warning.textContent = "El texto NO debe tener acentos ni caracteres especiales";
        warning.style.fontColor = "#ff4500";

        setTimeout(()=>{
            warning.removeAttribute("style");
        },1500);  

    }

    else if(texto !== texto.toLowerCase()){
        warning.style.background = "#e60026";
        warning.style.color = "#e3dac9";
        warning.style.fontWeight = "800";
        warning.textContent = "El texto NO debe tener letras mayúsculas";

        setTimeout(()=>{
            warning.removeAttribute("style");
        },1500);
    }

//---configuracion de metodos de Desencriptación---//

else {
    texto = texto.replace(/enter/mg,"e");
    texto = texto.replace(/imes/mg,"i");
    texto = texto.replace(/ai/mg,"a");
    texto = texto.replace(/ober/mg,"o");
    texto = texto.replace(/ufat/mg,"u");

    response.innerHTML = texto;
    btnCopiar.style.visibility ="inherit";
    contenido.remove();
    
}
});


//---Configuracin de boton Copiar--//

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = response;
    copiar.select();
    document.execCommand("copy");

})