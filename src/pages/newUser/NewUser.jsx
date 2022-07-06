import React from 'react';
import './newUser.css';

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="userUserTitle">New User</h1>
        <form action="" className="newUserForm">
            <div className="newUserItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Jon' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Fullname</label>
                <input type="text" placeholder='John Smith' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='JohnSmith(@hotmail.com' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='+1 234 7892 73' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Lagos | Nigeria' />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Gender</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
                </div>         
            </div>
            <div className="newUserItem">
                <label htmlFor="Active">Active</label>
                <select name="active" className='newUserSelect' id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
             <button className="newUserButton">Create</button>   
        </form>
    </div>
  )
}
