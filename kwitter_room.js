
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      roomNames = childKey;
      //Start code
      console.log("Room name - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
userName = localStorage.getItem("userName");
document.getElementById("userNameOutput").innerHTML = "Welcome " + userName + " to Kwitter!";
function addRoom() {
      roomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({
            purpose : "adding room name"
      });
      localStorage.setItem("roomName", roomName);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomName", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html"
}