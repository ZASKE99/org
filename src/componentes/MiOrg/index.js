import {useState} from "react"
import "./MiOrg.css"
const Miorg = (props) => {
    //Estado - hook
    //hook - useState
    //useState()
    //const [Nombre de la variable, funcion que actualiza] = useState(valorInicial)
    //const [mostrar,actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
                <h3 className="title">Mi organización</h3>
                <img src="/img/add.svg" alt="add" onClick={props.cambiarMostrar} />
           </section>
}

export default Miorg