import React from 'react';
import './Faculty.css'

const Faculty = () => {
    return (
        <div>
             <div className='faculty'>
            
            <div className="page-content">
<div className="form-v9-content">
<form className="form-detail" action="#" method="post">
<h2 className='e-head'>Registration Form</h2>
<div className="form-row-total">
<div className="form-row">
<input type="text" name="full-name" id="full-name" className="input-text" placeholder="Your Name" required></input>
</div>
<div className="form-row">
<input type="text" name="your-email" id="your-email" className="input-text" placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
</div>
</div>

<div className="form-row-total">
<div className="form-row">
<input type="text" name="batch" id="batch" className="input-text" placeholder="Your Department" required></input>
</div>
<div className="form-row">
<input type="text" name="course" id="course" className="input-text" placeholder="Your Place" required></input>
</div>
</div>

<div className="form-row-total">
<div className="form-row">
<input type="password" name="password" id="password" className="input-text" placeholder="Your Password" required></input>
</div>
<div className="form-row">
<input type="password" name="comfirm-password" id="comfirm-password" className="input-text" placeholder="Comfirm Password" required></input>
</div>
</div>
<div className="form-row-last">
<input type="submit" name="register" className="register" value="Register"></input>
</div>
</form>
</div>
</div>

        </div>
        </div>
    );
};

export default Faculty;