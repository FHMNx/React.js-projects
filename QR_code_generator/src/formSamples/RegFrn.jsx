import React, { useState } from 'react'
import "./RegFrm.css"

const RegFrn = () => {

    const [user, setUser] = useState({
        name: "Ram Kumar",
        age: 25,
        gender: "Male",
        isMarried: true,
        country: "Sri Lanka",
        bio: "write something about yourself"
    });

    function changeHandler(e) {
        const name = e.target.name;
        // console.log(name)

        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Marital Status</td>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <td>Bio</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>

            <form action="">
                <input type="text" placeholder='Full name' value={user.name} name='name' onChange={changeHandler} />
                <input type="number" placeholder='Age' value={user.age} name='age' onChange={changeHandler} />
                <div className="gender">
                    <label htmlFor="male">
                        <input type="radio" name='gender' id='male' checked={user.gender == "Male"} value='Male' onChange={changeHandler} />Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" name='gender' id='female' checked={user.gender == "Female"} value='Female' onChange={changeHandler} />Female
                    </label>
                </div>
                <label htmlFor="isMarried">
                    <input type="checkbox" id='isMarried' checked={user.isMarried} name='isMarried' onChange={changeHandler} />Is Married
                </label>
                <div className='select-div'>
                    <label htmlFor="country">Select country:</label>
                    <select name="country" id="country" value={user.country} onChange={changeHandler}>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <textarea name="bio" id="bio" cols='30' rows='5' placeholder='write about you' value={user.bio} onChange={changeHandler}></textarea>
            </form>
        </>
    )
}

export default RegFrn
