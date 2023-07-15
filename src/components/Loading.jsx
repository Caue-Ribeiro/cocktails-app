import Lottie from 'lottie-react'
import drinkAnimation from '../../public/assets/drink.json'

const Loading = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                width: '100vw',
            }}
        >
            <Lottie
                style={{
                    width: '18.25em',
                    textAlign: 'center',
                    margin: 'auto',
                }}
                animationData={drinkAnimation}
                loop={true}
            />
        </div>
    )
}
export default Loading
