import error404 from '../../public/assets/page_not_found.svg'
import { Link, useRouteError } from 'react-router-dom'
import { Wrapper } from '../../public/wrappers/Error404'

const Error404 = () => {
    const error = useRouteError()

    if (error.status == 404) {
        return (
            <Wrapper>
                <img src={error404} alt="404" />
                <div>
                    <Link>back home</Link>
                </div>
            </Wrapper>
        )
    }
}
export default Error404
