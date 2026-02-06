import { useState } from "react"

const UserDetails = () => {

    const [user, setUser] = useState({
        "fname": "Ram",
        "lname": "Kumar",
        "age": 22
    })

    function chnageHandler(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h2>{user.fname} {user.lname} : {user.age}</h2>
            <form action="">
                <input type="text" placeholder="enter First name" name="fname" onChange={chnageHandler} value={user.name} />
                <input type="text" placeholder="enter Last name" name="lname" onChange={chnageHandler} value={user.name} />
                <input type="text" placeholder="enter user age" name="age" onChange={chnageHandler} value={user.age} />
            </form>
        </>
    )
}

export default UserDetails
