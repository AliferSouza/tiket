import dadosURL from '../lib/resolverUrlParamentro.js'
const dadosUrl = dadosURL()
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

    }else if (toke.length === 3) {
    toke.push(props)
    localStorage.setItem("toke", JSON.stringify(toke))

    }
    else if (toke.length === 4) {
        toke.push(props)
        localStorage.setItem("toke", JSON.stringify(toke))
    
    }



    if (toke.length == 30) {


        return `
        

    <img class="imgLogo" src="./src/img/logo.png" height="400px">
  <div class="containerTicket">
      <div class="conteinerImgmiasInformacoes">
      <div class="conteinerImg">
          <div></div>
          <img class="conteinerImgFormat" src="${dadosUrl.imagemUrl}" height="100">
          
          </div>

          <div class="conteinerInformacoes">
              <h1 class="conteinerInformacoesColor">BEM - VINDO</h1>
              <h2 class="conteinerInformacoesColor" >${dadosUrl.Nome}</h2>
              <h4 class="conteinerInformacoesColor conteinerInformacoesNumero" >Tiket:${dadosUrl.valorTicket}</h4>
           </div>           

      </div>      

  
  </div>

  <br>
  <br>
      <h4  style="color: #fff; font-size: 12px;"> Pedeu a oportunidade!!!</h4>
  <br>
 
  <br>
 
  
  `


    } else {


        return `
        <img class="imgLogo2" src="./src/img/logo.png" height="400px">
  <div class="containerTicket">
      <div class="conteinerImgmiasInformacoes">
      <div class="colar"></div>
      <div class="conteinerImg">         
          <img class="conteinerImgFormat" src="${dadosUrl.imagemUrl}" height="100">          
          </div>

          <div class="conteinerInformacoes">
              <h1 class="conteinerInformacoesColor">BEM - VINDO</h1>
              <h2 class="conteinerInformacoesColor" >${dadosUrl.Nome}</h2>
              <h4 class="conteinerInformacoesColor conteinerInformacoesNumero" >Tiket:${dadosUrl.valorTicket}</h4>
           </div>           

      </div>      

  
  </div>

  <br>
  <br>
      <h4 style="color: #fff; font-size: 12px;"> Preencha as informações abaixo</h4>
      <h4 style="color: #fff; font-size: 12px;"> antes que perca a oportunidade [${toke.length}] de [4]</h4>
  <br>
 
  <br>
  
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfqnnYk7tWl0Fq-qjcWGfxje3nDltsyboR2IlldtB2ZLN_Xhw/viewform?embedded=true" width="500" height="300" frameborder="0" marginheight="0" marginwidth="0"scrolling="no" >Carregando…</iframe>





  `
    }
}