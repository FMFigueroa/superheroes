import React, { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import ButtonLoader from '../layout/ButtonLoader';

import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, clearErrors } from '../../redux/actions/userActions';

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (message) {
            toast.success(message)
        }

    }, [dispatch, message, error])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            email
        }

        dispatch(forgotPassword(userData))

    }


    return (
        <div className="sectionOne container">
            <div className="col-md-4 offset-md-4">
                <form className="shadow-lg p-5" onSubmit={submitHandler}>
                    <h3 className="mb-3">Forgot Password</h3>
                    <p className="mb-4">Please enter your email to send you your new password</p>
                    <div className="form-group ">
                        <label htmlFor="email_field">Enter Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        id="forgot_password_button"
                        type="submit"
                        className="btn btn-primary btn-sm w-100 py-2"
                        disabled={loading ? true : false}
                    >
                        {loading ? <ButtonLoader /> : 'Send Email'}
                    </button>

                </form>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default ForgotPassword
