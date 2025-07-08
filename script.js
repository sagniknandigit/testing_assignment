document.getElementById("contactForm").addEventListener("submit", function (e)
{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email= document.getElementById("email").value.trim();

    if(name==="" || email===""){
        alert("Error: Both fields are required.");
    }
    else if(!email.includes("@")){
        alert("Error: Invalid email format.");
    }
    else{
        alert("Success! Form Submitted.");
        console.log(`Name: ${name}, Email:${email}`);
    }
});