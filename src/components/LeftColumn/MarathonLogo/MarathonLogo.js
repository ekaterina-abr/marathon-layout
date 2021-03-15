import './MarathonLogo.css'
import marathon_2020 from '../../../icons/marathon-2020.svg'
import marathon_hexagon from '../../../icons/marathon-hexagon.svg'
import marathon_lines from '../../../icons/marathon-lines.svg'

const MarathonLogo = () => {
    return (
        <div className='MarathonLogo'>
            <img src={marathon_hexagon} className='marathon_hexagon' alt='hexagon'/>
            <h1>Марафон <br/> ИТ-соревнований</h1>
            <img src={marathon_2020} className='marathon_2020' alt='2020'/>
            <img src={marathon_lines} className='marathon_lines' alt='lines'/>
            <div className='p_background'>
                <p>
                    Роснефть приглашает <br/> разработчиков и аналитиков <br/> принять участие 
                    в одном <br/> из трёх соревнований
                </p>
                <div className='p_bottom_line'/>
            </div>
        </div>
    )
}

export default MarathonLogo