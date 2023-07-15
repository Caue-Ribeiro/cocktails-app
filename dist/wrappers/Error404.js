import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5em;
    text-align: center;

    img {
        width: 50em;
        margin: auto;
        padding-bottom: 3em;
    }

    a {
        font-size: 1.2em;

        appearance: none;
        border: none;
        background-color: #ffa41b;
        color: var(--font-color);
        padding: 0.1em;
        border-radius: 5px;
        text-transform: capitalize;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        background-color: #f86f03;
        transition: ease 0.3s;
    }
`
