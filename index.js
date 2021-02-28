console.log("Welcome...........")

var clearbtn = document.getElementById("clearBTN");
var enrollbtn = document.getElementById("enrollBTN");

function clear()
{

    /*nametxt.value="";
    emailtxt.value="";
    imglinktxt.value="";
    websitetxt.value="";*/
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('imglink').value="";
    document.getElementById('website').value="";

    document.getElementById('enrollmentForm').reset()
    
}

clearbtn.addEventListener('click',clear)
enrollbtn.addEventListener()