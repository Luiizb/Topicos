fetch("https://raw.githubusercontent.com/LuizStocco/Json.Alunos/main/Json/Alunos.json")
.then(response => response.json())
.then(json =>{
  const nomeinput =  document.getElementById("Nome")
  nomeinput.value = json.nome
  
  json.Provas.forEach(prova => {
      const provasul = document.getElementById("provas")
      const disciplina = document.createElement("p")
      disciplina.innerText = prova.disciplina
      const data = document.createElement("p")
            data.innerText = prova.data 
        const provali = document.createElement("li")
        provali.appendChild(disciplina)
        provali.appendChild(data)     
        provasul.appendChild(provali)
  });

})



