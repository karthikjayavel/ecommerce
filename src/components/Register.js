import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Register() {

     
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        address:"",
        address2:"",
        city:"",
        state:"",
        zip:"",
        isCheckmeout: false
    });
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/Users", formData);
    }

   
    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder txt-center">REGISTER</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <form class="row g-3" onClick={handleSubmit}>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" name="address2" value={formData.address2} onChange={handleChange} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input type="text" name="zip" value={formData.zip} onChange={handleChange} class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
      </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <Link to="/login"  type="submit" class="btn btn-primary">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;