import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 600px;
    margin: auto;
    background-color: #ffa41b;
    padding: 0.5em;
    text-align: center;
    border-radius: 10px;

    input {
        appearance: none;
        border: none;
        width: 500px;
        padding: 0.5em;
        border-radius: 5px 0px 0px 5px;
    }

    input:focus {
        outline: none;
    }

    button {
        appearance: none;
        border: none;
        padding: 0.5em;
        background-color: #525fe1;
        color: var(--font-color);
        text-transform: capitalize;
        font-weight: 600;
        border-radius: 0px 5px 5px 0px;
        cursor: pointer;
    }

    button:hover {
        transition: 0.3s ease;
        background-color: #6a76f8;
    }

    @media (max-width: 640px) {
        width: 400px;

        input {
            width: 300px;
        }
    }
    @media (max-width: 420px) {
        width: 290px;

        input {
            width: 190px;
        }
    }
`
