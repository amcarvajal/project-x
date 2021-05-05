import React from "react";

export default function SignUp() {
  return (
    <div>
      <div className="signup container container-fluid">
        <form>
        <div class="form-row">
        <div class="form-group col-md-12">
              <label for="inputUsername">Username</label>
              <input
                type="username"
                class="form-control"
                id="inputUsername"
                placeholder="Username"
              />
            </div>
        </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Github</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="https://github.com/username"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Linkedin</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="https://www.linkedin.com/in/username"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCountry">Country</label>
              <input type="text" class="form-control" id="inputCountry" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">Favorite framework</label>
              <select id="inputState" class="form-control">
                <option selected>Select-one</option>
                <option>Next.js</option>
                <option>Gatsby.js</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
