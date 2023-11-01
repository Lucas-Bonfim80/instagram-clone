import ItemMenu from "./ItemMenu"
import nomeinstagram from "../assets/instagram_logo.png";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiOutlineMessage } from "react-icons/Ai";
import { FiPlusSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/Cg";
import { LiaAtSolid } from "react-icons/lia";


export default function Ladoesquerdo() {
    return (
        <div className='ladoesquerdo' id="ladoesquerdo">
            <div className="logoleft">

                <img className="insta-name" src={nomeinstagram} alt="instagram name" />

            </div>

            <div className="WrapMenu" id="WrapMenu">
                <ul>
                    <li className="MarginMenu" > <ItemMenu icone={<BsFillHouseDoorFill />} texto=" home page" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<GrSearch />} texto=" Search" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<MdOutlineExplore />} texto=" To explore" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<TfiVideoClapper />} texto=" Reels" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<AiOutlineMessage />} texto=" Messages" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<GrSearch />} texto=" Notifications" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<FiPlusSquare />} texto=" To create" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<CgProfile />} texto=" Profile" /> </li>

                </ul>
            </div>

            <div className="BottomMenu" id="BottomMenu">

                <ul>
                    <li className="MarginMenu" > <ItemMenu icone={<LiaAtSolid />} texto=" Threads" /> </li>

                    <li className="MarginMenu" > <ItemMenu icone={<BsList />} texto=" More" /> </li>
                </ul>

            </div>
        </div>
    )
}