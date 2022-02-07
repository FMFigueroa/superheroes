import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'

import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, clearErrors } from '../../redux/actions/userActions'

const NewPassword = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch();
    const router = useRouter();

    const { error, loading, success } = useSelector(state => state.resetPassword)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            router.push('/login')
        }

    }, [dispatch, success, error])


    const submitHandler = (e) => {
        e.preventDefault();

        const passwords = {
            password, confirmPassword
        }

        dispatch(resetPassword(router.query.token, passwords))

    }


    return (
        <div className="sectionOne container">
            <div className="col-md-4 offset-md-4">
                <form className="shadow-lg p-5" onSubmit={submitHandler}>
                    <h3 className="mb-3">New Password</h3>

                    <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control mb-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm_password_field">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm_password_field"
                            className="form-control mb-3"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        id="new_password_button"
                        type="submit"
                        className="btn btn-primary btn-sm w-100 py-2"
                        disabled={loading ? true : false}
                    >
                        {loading ? <ButtonLoader /> : 'Set Password'}
                    </button>

                </form>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default NewPassword
