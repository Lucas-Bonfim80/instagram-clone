import julio from "../assets/julio.jpg"
import melanie from "../assets/melanie.jpg"
import tyler from "../assets/tyler.jpg"
import billie from "../assets/billie.webp"
import gabs from "../assets/gabs.jpg"
import Itemdireito from "./itemdireito"
import Lucas from "../assets/lucas.jpg"


export default function ladoDireito() {
    return (
        <div className="conteudodireito">
            <div className="perfil">


                <Itemdireito img={Lucas}
                    usuario={"yspeedd13_"}
                    nome={"ySpeedd"}
                    opcao={"To change"}>
                </Itemdireito>
            </div>

            <div className="sugestao">
                <p>Suggestions for you</p>
                <a>See all</a>
            </div>

            <div className="seguir">

                <Itemdireito img={billie}
                    usuario={"billieeilish"}
                    nome={"BILLIE EILISH"}
                    opcao={"follow"}>
                </Itemdireito>

                <Itemdireito img={gabs}
                    usuario={"gab.augustoz"}
                    nome={"Gabriel Augusto"}
                    opcao={"follow"}>
                </Itemdireito>

                <Itemdireito img={julio}
                    usuario={"cocielo"}
                    nome={"Júlio cocielo"}
                    opcao={"follow"}>
                </Itemdireito>

                <Itemdireito img={tyler}
                    usuario={"feliciathegoat"}
                    nome={"Tyler, The Creator"}
                    opcao={"follow"}>
                </Itemdireito>

                <Itemdireito img={melanie}
                    usuario={"littlebodybigheart"}
                    nome={"melanie martinez ⟡"}
                    opcao={"follow"}>
                </Itemdireito>


            </div>
        </div>
    )

}