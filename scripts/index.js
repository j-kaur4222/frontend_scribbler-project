// get create post modal 
var createPost = document.getElementById('createPostModal');

// Get the signup button that opens the modal
var createPostBtn = document.getElementById("createBtn");

// Get the <span> element that closes the create modal
var createmodalSpan = document.getElementById("createModalSpan");

// close the modal
createmodalSpan.onclick = function() {
  createPost.style.display = "none";
}

// When user clicks on the create Post button, open the modal
createPostBtn.onclick = function() {
  createPost.style.display = "block";
}
  