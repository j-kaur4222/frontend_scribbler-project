var editBtn=document.getElementById("edit");

var cmt=document.getElementById("comments");

var commentsec=document.getElementById("allComment");

var save_Button=document.getElementById("save");

var heading=document.getElementById("pHeading");

var heading_Edit=document.getElementById("editing");

var pContent=document.getElementById("post");

var postEdit=document.getElementById("postedit");

var like=document.getElementById("like");

var likes=document.getElementById("likes");

function edit_Post() {
    heading.style.display="none";
    heading_Edit.style.display="block";

    pContent.style.display="none";
    postEdit.style.display="block";

    editBtn.style.display="none";
    save_Button.style.display="block";

    heading_Edit.value=heading.textContent;
    var value=pContent.textContent.trim();
    postEdit.innerHTML=value;


    postEdit.style.height = "1px";
    postEdit.style.height = (25+postEdit.scrollHeight)+"px";

}

var c=0;

function like_post() {

    like.innerHTML="<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/>Liked!";
    c++;
    if(c==1){
        likes.innerHTML="1 person has liked this!";
    }
    else{
        likes.innerHTML=c+" people have liked this!";
    }

}

function pComment(){
    var newPara=document.createElement("P");
    var txt=document.createTextNode(cmt.value);
    newPara.appendChild(txt);
    newPara.setAttribute("class","comment");
    commentsec.insertBefore(newPara,commentsec.childNodes[0]);
}

function save_Post() {
    heading.style.display="block";
    heading_Edit.style.display="none";

    pContent.style.display="block";
    postEdit.style.display="none";

    editBtn.style.display="block";
    save_Button.style.display="none";

    heading.innerHTML=heading_Edit.value;
    pContent.innerHTML=postEdit.value;
}