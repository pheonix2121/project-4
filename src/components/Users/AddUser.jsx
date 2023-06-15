import React from "react";

const AddUser=()=>{

    function AddUserHandler(e){
     e.preventDefault();
    }

    return(<div>
        <form onSubmit={AddUserHandler}>
            <label htmlFor="Name">Username</label>
            <input type="text" id="username"/>

            <label htmlFor="Age">Age (Years)</label>
            <input type="number" id="age"/>

            <button type="submit" >Add User</button> 
        </form>
    </div>)

}
export default AddUser;