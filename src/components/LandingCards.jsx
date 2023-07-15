import { Link } from 'react-router-dom'
import { Wrapper } from '../../public/wrappers/CocktailsList'

const LandingCards = ({ data }) => {
    return (
        <Wrapper className="cocktails-list">
            {data?.map(item => {
                const {
                    strDrink: name,
                    strCategory: category,
                    strAlcoholic: info,
                    strDrinkThumb: image,
                    idDrink: id,
                } = item

                return (
                    <div key={id} className="cocktail-container">
                        <div className="img-container">
                            <img src={image} alt={name} />
                        </div>
                        <div className="drinks-info">
                            <h4>{name}</h4>
                            <h5>{category}</h5>
                            <p>{info}</p>
                            <Link
                                to={`/cocktail/${id}`}
                                className="details-btn"
                            >
                                details
                            </Link>
                        </div>
                    </div>
                )
            })}
        </Wrapper>
    )
}
export default LandingCards
