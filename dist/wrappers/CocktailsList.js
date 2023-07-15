import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    justify-content: center;
    gap: 0.8em;
    margin-top: 1em;
    color: black;

    .cocktail-container {
        border-radius: 12px;
        box-shadow: 2px 2px 10px #ffa41b;
        background-color: var(--background-color);
    }

    .cocktail-container:hover {
        transform: scale(1.01);
        transition: ease-in-out 0.3s;
    }

    .img-container {
        text-align: center;
    }

    .drinks-info {
        padding: 0em 0em 0.5em 1em;
    }

    .drinks-info > p {
        margin-bottom: 0.5em;
    }

    img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0px 0px;
    }

    .details-btn {
        font-size: 1.2em;

        appearance: none;
        border: none;
        background-color: #ffa41b;
        color: var(--font-color);
        padding: 0.1em;
        border-radius: 5px;
        text-transform: capitalize;
        cursor: pointer;
        text-decoration: none;
    }

    .details-btn:hover {
        background-color: #f86f03;
        transition: ease 0.3s;
    }

    @media (max-width: 1020px) {
        grid-template-columns: repeat(2, 250px);
    }
    @media (max-width: 560px) {
        grid-template-columns: repeat(1, 200px);
    }
`
