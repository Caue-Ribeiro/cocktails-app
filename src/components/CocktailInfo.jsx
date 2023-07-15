import { createContext, useEffect, useState } from 'react'
import { Wrapper } from '../../public/wrappers/SingleCocktail'

const CocktailInfo = ({ data }) => {
    const cocktailSingleData = data[0]
    const {
        idDrink: id,
        strAlcoholic: type,
        strCategory: category,
        strDrink: name,
        strGlass: glass,
        strInstructions: instructions,
        strDrinkThumb: image,
    } = cocktailSingleData

    const ingredients = Object.keys(cocktailSingleData)
        .filter(
            item =>
                item.startsWith('strIngredient') &&
                cocktailSingleData[item] != null
        )
        .map(item => cocktailSingleData[item])

    return (
        <Wrapper>
            <div className="image-container">
                <img src={image} alt={name} />
            </div>
            <div className="info-container">
                <p>
                    <span>name:</span> {name}
                </p>
                <p>
                    <span>category:</span> {category} - {type}
                </p>

                <p>
                    <span>glass:</span> {glass}
                </p>
                <p>
                    <span>ingredients:</span> {ingredients.join(', ')}.
                </p>
                <p>
                    <span>instructions:</span> {instructions}
                </p>
            </div>
        </Wrapper>
    )
}
export default CocktailInfo
