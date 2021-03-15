import './Hackathons.css'
import hexagon_gradient_1 from '../../icons/hexagon-gradient-1.png'
import hexagon_gradient_1_1 from '../../icons/hexagon-gradient-1.1.png'
import conference_logo_1 from '../../icons/conference-logo-1.svg'
import challenge_logo_2 from '../../icons/challenge-logo-2.svg'
import date_1 from '../../icons/date-1.svg'
import location_1 from '../../icons/location-1.svg'
import reward_1 from '../../icons/reward-1.svg'
import illustration_1 from '../../icons/illustration-1.png'
import illustration_2 from '../../icons/illustration-2.png'


const hackItems = [
    {
        icon: conference_logo_1,
        name: 'Хакатон трёх городов',
        description: 
        `Хакатон для молодых аналитиков 
и разработчиков. Постройте
оптимальный путь по сложной 
поверхности`,
        info: {
            date: '24–25 сентября',
            location: 'Уфа, Самара и Казань',
            award: 'Призовой фонд — 289 000 ₽'
        },
        illustration: illustration_2
    },
    {
        icon: challenge_logo_2,
        name: 'Хакатон по робототехнике',
        description: 
        `Хакатон для 
программистов-робототехников. 
Разработайте роботизированное 
решение для выполнения 
производственной операции`,
        info: {
            date: '16–17 октября',
            location: 'Уфа',
            award: 'Призовой фонд — 139 000 ₽'
        },
        illustration: illustration_1
    }
]

const Hackathons = () => {
    return (
        <div className='Hackathons'> 
            {hackItems.map((item, index) => {
                let classes = ['hack_item']
                let iconGradient = hexagon_gradient_1
                if (index % 2 === 0) {
                    classes.push('first_item_theme')
                }
                else {
                    classes.push('second_item_theme')
                    iconGradient = hexagon_gradient_1_1
                }
                return (
                    <div key={index} className={classes.join(' ')}>
                        <div className='hack_icon_div'>
                            <img src={iconGradient} className='hack_icon_gradient' alt='hack_icon_gradient'/> 
                            <img src={item.icon} className='hack_icon' alt='hack_icon'/> 
                        </div>
                        <div className='hack_text'>
                            <h2>{item.name}</h2>
                            <pre>{item.description}</pre>
                            <div className='hack_info'>
                                <p className='hack_info_p'>
                                    <img src={date_1} className='hack_info_icon' alt='date_1'/> 
                                    {item.info.date}
                                </p>
                                <p className='hack_info_p'>
                                    <img src={location_1} className='hack_info_icon' alt='location_1'/> 
                                    {item.info.location}
                                </p>
                                <p className='hack_info_p'>
                                    <img src={reward_1} className='hack_info_icon' alt='reward_1'/> 
                                    {item.info.award}                                    
                                </p>
                            </div>
                        </div> 
                        <img src={item.illustration} className='hack_illustration' alt='illustration'/> 
                        <button className='hack_more_info'>Подробнее</button>    
                    </div>
                )
            })}
        </div>
    )
}

export default Hackathons