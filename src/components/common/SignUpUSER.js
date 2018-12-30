import React,{Component} from 'react'





class SignUpUSER extends Component {

    
    render()
    {
        return (
            <form class="needs-validation"  novalidate>



  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">Name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" required />
      <div class="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>




    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Username</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Username"  required />
      <div class="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>



     
      <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Email</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="name@example.com" required />
      <div class="invalid-feedback">
        Provide a valid email address
      </div>
      </div>
      </div>

      <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Password</label>
      <input type="password" class="form-control" id="validationCustom03" placeholder="Password"  required />
      <div class="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>


    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Confirm Password</label>
      <input type="password" class="form-control" id="validationCustom03" placeholder="Password"  required />
      <div class="valid-feedback">
        Looks good!
      </div>
      
    </div>
    </div>

    
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Locality/Society</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="Ragvillas Society" required />
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
      
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom04">Postal Code</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="835215" required />
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    </div>
    
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    <br />
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
            </form>

        );
        }

      
      }
      export default SignUpUSER;