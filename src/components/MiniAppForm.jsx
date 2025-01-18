import React, { useState } from 'react'

function MiniAppForm({ handleSubmit }) {
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
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

    function handleCheckboxChange(getGender) {
        setSelectedCheckbox(getGender)
        setInputs((prevState) => {
            return {
                ...prevState,
                gender: getGender
            }
        })
    }

    function onChangeInput(e) {
        const { name, value } = e.target
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
            errorsSubmit.name = "Input Name!"
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
            setErrors(errorsSubmit)
            return;
        }
        handleSubmit(inputs)
    }
    return (
        <>
            <form type="sumit">
                <div className='mb-6' >
                    <label className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'>
                        Name
                        <input
                            className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5'
                            name='name'
                            onChange={onChangeInput}
                        >
                        </input>
                        {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
                    </label>
                </div>
                <div className='mb-6' >
                    <label className='block mb-2 text-sm font-medium text-red-700 dark:text-red-500'>
                        Email Address
                        <input className='bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 block w-full p-2.5'
                            name='email'
                            type='email'
                            onChange={onChangeInput}
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
                            onChange={onChangeInput}
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
                            onChange={onChangeInput}
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
                            onChange={onChangeInput}
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
                                    type='checkbox'
                                    checked={selectedCheckbox === "Male"}
                                    onChange={() => { handleCheckboxChange("Male") }}
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
                                    className='gender-check p-3 ml-2'
                                    checked={selectedCheckbox === "Female"}
                                    onChange={() => { handleCheckboxChange("Female") }}
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