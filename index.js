export default function Boton ({texto = "Enviar", evento}) {
    function reaccionDefault(){
        console.log("Se hizo click sobre el boton")
    }
    return (
        <button onClick={()=>{
            if(evento){
                evento()
            }else{
                reaccionDefault()
            }
        }}>{texto}</button>
    )
}