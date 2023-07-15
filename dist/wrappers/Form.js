import styled from 'styled-components'

export const Wrapper = styled.article`
    height: 60vh;
    max-width: 500px;
    margin: auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-color);
    text-transform: capitalize;
    font-weight: 520;
    background-color: #373946;

    .newsletter-input {
        text-align: center;
        appearance: none;
        border: none;
        padding: 0.3em;
        width: 25.75em;
        border-radius: 2px;
    }

    .newsletter-form > div {
        display: flex;
        flex-direction: column;
        margin-top: 1em;
    }

    .submit {
        text-transform: capitalize;
        font-size: 1.1em;
        padding: 0.2em;
        appearance: none;
        border: none;
        border-radius: 2px;
        margin-top: 1em;
        background-color: #ffa41b;
        color: var(--font-color);
        cursor: pointer;
    }

    button:hover {
        background-color: #f86f03;
        transition: 0.3s ease;
    }

    @media (max-width: 380px) {
        width: 300px;

        .newsletter-input {
            width: 19.75em;
        }
    }
`
