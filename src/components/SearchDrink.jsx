import { Form } from 'react-router-dom'
import { Wrapper } from '../../public/wrappers/SearchDrink'
const SearchDrink = ({ searchParam }) => {
    return (
        <Wrapper>
            <Form className="form">
                <input type="search" name="search" defaultValue={searchParam} />
                <button>submit</button>
            </Form>
        </Wrapper>
    )
}
export default SearchDrink
