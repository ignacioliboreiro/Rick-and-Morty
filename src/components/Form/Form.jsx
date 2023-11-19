import React, { useState } from 'react'
import validation from '../validation'




function Form() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handelChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value
        })
        setErrors(validation(userData))
    }

    return (
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name='email'
                    placeholder='email'
                    value={userData.email}
                    onChange={handelChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                <br />
                <label htmlFor="passsword">Password:</label>
                <input
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={userData.password}
                    onChange={handelChange}
                />
                {errors.password && <p>{errors.password}</p>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form