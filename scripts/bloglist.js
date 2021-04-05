
var confirmModel=document.getElementsByClassName("confirmboxmodal")[0];

//return trash icon
var confirmBtn=document.querySelectorAll("i");

//get no button
var confirmNo=document.getElementById("n");

var i;
for (i = 0; i < confirmBtn.length; i++) {
    let Btn=confirmBtn[i];
    Btn.onclick=function() {
        confirmModel.style.display="flex";
    }
}

confirmNo.onclick=function () {
    confirmModel.style.display="none";
}