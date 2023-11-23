import React from "react";

function Login() {
    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder txt-center">LOGIN</h1>
                    </div>
                </div>
                <div className="row justify-content-center">

                    <form className="justify-content-center">
                        <div class="row">
                        <div class="col-md-6 py-3">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        </div>
                        <div class="row py-3">
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                        </div>
                        <div class="row py-3">
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Login;