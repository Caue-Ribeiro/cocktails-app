import styled from 'styled-components'

export const Wrapper = styled.article`
    display: flex;
    margin-top: 3em;
    justify-content: space-evenly;
    color: var(--font-color);

    .image-container > img {
        width: 30em;
        border-radius: 10px;
        box-shadow: -10px 10px 0px #ffa41b;
    }

    .info-container {
        width: 400px;
        font-size: 1.8em;
    }

    .info-container > p {
        margin-bottom: 0.3125em;
    }

    span {
        background-color: #ffa41b;
        padding: 0.05em;
        border-radius: 5px;
        text-transform: capitalize;
    }

    .heart-icon {
        font-size: 2em;
        cursor: pointer;
    }

    @media (max-width: 950px) {
        flex-direction: column;
        text-align: center;

        .image-container > img {
            width: 25em;
            margin-bottom: 1em;
        }

        .info-container {
            font-size: 1.5em;
            width: 300px;
            margin: auto;
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;

        .image-container > img {
            width: 20em;
            margin-bottom: 1em;
        }

        .info-container {
            font-size: 1.3em;
            width: 300px;
            margin: auto;
        }
    }

    @media (max-width: 380px) {
        flex-direction: column;
        text-align: center;

        .image-container > img {
            width: 15em;
            margin-bottom: 1em;
        }

        .info-container {
            font-size: 1em;
            width: 300px;
            margin: auto;
        }
    }
`
