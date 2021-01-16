//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDGwbCZVsP9oPQwsgJwxNxxzwPwF2AaghM",
      authDomain: "kwitter-messages.firebaseapp.com",
      databaseURL: "https://kwitter-messages-default-rtdb.firebaseio.com",
      projectId: "kwitter-messages",
      storageBucket: "kwitter-messages.appspot.com",
      messagingSenderId: "804534996727",
      appId: "1:804534996727:web:c29a993e1f12d84f074df2",
      measurementId: "G-CGRHZFJRXZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("roomName");
    userName = localStorage.getItem("userName");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Start code
      console.log(firebaseMessageId);
      console.log(messageData);
      name = messageData['name'];
      message = messageData['message'];
      like = messageData['like'];
      nameWithTag = "<h4> " + name + "<img class='userTick' src='tick.png'></h4>";
      messageWithTag = "<h4 class='messageH4'>" + message + "</h4>";
      likeButton = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'>";
      spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";
      row = nameWithTag + messageWithTag + likeButton + spanWithTag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(messageId) {
      console.log("clicked on like button - " + messageId);
      buttonId = messageId;
      likes = document.getElementById(buttonId).value;
      updatedLikes = Number(likes) + 1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(messageId).update({
            like : updatedLikes
      })
}
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:userName,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html"
}