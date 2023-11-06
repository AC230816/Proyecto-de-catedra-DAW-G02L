import '../css/Boton.css';

export function Boton({ clase,contenido }){
    return (
        <button className={ clase }>{ contenido }</button>
    )
}