import React from 'react';
//import { useState } from 'react';

export function HomePage(){
return(
<div>
    <form>
        <div className="container">

        <div class="card">
            <div class="card-header"><strong>Welcome</strong></div>
            <div class="card-body">
                <h5 class="card-title">Home Page</h5>
                <p class="card-text">this is the front page</p>
            </div>
            </div>
        </div>
    </form>
    <form>
        <p></p>
        <div className="container">
        <div class="form-group">
        <label for="email">Email address</label>
            <input type="emailll" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">Subscribe to our newsletter</small>              
            <p></p>
            <button type="submit" class="btn btn-primary">Subscribe</button>
        </div>
        </div>      
    </form>
<div>
</div>
</div>
)}
/*
function Form(){
    const [email, setEmail]=useState({
      Email: 'example@gmail.com'
    });
    return(
      <>
      <label>
        Email
        <input value={email.Email}
        onChange={e=>{setEmail({
          ...email,Email:e.target.value
        })
        }}/>
        </label>
        <p>
        ({email.Email})
        </p>
      </>
    )}*/

export default HomePage;