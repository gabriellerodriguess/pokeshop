import './styles.css'

export default function LoadingPokemons() {
    
    const arr = []
    for(let i = 0; i <= 10; i++) {
        console.log(i)
        arr.push(i)
    }

    return (
        <section className='loading-content'>
            {
                arr.map((item,index) => (
                    <div className='loading-card'>

                    </div>                
                ))
            }
        </section>
    )
}