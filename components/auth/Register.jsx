import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import styles from "./AuthForm.module.css";
import Image from "next/image";
import Link from "next/link";
import {
    UserIcon,
    MailIcon,
    LockClosedIcon,
    EyeOffIcon,
    EyeIcon,
} from "@heroicons/react/solid";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import ButtonLoader from '../layout/ButtonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors } from '../../redux/actions/userActions';


const Register = () => {
    const router = useRouter();
    const dispatch = useDispatch()

    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/assets/img/default_avatar.jpg');

    const [viewPassword, setViewPassword] = useState("password"); //toggle for vission password

    const { success, error, loading } = useSelector(state => state.auth) //Redux state

    useEffect(() => {

        if (success) {
            router.push('/login')
        }
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, success, error])


    const { register, handleSubmit, formState: { errors } } = useForm();

    // Process the form data with next-auth
    const submitHandler = async (data) => {
        const userData = { ...data, avatar }
        //send data to backend 

        /* console.log(userData) */
        dispatch(registerUser(userData))
    }

    // toggle for password vision
    const handleChangeViewPassword = (e) => {
        e.preventDefault();
        viewPassword === "password"
            ? setViewPassword("text")
            : setViewPassword("password");
    };

    // Avatar preview
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
        }
    }

    return (
        <div className={styles.body__form} id="header">
            <div className="d-flex flex-row justify-content-center align-items-center">

                <Link href="/">
                    <a>
                        <Image
                            src="/assets/img/logo_team.png"
                            width={240}
                            height={140}
                            alt="Logo brand"
                        /></a>
                </Link>
            </div>

            <div className="d-flex justify-content-center align-items-center py-2">
                <h1 className={styles.form__title}>Regístrate</h1>
            </div>
            {/* <div className="d-flex flex-row justify-content-end align-items-center">
                <Link href="/auth/signup">
                    <a className={styles.link}>Olvidé mi contraseña</a>
                </Link>
            </div> */}
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className={styles.form__container}>
                    <div className={styles.form}>
                        <div className={styles.form__group}>
                            <input
                                className={styles.form__input}
                                placeholder=" "
                                autoComplete="on"
                                type="text"
                                name="first_name"
                                {...register("first_name", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "El Nombre debe tener al menos 4 caracteres",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\u00C0-\u00FF][a-zA-Z\u00C0-\u00FF\s]*$/,
                                        message: "El Nombre no parece ser correcto",
                                    },

                                })}
                                className={` ${errors.first_name
                                    ? styles.form__input__invalid__password
                                    : styles.form__input
                                    }`}
                            />
                            <label className={styles.form__label}>Nombres</label>
                            <span className={styles.form__line}></span>
                            <span className={styles.form__icon_l}>
                                <UserIcon style={{ width: "20px", color: "#837A8D" }} />
                            </span>

                            {errors.first_name && (
                                <span className={styles.form__error}>
                                    {errors.first_name.message}
                                </span>
                            )}
                        </div>

                        <div className={styles.form__group}>
                            <input
                                className={styles.form__input}
                                placeholder=" "
                                autoComplete="on"
                                type="text"
                                name="last_name"
                                {...register("last_name", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "El Apellido debe tener al menos 4 caracteres",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z\u00C0-\u00FF][a-zA-Z\u00C0-\u00FF\s]*$/,
                                        message: "El Apellido no parece ser correcto",
                                    },
                                })}
                                className={` ${errors.last_name
                                    ? styles.form__input__invalid__password
                                    : styles.form__input
                                    }`}
                            />
                            <label className={styles.form__label}>Apellidos</label>
                            <span className={styles.form__line}></span>
                            <span className={styles.form__icon_l}>
                                <UserIcon style={{ width: "20px", color: "#837A8D" }} />
                            </span>

                            {errors.last_name && (
                                <span className={styles.form__error}>
                                    {errors.last_name.message}
                                </span>
                            )}
                        </div>

                        <div className={styles.form__group}>
                            <input
                                className={styles.form__input}
                                placeholder=" "
                                autoComplete="on"
                                type="email"
                                name="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido",
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "El correo electrónico no parece ser correcto",
                                    },
                                })}
                                className={` ${errors.email
                                    ? styles.form__input__invalid__email
                                    : styles.form__input
                                    }`}
                            />
                            <label className={styles.form__label}>Correo electrónico</label>
                            <span className={styles.form__line}></span>
                            <span className={styles.form__icon_l}>
                                <MailIcon style={{ width: "20px", color: "#837A8D" }} />
                            </span>

                            {errors.email && (
                                <span className={styles.form__error}>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className={styles.form__group}>
                            <input
                                placeholder=" "
                                autoComplete="on"
                                type={viewPassword}
                                name="password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "La contraseña debe tener al menos 6 caracteres",
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/i,
                                        message: "Debe contener números y letras",
                                    },
                                })}
                                className={` ${errors.password
                                    ? styles.form__input__invalid__password
                                    : styles.form__input__password
                                    }`}
                            />
                            <label className={styles.form__label}>Contraseña</label>
                            <span className={styles.form__line}></span>
                            <span className={styles.form__icon_l}>
                                <LockClosedIcon style={{ width: "20px", color: "#837A8D" }} />
                            </span>
                            <button
                                className={styles.form__icon_r}
                                onClick={handleChangeViewPassword}
                            >
                                {viewPassword === "password" ? (
                                    <EyeIcon style={{ width: "18px", color: "#B7B3BC" }} />
                                ) : (
                                    <EyeOffIcon style={{ width: "18px", color: "#B7B3BC" }} />
                                )}
                            </button>
                            <span className={styles.form__error}>
                                {errors.password?.message}
                            </span>
                        </div>

                        <div className={styles.form__group}>
                            <div className={styles.grid__container__avatar}>
                                <div className={styles.avatar__container}>
                                    <figure className={styles.avatar}>
                                        <img
                                            src={avatarPreview}
                                            className={styles.rounded__circle}
                                            alt='image preview'
                                        />
                                    </figure>
                                </div>

                                <div className={styles.label__container}>
                                    <label className={styles.avatar__label}>Ingresa una imagen para mostrar tu perfil de usuario, puedes hacerlo después si lo deseas.</label>

                                </div>

                                <div className={styles.input__container}>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className={styles.avatar__input}
                                        accept='images/*'
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br />

                {/* Button Submit */}
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        className={styles.form__submit}
                        type="submit"
                        disabled={loading ? true : false}
                    >
                        {loading ? <ButtonLoader /> : "Ingresar"}
                    </button>
                </div>
            </form>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <p className="pt-3" style={{ color: "#707070" }}>
                    ¿Ya tienes una cuenta?
                    <Link href="/login">
                        <a className={styles.link}>Inicia aquí</a>
                    </Link>
                </p>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    );
}

export default Register;