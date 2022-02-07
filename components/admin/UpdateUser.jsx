import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { updateUser, getUserDetails, clearErrors } from '../../redux/actions/userActions'
import { UPDATE_USER_RESET } from '../../redux/constants/userConstants'

const UpdateUser = () => {

    const [first_name, setFisrtName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()

    const { error, isUpdated } = useSelector(state => state.user)
    const { user, loading } = useSelector(state => state.userDetails)

    const userId = router.query.id;

    useEffect(() => {

        if (user && user._id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setFisrtName(user.first_name)
            setLastName(user.last_name)
            setEmail(user.email)
            setRole(user.role)
            setStatus(user.status)
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            router.push('/admin/users');
            dispatch({ type: UPDATE_USER_RESET })
        }

    }, [dispatch, isUpdated, userId, user, error])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            first_name, last_name, email, role, status
        }

        dispatch(updateUser(user._id, userData))
    }

    return (
        <>
            {loading ? <Loader /> :
                <div className="sectionOne ">
                    <div className="col-md-4 offset-md-4">

                        <form className="shadow-lg p-5" onSubmit={submitHandler}>
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() => router.back()}
                            >
                                GoBack
                            </button>
                            <h1 className="mt-2 mb-3">Update User</h1>


                            <div className="form-group mb-3">
                                <label htmlFor="name_field">Nombres</label>
                                <input
                                    type="text"
                                    id="first_name_field"
                                    className="form-control "
                                    name="first_name"
                                    value={first_name}
                                    onChange={(e) => setFisrtName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="name_field">Apellidos</label>
                                <input
                                    type="text"
                                    id="last_name_field"
                                    className="form-control"
                                    name="last_name"
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>


                            <div className="form-group mb-3">
                                <label htmlFor="email_field">Email</label>
                                <input
                                    type="email"
                                    id="email_field"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="role_field">Role</label>

                                <select id="role_field" className="form-control" name="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}

                                >

                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="status_field">Status</label>

                                <select id="status_field" className="form-control" name="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}

                                >

                                    <option value="actived">actived</option>
                                    <option value="deactivated">deactivated</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary w-100  mt-4 mb-3">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default UpdateUser
