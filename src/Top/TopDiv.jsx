import './TopDiv.css'
import avatar from '../assets/images/avatar-jessica.jpeg'
function TopDiv(){
    return (
        <div id='div1'>
            <img src={avatar} />
            <h3>Jessica Randall</h3>
            <label>London, United Kingdom </label>
            <q>Front-end developer and avid reader.</q>
        </div>
    )
}
export default TopDiv