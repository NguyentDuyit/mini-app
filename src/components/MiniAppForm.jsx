import React, { useState } from 'react'
import clsx from 'clsx';

function MiniAppForm({ handleSubmit }) {
    const [isSubmit, setIsSubmit] = React.useState(false);
    const [inputs, setInputs] = useState({
        key: Date.now(),
        name: "",
        email: "",
        password: "",
        repassword: "",
        country: "",
        gender: ""
    })
    const [errors, setErrors] = useState({})

    function onChangeInput(e, type) {
        const { name, value, checked } = e.target;
        if(type === 'checkbox' && !checked) {
            setInputs(prevState => {
                return {
                    ...prevState,
                    gender: ''
                }
            })
        } else {
            setInputs((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                }
            })
        }
    }

    console.log('inputs', {errors, inputs})

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
                <div className='mb-6' >
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
                <div className='mb-6' >
                    <label className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'>
                        Email Address
                        <input className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5'
                            name='email'
                            type='email'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email}.</p>}
                    </label>
                </div>
                <div className='mb-6' >
                    <label className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'>
                        Country
                        <input className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5'
                            name='country'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.country && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.country}</p>}
                    </label>
                </div>
                <div className='mb-6'>
                    <label className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'>
                        Password
                        <input className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5'
                            name="password"
                            type='password'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password}</p>}
                    </label>
                </div>
                <div className='mb-6' >
                    <label className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'>
                        Confirm password
                        <input className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5'
                            name='repassword'
                            type='password'
                            onChange={(e) => onChangeInput(e, 'input')}
                        >
                        </input>
                        {errors.repassword && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.repassword}</p>}
                    </label>
                </div>
                <div className='mb-6' >
                    <label className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'>
                        Gender
                        <div>
                            <div>
                                <label
                                >Male</label>
                                <input
                                    className='gender-check p-3 ml-2'
                                    name="gender"
                                    value="Male"
                                    type='checkbox'
                                    checked={inputs.gender === "Male"}
                                    onChange={(e) => onChangeInput(e, 'checkbox')}
                                >
                                </input>
                            </div>
                            <div>
                                <label
                                >
                                    Female
                                </label>
                                <input
                                    type='checkbox'
                                    name="gender"
                                    className='gender-check p-3 ml-2'
                                    value="Female"
                                    checked={inputs.gender === "Female"}
                                    onChange={(e) => onChangeInput(e, 'checkbox')}
                                >
                                </input>
                            </div>
                        </div>
                    </label>
                    {errors.gender && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.gender}</p>}
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