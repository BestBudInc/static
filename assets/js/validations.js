var validations={required:function(e){return""!==e},email:function(e){return e.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}};function validate(){var e=document.getElementById("signup-form"),t=e.querySelectorAll("input"),i=document.querySelector(".error.message"),l=document.querySelector(".success.message");e.addEventListener("submit",function(e){for(var r=0;r<t.length;){for(var a=t[r].getAttribute("data-validation"),n=a?a.split(" "):"",s=0;s<n.length;){if(!validations[n[s]](t[r].value))return e.preventDefault(),i.className="error message",!(i.innerHTML="<p>Error: Please enter valid name and email address.</p>");i.className="error message hidden",s++}r++}e.preventDefault(),i.className="error message hidden",i.innerHTML="",l.className="success message",l.innerHTML="<p>You're all signed up! Please check your email and read our instructions carefully.</p>"},!1)}validate();