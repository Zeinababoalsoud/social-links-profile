import Selectors from '../Selectors/Selectors'
import './DownDiv.css'
function DownDiv(){
    return(
        <div id='div2'>
            <Selectors SelectionName='GitHub'></Selectors>
            <Selectors SelectionName='Fronted Mentor'></Selectors>
            <Selectors SelectionName='Linkedin'></Selectors>
            <Selectors SelectionName='Twitter'></Selectors>
            <Selectors SelectionName='Instgram'></Selectors>

        </div>
    )
}
export default DownDiv