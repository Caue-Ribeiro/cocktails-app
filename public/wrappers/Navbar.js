import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    background-color: black;
    color: var(--font-color);
    .links-container > a {
        color: var(--font-color);
        text-decoration: none;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0.5em;
    }
    a.active {
        color: #ffa41b;
    }

    .logo {
        font-size: 2em;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    @media (max-width: 45em) {
        display: block;
        .links-container {
            margin-top: 0.5em;
        }
    }

    img {
        width: 1.75em;
    }
`

export default Wrapper
