import React,{Component} from 'react'
import './Right-Left.css'
import './SignUp.css'
import SignUpUSER from './SignUpUSER';
import SignUpNGO from './SignUpNGO'
class Right extends  Component {
    constructor()
    {
        super();
        this.state = {
            now:0
            

        }
    }

    // StringConcat() {
    //     'use strict';
    //     window.addEventListener('load', function() {
    //       // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //       var forms = document.getElementsByClassName('needs-validation');
    //       // Loop over them and prevent submission
    //       var validation = Array.prototype.filter.call(forms, function(form) {
    //         form.addEventListener('submit', function(event) {
    //           if (form.checkValidity() === false) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //           }
    //           form.classList.add('was-validated');
    //         }, false);
    //       });
    //     }, false);
    //   }
    render()
    {
            if(this.state.now===0)
        {
                return (
                <div className="Right-main">
                    <button className="buttonUp" onClick={()=>{this.setState({now:1})}}>Sign Up as an Individual</button> 
                    <br />   
                    <button className="buttonUp" onClick={()=>{this.setState({now:2})}}>Sign Up as an NGO</button>
                    {/* <SignUp /> */}
                    
            </div>


            )
        }
        else if(this.state.now===1)
        {
            return (
                <div  className="Left-main">
                <SignUpUSER />
                </div>
            )
        }
        else
        {
            return (
                <div className="Right-main">
                <SignUpNGO/>
                </div>
            )
        }
    }
}

export default Right;