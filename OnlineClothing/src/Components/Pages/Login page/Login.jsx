import React from 'react';
import './login.css';
function Login (){
    return(
    <div className='container'>
    <div class="login-container">
        <h1>Welcome Back</h1>
        <form action="#" method="post">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" class="login-btn">Login</button>
        </form>
        <div class="extra-links">
            <a href="#">Forgot Password?</a> | <a href="/sighup">Sign Up</a>
        </div>
    </div>
</div>
    );
}
export default Login;