import React from 'react'




export default function SignIn({ providers }) {
  return (
  

 
<div>
  <h1>signin</h1>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\n\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\n/* Set a style for all buttons */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n/* Extra styles for the cancel button */\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n/* Center the image and position the close button */\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  padding-top: 60px;\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n.close {\n  position: absolute;\n  right: 25px;\n  top: 0;\n  color: #000;\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: red;\n  cursor: pointer;\n}\n\n/* Add Zoom Animation */\n.animate {\n  -webkit-animation: animatezoom 0.6s;\n  animation: animatezoom 0.6s\n}\n\n@-webkit-keyframes animatezoom {\n  from {-webkit-transform: scale(0)} \n  to {-webkit-transform: scale(1)}\n}\n  \n@keyframes animatezoom {\n  from {transform: scale(0)} \n  to {transform: scale(1)}\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n" }} />
    <form className="modal-content animate" action="/action_page.php" method="post">
      <div className="imgcontainer">
        <img src="/images/bot.png" alt="" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
        </label>
      </div>
      <div className="container" style={{backgroundColor: '#f1f1f1'}}>
        <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>

</div>




    
  )
}

