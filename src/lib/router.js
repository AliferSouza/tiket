import RenderRouter from './renderRouter.js'

function router(prop) {
    const path = window.location.pathname
    const key = Object.keys(prop)  
     

    if (prop.URL) {
        var rendeComponente = prop.Tiket
    }else{
         var rendeComponente =  prop.Home 
    }


    RenderRouter(rendeComponente)
}







export { router }