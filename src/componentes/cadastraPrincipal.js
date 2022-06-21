import urlParamentro from '../lib/objectToQueryString.js'
var urlNavegador = location.href

export default function cadastraPrincipal() {
  

    function geraStringAleatoria(tamanho) {
        var stringAleatoria = '';
        var caracteres = '0123456789';
        for (var i = 0; i < tamanho; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return stringAleatoria;
    }  

    window.onload = function aramentroUrl(){
        const resultadoDoBanco = JSON.parse(localStorage.getItem('indetificacaoTicket') || "[]")
       
        const dados = urlParamentro(resultadoDoBanco)

        if (localStorage.hasOwnProperty("indetificacaoTicket")){
            window.location.href = `${urlNavegador}?${dados}`  
        }
  
       

    }

     window.salvarLoja = (dados) => {
        const Nome = document.querySelector(".Name").value
        const imagemUrl = document.querySelector(".imagem").value       
        const valorTicket =  geraStringAleatoria(8)
      


        if (!Nome || !imagemUrl || !valorTicket) {
            alert("Valores obrigatorios para todos os campos")
        } else {          
            const miniSite = {
                            Nome,
                            imagemUrl,                         
                            valorTicket
                         }

            localStorage.setItem('indetificacaoTicket', JSON.stringify(miniSite))
            window.location.reload()
       
        }
    }

    

    return `    
      <img class="imgLogo" src="./src/img/logo.png" height="300px">
    <div class="form login">
   
    <span class="title">Crie seu tiket</span>

    <form action="#">
        <div class="input-field">
            <input type="text" class="Name" placeholder="Digite seu nome" required>
        </div>

        <div class="input-field">
            <input type="text" class="imagem" placeholder="URL de uma imagem" required>                          
        </div>   
        <div class="input-field button">
            <input type="button" value="Salvar" onclick="salvarLoja()">
        </div>
        <br>
        <br>
        <br>
        <br>
    </form>    

</div>
    `

}