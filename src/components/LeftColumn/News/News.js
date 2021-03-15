import './News.css'

const newsItems = [
    {
        title: 'Отложение высвобождает пегматитовый сталагмит',
        preview: 
        `Базис эрозии, основываясь
большей частью на 
сейсмических данных, 
глобален. Эоловое засоление
ослабляет комплекс. Лагуна,
так же, как и в других...`
    },
    {
        title: '',
        preview: []
    }
]

const News = () => {
    return (
        <div className='News'>
            <h2>#ПульсМарафон</h2>
            <div className='news_box'>
                <div className='news_box_inner'>
                    {newsItems.map((item, index) => {
                        return (
                            <div key={index} className='news_item'>
                                <div className='news_item_content'>
                                    <h3 className='news_item_title'>{item.title}</h3>
                                    <pre className='news_item_p'>{item.preview}</pre>
                                    <h3 className='news_item_moreinfo'>Читать дальше</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default News