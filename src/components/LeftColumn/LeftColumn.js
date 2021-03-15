import './LeftColumn.css'
import MarathonLogo from './MarathonLogo/MarathonLogo'
import hexagon_gradient_2 from '../../icons/hexagon-gradient-2.png'
import hexagon_gradient_5 from '../../icons/hexagon-gradient-5.png'
import News from './News/News'

function LeftColumn() {
    return (
        <article className='LeftColumn'>
            <MarathonLogo/>
            <img src={hexagon_gradient_2} className='hexagon_gradient_2' alt='hexagon_gradient_2'/>
            <img src={hexagon_gradient_5} className='hexagon_gradient_5' alt='hexagon_gradient_5'/>
            <News/>            
        </article>
    )
}

export default LeftColumn