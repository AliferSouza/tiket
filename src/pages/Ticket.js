import dadosURL from '../lib/resolverUrlParamentro.js'
const dadosUrl = dadosURL()
var [url1, url2] = location.href.split("?")
export default function Tiket() {
    const props = "toke"
    const toke = JSON.parse(localStorage.getItem('toke') || "[]")


    if (!localStorage.hasOwnProperty("toke")) {
        toke.push(props)
        localStorage.setItem("toke", JSON.stringify(toke))
    } else if (toke.length === 1) {
        toke.push(props)
        localStorage.setItem("toke", JSON.stringify(toke))

    } else if (toke.length === 2) {
        toke.push(props)
        localStorage.setItem("toke", JSON.stringify(toke))

    }

    const verificarValor = localStorage.hasOwnProperty("indetificacaoTicket")



    if (verificarValor) {
        return `       
        <img class="imgLogo2" src="./src/img/logo.png" height="400px">
             <div class="containerTicket">
                 <div class="conteinerImgmiasInformacoes">
                 <div class="conteinerImg">              
                 <img class="conteinerImgFormat" src="${dadosUrl.Foto}" height="100">                          
             </div>

                 <div class="conteinerInformacoes">
                      <h1 class="conteinerInformacoesColor">BEM - VINDO</h1>
                      <h2 class="conteinerInformacoesColor" >${dadosUrl.Nome} ${dadosUrl.Sobrenome}</h2>
                      <h4 class="conteinerInformacoesColor conteinerInformacoesNumero" >Tiket:${dadosUrl.valorTicket}</h4>
                 </div>    
                 </div> 
                 </div>
                <br><br>
               ${toke.length == 3 ? `<h4 style="color:#fff">Acabou as tentativas!</h4>` : `<h3 >Responda o formulario abaixo></h3>
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwSdocVw4zAEvYDeaLRhBmZwGPdRdz3mU59365NeTJLF5l1A/viewform?embedded=true"
               width="500" height="300" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" >Carregando…</iframe>`} 
               <br> `
    } else {


        return `
        <img class="imgLogo2" src="./src/img/logo.png" height="400px">
             <div class="containerTicket">
                 <div class="conteinerImgmiasInformacoes">    
                 <div class="conteinerImg">         
                 <img class="conteinerImgFormat" src="${dadosUrl.Foto}" height="100">          
            </div>

            <div class="conteinerInformacoes">
                <h1 class="conteinerInformacoesColor">BEM - VINDO</h1>
                <h2 class="conteinerInformacoesColor" >${dadosUrl.Nome} ${dadosUrl.Sobrenome}</h2>
                <h4 class="conteinerInformacoesColor conteinerInformacoesNumero" >Ticket:${dadosUrl.valorTicket}</h4>
            </div>           

      </div>      
      </div>

        <br>
        <br>
                <a style="color: #fff; font-size: 20px;" href="${url1}">Crie o seu ticket</a>
        
        <br>
        <br>

  `
    }
}