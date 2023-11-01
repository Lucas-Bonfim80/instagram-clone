export default function Story(props) {
    return (
        <div className="storyFeed">
            <div className="fundoImageUser">
                <img className="profilePic" src={props.perfil} alt={props.nome} />
            </div>
            <p>{props.nome}</p>

        </div>
    )
}