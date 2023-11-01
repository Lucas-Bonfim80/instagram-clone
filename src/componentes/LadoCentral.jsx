import proa from "../assets/Proa.png";
import Story from "./Story";
import Feed from "./FeedInsta";
import Pan from "../assets/BancoPan.png"
import Bruna from "../assets/Pan-Bruna.png"
import umbuLogo from "../assets/logoumbu.png"
import PostUmbu from "../assets/PostUmbu.png";
import bellifeed from "../assets/belli.png";
import bellipro from "../assets/bellipro.jpg";
import osvaldopro from "../assets/osvaldopro.jpeg";
import osvaldofeed from "../assets/osvaldofeed.png";
import proafeed from "../assets/proafeed.png";
import senac from "../assets/senac.png";


export default function Ladocentral() {
    return (
        <div className="ladoCentral">
            <div className="story-order">

                <Story perfil={proa} nome="instituto.proa" />
                <Story perfil={umbuLogo} nome="sejaumbu" />
                <Story perfil={osvaldopro} nome="osvaldosal..." />
                <Story perfil={senac} nome="senactito" />
                <Story perfil={Pan} nome="Banco PAN" />
                <Story perfil={bellipro} nome="judebelling..." />
            </div>

            <Feed
                profile={Pan}
                username="Banco PAN"
                descName="bancopan"
                location="Brasil, São Paulo"
                img={Bruna}
                likes="1.984 likes"
                description="Seguir por caminhos inteligentes é uma consequência de momentos de pausa e reflexão. ver mais"
                SeeAll="See all 567 comments"
                user1="marquezinefc"
                cmmt1="Azul é mesmo a cor dela🩵"
                user2="caiocastro"
                cmmt2="Parabéns pela parceria Banco PAN👏👏👏"
            />

            <Feed
                profile={proa}
                username="Instituto PROA"
                descName="instituto.proa"
                location="Brasil, São Paulo"
                img={proafeed}
                likes="1.073 likes"
                description="🚀 DÊ O START NA SUA CARREIRA EM TECH: INSCRIÇÕES ABERTAS PARA A NOVA TURMA PROPROFISSÃO SP!"
                SeeAll="See all 219 comments"
                user1="gaba.augustoz"
                cmmt1="Vamos novos proanos!!!"
                user2="felipen4scimento"
                cmmt2="Amo ser um proano💙💙"
            />

            

            <Feed
                profile={bellipro}
                username="Jude Bellingham"
                descName="judebellingham"
                location="Spain, Madri"
                img={bellifeed}
                likes="2M likes"
                description="Hola Madridistas!🤍
                It is the proudest day of my life to join the greatest club in the history of the game. I will give absolutely everything I have to help this team win. Thank you for the amazing welcome. HALA MADRID!!!🤍🤍🤍"
                SeeAll="See all 152k comments"
                user1="vinijr"
                cmmt1="🔥🤍"
                user2="rodrygogoes"
                cmmt2="Hala madri"
            />

<Feed
                profile={umbuLogo}
                username="UMBU"
                descName="sejaumbu"
                location="Brazil, São Paulo"
                img={PostUmbu}
                likes="1.287 likes"
                description="Bem-vindo ao futuro da jardinagem! 🌱💚🍃
                Somos a plataforma que valoriza o trabalho dos jardineiros e conecta apaixonados por jardins a serviços personalizados de alta qualidade. 🌿🪴🌳
                "
                SeeAll="See all 253 comments"
                user1="voidmile"
                cmmt1="Orgulho de fazer parte desse projeto 💚"
                user2="bruno_jaidan_"
                cmmt2="Parabéns, equipe UMBU!! 👏🏾🪴 #SejaUMBU"
            />

            <Feed
                profile={osvaldopro}
                username="Osvaldola, o salsichola 🌭🐾"
                descName="osvaldosalsicha"
                location="Santa catarina, florianopolis"
                img={osvaldofeed}
                likes="11k likes"
                description="Profissão: Standart Analist ccoo na faria lima em uma startup de bitcoins e fofuras 😎"
                SeeAll="See all 2.955 comments"
                user1="melo_fernandes"
                cmmt1="meu deus que fofura❤️"
                user2="dev.maic"
                cmmt2="Eu quero um igual🐶"
            />

        </div>

    )
}