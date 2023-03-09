    /********************************************************
     * highly vulnerable application :  it shows has 
     *  public API key and two other tokens that should
     *    not be seen  by any body 
     ********************************************************/
function sendMail()
{
 // `process.env` is the one defined in the webpack's DefinePlugi


 const envVariables = process.env;

 // Read vars from envVariables object
 const {
   SERVICE_KEY,
   TEMPLATE_KEY,
   API_KEY,
   
 } = envVariables;

    var params ={
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value, 
        message: document.getElementById("message").value, 
    };

    console.log(params);
/*
    const serviceID = SERVICE_KEY;
    const templateID = TEMPLATE_KEY; 
    emailjs
    .send(serviceID, templateID, params,API_KEY)
    .then(function(response) {
        alert("Success");
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        alert("Failed"); 
        console.log('FAILED...', error);
     });

     */ 


     alert(SERVICE_KEY)
}

