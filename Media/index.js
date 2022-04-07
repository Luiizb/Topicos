
 function checkInpunt( nota1, nota2){
    if(nota1 === 0 && nota2 === 0){
      return (console.log("nota 0"))
    }else{
      const nota = (nota1+ nota2 ) / 2
      return nota;
    }
 }      

function calcNotas(){
  const aluno = String(document.getElementById("aluno").value)
  const inputN1 = parseFloat(document.getElementById("nota-1").value) 
  const inputN2 = parseFloat(document.getElementById("nota-2").value)
  const contentElement = document.querySelector(".text-p")
  const pTag = document.createElement("p")
  const strongTag = document.createElement("strong")
  
  
 
  
  contentElement.innerHTML = " ";
   const notaChecked =  checkInpunt(inputN1, inputN2, aluno)
  
  if(notaChecked){
   
    
    if(notaChecked >= 6){ 
     strongTag.textContent = notaChecked;
      pTag.classList.add("aprovate-true");
      pTag.textContent = aluno + " - Sua média é: "+ notaChecked +" (Aprovado)";
      contentElement.appendChild(pTag);
     
    }else{
      let p = document.createElement("p");
      p.classList.add("aprovate-false");
      p.textContent =  aluno + " - Sua média é: "+ notaChecked +" (Reprovado)";
      contentElement.appendChild(p);
       
    }
    
  }else{
      let p = document.createElement("p");
      p.classList.add("aprovate-empty");
      p.textContent = "Os campos estão em branco";
   contentElement.appendChild(p);
  }
 
}
    
    
   