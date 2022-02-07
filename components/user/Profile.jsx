import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, clearErrors } from '../../redux/actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../redux/constants/userConstants'

const Profile = () => {

    const dispatch = useDispatch()
    const router = useRouter();

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const { first_name, last_name, email, password } = user

    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');

    const { user: loadedUser, loading } = useSelector(state => state.loadedUser)
    const { error, isUpdated, loading: updateLoading } = useSelector(state => state.user)

    useEffect(() => {

        if (loadedUser) {
            setUser({
                first_name: loadedUser.first_name,
                last_name: loadedUser.last_name,
                email: loadedUser.email
            })
            setAvatarPreview(loadedUser.avatar.url)
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            router.push('/');
            dispatch({ type: UPDATE_PROFILE_RESET })
        }

    }, [dispatch, isUpdated, error, loadedUser])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            first_name, last_name, email, password, avatar
        }

        dispatch(updateProfile(userData))

    }

    const onChange = (e) => {

        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                    setAvatarPreview(reader.result);
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }

    }


    return (
        <>
            {loading ? <Loader /> :
                <div className="sectionOne">
                    <div className="col-md-4 offset-md-4">
                        <form className="shadow-lg p-5" onSubmit={submitHandler}>
                            <h1 className="mb-3">Update Profile</h1>

                            <div className="form-group mb-3   ">
                                <label htmlFor="first_name_field">Nombres</label>
                                <input
                                    type="text"
                                    id="first_name_field"
                                    className="form-control"
                                    name='first_name'
                                    value={first_name}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="last_name_field">Apellidos</label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className="form-control"
                                    name='last_name'
                                    value={last_name}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="email_field">Email</label>
                                <input
                                    type="email"
                                    id="email_field"
                                    className="form-control"
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                    disabled
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="password_field">Password</label>
                                <input
                                    type="password"
                                    id="password_field"
                                    className="form-control"
                                    name='password'
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label className='mx-3' htmlFor='avatar_upload'>Avatar</label>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <figure className='avatar mx-3 item-rtl'>
                                            <img
                                                src={avatarPreview}
                                                className='rounded-circle'
                                                alt='image'
                                            />
                                        </figure>
                                    </div>
                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='avatar'
                                            className='custom-file-input mx-3'
                                            id='customFile'
                                            accept='images/*'
                                            onChange={onChange}
                                        />
                                        <label className='custom-file-label mx-3 mt-2' htmlFor='customFile'>
                                            Choose Avatar
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <button
                                id="login_button"
                                type="submit"
                                className="btn btn-primary w-100  mt-4 mb-3"
                                disabled={updateLoading ? true : false}
                            >
                                {updateLoading ? <ButtonLoader /> : 'UPDATE'}
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile
