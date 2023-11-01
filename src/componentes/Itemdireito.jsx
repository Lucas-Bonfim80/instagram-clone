
export default function Itemdireito(props) {
    return (
        <div className="itemdireito">
            <div className="user">

                <img src={props.img} alt="" />
                <div className="infousuario">
                    <p className="negrito">{props.usuario}</p>
                    <p>{props.nome}</p>

                </div>
            </div>
            <p className="opcao">{props.opcao}</p>
        </div>
    )
}