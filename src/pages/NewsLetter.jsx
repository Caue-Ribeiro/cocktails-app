//NOW YOU HAVE TO WORK ON THIS PAGE.

import { Form, redirect, useNavigation } from 'react-router-dom'
import { Wrapper } from '../../public/wrappers/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const newsletterUrl = 'https://httpbin.org/post'

export const action = async ({ request }) => {
    const formData = await request.formData()
    const dataOBJ = Object.fromEntries(formData)
    await axios.post(newsletterUrl, dataOBJ)
    toast.success('Submitted successfully')

    return redirect('/')
}
const NewsLetter = () => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return (
        <Wrapper>
            <Form method="POST" className="newsletter-form">
                <div>
                    <label htmlFor="name">name</label>
                    <input
                        className="newsletter-input"
                        type="text"
                        name="name"
                        defaultValue={'Name'}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastname">last name</label>
                    <input
                        className="newsletter-input"
                        type="text"
                        name="lastname"
                        defaultValue={'Last Name'}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        className="newsletter-input"
                        type="email"
                        name="email"
                        defaultValue={'testemail@email.com'}
                        required
                    />
                </div>
                <button className="submit">
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
            </Form>
        </Wrapper>
    )
}
export default NewsLetter
