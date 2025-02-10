import React, { useState } from 'react'
import clsx from 'clsx';

function MiniAppForm({ handleSubmit }) {
    const [isSubmit, setIsSubmit] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        repassword: "",
        country: "",
        gender: ""
    })
    const [errors, setErrors] = useState({})

    function onChangeInput(e) {
        const { name, value } = e.target;
        setInputs((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }
    const _handleSubmit = (e) => {
        e.preventDefault()
        let errorsSubmit = {}
        let flag = true
        var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (inputs.name === "") {
            errorsSubmit.name = true
            flag = false
        }
        if (inputs.email === "") {
            errorsSubmit.email = "Input email!"
            flag = false
        } else if (!regex.test(inputs.email)) {
            errorsSubmit.email = "Email not valid"
            flag = false
        }
        if (inputs.password === "") {
            errorsSubmit.password = "Input password!"
            flag = false
        } else if (inputs.password != inputs.repassword) {
            errorsSubmit.password = "Password not match"
        }
        if (inputs.repassword === "") {
            errorsSubmit.repassword = "Input repassword!"
            flag = false
        }
        if (inputs.country === "") {
            errorsSubmit.country = "Input country!"
            flag = false
        }
        if (inputs.gender === "") {
            errorsSubmit.gender = "Choose Gender"
            flag = false
        }
        if (!flag) {
            setIsSubmit(true)
            setErrors(errorsSubmit)
            return;
        }
        handleSubmit(inputs)
    }
    return (
        <>
            <form type="sumit">
                <div className='mb-6 w-3/6 m-auto' >
                    <label className={clsx(
                        'block mb-2 text-sm font-medium ',
                        isSubmit && errors.name && 'text-red-700 dark:text-red-500'
                    )}>
                        Name
                        <input
                            className={clsx(
                                'border block w-full p-2.5',
                                isSubmit && errors.name && 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500'
                            )}
                            name='name'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Input Name!</p>}
                    </label>
                </div>
                <div className='mb-6 w-3/6 m-auto' >
                    <label className={clsx(
                        'block mb-2 text-sm font-medium ',
                        isSubmit && errors.email && 'text-red-700 dark:text-red-500'
                    )}>
                        Email
                        <input
                            className={clsx(
                                'border block w-full p-2.5',
                                isSubmit && errors.email && 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500'
                            )}
                            name='email'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Input Email!</p>}
                    </label>
                </div>
                <div className='mb-6 w-3/6 m-auto' >
                    <label className={clsx(
                        'block mb-2 text-sm font-medium ',
                        isSubmit && errors.country && 'text-red-700 dark:text-red-500'
                    )}>
                        Country
                        <input
                            className={clsx(
                                'border block w-full p-2.5',
                                isSubmit && errors.country && 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500'
                            )}
                            name='country'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.country && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Input Country!</p>}
                    </label>
                </div>
                <div className='mb-6 w-3/6 m-auto'>
                    <label className={clsx(
                        'block mb-2 text-sm font-medium ',
                        isSubmit && errors.password && 'text-red-700 dark:text-red-500'
                    )}>
                        Password
                        <input
                            className={clsx(
                                'border block w-full p-2.5',
                                isSubmit && errors.password && 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500'
                            )}
                            name='password'
                            type='password'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Input Password!</p>}
                    </label>
                </div>
                <div className='mb-6 w-3/6 m-auto' >
                    <label className={clsx(
                        'block mb-2 text-sm font-medium ',
                        isSubmit && errors.repassword && 'text-red-700 dark:text-red-500'
                    )}>
                        Repassword
                        <input
                            className={clsx(
                                'border block w-full p-2.5',
                                isSubmit && errors.repassword && 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500'
                            )}
                            name='repassword'
                            type='password'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.repassword && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Input Repassword!</p>}
                    </label>
                </div>
                <div className='mb-6 w-3/6 m-auto' >
                    <label className={clsx(isSubmit && errors.repassword &&
                        'block mb-2 text-sm font-medium text-red-700 dark:text-red-500')}>
                        Gender
                        <div>
                            <label
                            >Male</label>
                            <input
                                className='gender-check p-3 ml-2'
                                name="gender"
                                value="Male"
                                type='radio'

                                onChange={(e) => onChangeInput(e)}
                            >
                            </input>
                        </div>
                        <div>
                            <label
                            >
                                Female
                            </label>
                            <input
                                type='radio'
                                name="gender"
                                className='gender-check p-3 ml-2'
                                value="Female"
                                onChange={(e) => onChangeInput(e)}
                            >
                            </input>
                        </div>
                    </label>
                    {errors.gender && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Choose gender</p>}
                </div>
                <button className="bg-blue-700 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    onClick={_handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )
}

export default MiniAppForm