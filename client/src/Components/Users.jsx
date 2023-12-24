import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { createUserAsync, deleteUserAsync, getAllUsersAsync, updateUserAsync } from "../slice/usersSlice";

const Users = () => {

    const dispatch = useDispatch()

    const [userDetails, setUserDetails] = useState({
        id: "",
        name: "",
        email: ""
    })

    const [IsEdit, setIsEdit] = useState(false)

    const {users} = useSelector((state) => state.users)
    console.log(users)

    useEffect(() => {
        dispatch(getAllUsersAsync())
    }, [])

    const handleChange = (e) => {
        let newUser = {...userDetails}
        newUser[e.target.name] = e.target.value
        setUserDetails(newUser)
    }

    const clearForm = () => {
        setUserDetails({
            id: "",
            name: "",
            email: ""
        })
    }

    return(
        <div>

            <h2>Users List</h2>

            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    {users.map((usr, i) => (<tr>
                        <td>{usr.id}</td>
                        <td>{usr.name}</td>
                        <td>{usr.email}</td>
                        <td>
                            <button onClick={() => {setUserDetails(usr);setIsEdit(true)}}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => {
                                dispatch(deleteUserAsync(usr))
                            }}>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>

            <form>

                <label htmlFor="id">Id</label>
                <input type="text" name="id" value={userDetails?.id} onChange={(e) => {handleChange(e)}} /><br />
                <label htmlFor="id">Id</label>
                <input type="text" name="name" value={userDetails?.name} onChange={(e) => {handleChange(e)}} /><br />
                <label htmlFor="id">Id</label>
                <input type="text" name="email" value={userDetails?.email} onChange={(e) => {handleChange(e)}} /><br />

                {IsEdit ? <button type="button" onClick={() => {
                    dispatch(updateUserAsync(userDetails));
                    setIsEdit(false)
                    clearForm()
                }}>Update User</button> : <button type="button" onClick={()=>{
                    dispatch(createUserAsync(userDetails));
                    setIsEdit(false)
                    clearForm()
                }}>Add User</button>}

            </form>

        </div>
    )

}

export default Users