import {useState} from "react"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAuthError } from "../redux/selectors/auth.selector"

const SignupPage = () => {
    const [toSignin, setToSignin] = useState(false)
    const authError = useSelector(selectAuthError)
    return (
        <div>signup</div>
    )
}

export default SignupPage