import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import styles from "./AuthForm.module.css";
import Image from "next/image";
import Link from "next/link";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { signIn } from "next-auth/react";
import ButtonLoader from '../layout/ButtonLoader';
import {
    MailIcon,
    LockClosedIcon,
    EyeOffIcon,
    EyeIcon,
} from "@heroicons/react/solid";


const Login = () => {
    const { loading } = useSelector(state => state.loadedUser) //Redux state
    const [viewPassword, setViewPassword] = useState("password"); //toggle for vission password

    // Validation of form fields with react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // toggle for  password vision
    const handleChangeViewPassword = (e) => {
        e.preventDefault();
        viewPassword === "password"
            ? setViewPassword("text")
            : setViewPassword("password");
    };

    // Process the form data with next-auth
    const submitHandler = async (data) => {

        //send data to backend
        const result = await signIn('credentials', { // credentials, or google, or facebook etc.
            redirect: false, // redirect to the page where the user was before
            email: data.email,
            password: data.password,

        })

        if (result.error) {
            toast.error(result.error);
        } else {
            window.location.href = '/' // redirect to HomePage page after login (suseccfully)
        }

    }
    //================================  User Management  ==================================\\

    /* Testing and validations with Backend connected */
    /* Alert messages */
    const userActivated = true; //change to false to test

    // Alert message for disabled user
    const userAlertDisabled = () => (
        <div className={styles.alert__container}>
            <div className={styles.alert__container__form}>
                <p className={styles.form__alert__text}>
                    El usuario aún no está activo. ¿Deseas volver a recibir el código de
                    activación de tu cuenta? <br />
                    <Link href="#">
                        <a className={styles.link__alert}>click aquí.</a>
                    </Link>
                </p>
            </div>
        </div>
    );
    //====================================================================================\\

    return (
        <section className="sectionTwo" id="header">
            <div className={styles.body__form}>
                <div className="d-flex flex-row justify-content-center align-items-center ">
                    <Link href="/">
                        <a>
                            <Image
                                src="/assets/img/logo_team.png"
                                width={240}
                                height={150}
                                alt="Logo brand"
                            /></a>
                    </Link>

                </div>
                <div className="d-flex justify-content-center align-items-center pt-2 mt-4 ">
                    <h1 className={styles.form__title}>Inicia sesión</h1>
                </div>
                <div className="d-flex flex-row justify-content-end align-items-center">
                    <Link href="/password/forgot">
                        <a className={styles.link}>Olvidé mi contraseña</a>
                    </Link>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={styles.form__container}>
                        <div className={styles.form}>

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
                                    <MailIcon style={{ width: "20px", color: "#7a7a8d" }} />
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
                                    /* value={password}
                                    onChange={(e) => setPassword(e.target.value)} */
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
                                    <LockClosedIcon style={{ width: "20px", color: "#7a7a8d" }} />
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

                        </div>
                    </div>
                    <br />

                    {/* Connect with backend */}
                    {!userActivated ? userAlertDisabled() : null}

                    {/* Button Submit */}
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            className={styles.form__submit}
                            type="submit"
                            disabled={loading ? true : false}
                        >
                            {loading ? <ButtonLoader /> : "Login"}
                        </button>
                    </div>

                    {/* <div className="d-flex justify-content-center align-items-center">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className={styles.form__submit__google}
                  onClick={(e) => {
                    e.preventDefault();
                    SignIntoProvider(provider.id);
                  }}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div> */}
                </form>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <p className="pt-3" style={{ color: "#707070" }}>
                        ¿Aún no tienes cuenta?
                        <Link href="/register">
                            <a className={styles.link}>Créala aquí</a>
                        </Link>
                    </p>
                </div>
            </div>
            {/* <ToastContainer position="bottom-right" /> */}
        </section>

    );
}

export default Login


