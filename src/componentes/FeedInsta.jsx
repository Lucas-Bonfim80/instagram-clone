import { BsThreeDots } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/Ai";
import { PiShareFatLight } from "react-icons/pi";
import { BsFillBookmarkStarFill } from "react-icons/bs";

export default function Feed(props) {
    return (
        <div className="feed">
            <div className="infotop">
                <div className="cima">
                    <div className="border">
                        <img className="profilePicfeed2" src={props.profile} />
                    </div>
                    <div className="nameLoc">
                        <h4> {props.username} </h4>
                        <p>{props.location}</p>
                    </div>
                </div>
                <i><BsThreeDots /></i>
            </div>
            <img className="imgFeed" src={props.img} />
            <div className="space-icons">
                <div className="iconsPost">
                    < BsFillHeartFill className="heart" />
                    < AiOutlineMessage />
                    < PiShareFatLight />
                </div>
                <div>
                    < BsFillBookmarkStarFill id="save" />
                </div>
            </div>
            <div className="bold">
                {props.likes}
            </div>
            <div className="descripition">
                <h4>{props.descName}</h4>
                {props.description}
            </div>

            <div className="sal">
                {props.SeeAll}
            </div>

            <div className="Comment">
                <h4>{props.user1}</h4>
                {props.cmmt1}
            </div>
            <div className="Comment">
                <h4>{props.user2}</h4>
                {props.cmmt2}
            </div>
            <div className="Comment">
                <h4>{props.user3}</h4>
                {props.cmmt3}
            </div>
            <div className="Comment">
                <h4>{props.user4}</h4>
                {props.cmmt4}
            </div>
            <div className="Comment">
                <h4>{props.user5}</h4>
                {props.cmmt5}
            </div>
            <hr />
        </div>
    )
}
