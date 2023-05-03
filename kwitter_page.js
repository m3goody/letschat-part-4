var firebaseConfig = {
      apiKey: "AIzaSyC7PiP9t0HTr7nf6imb185Wc9-fbTgECao",
      authDomain: "practice-c94-16dc2.firebaseapp.com",
      databaseURL: "https://practice-c94-16dc2-default-rtdb.firebaseio.com",
      projectId: "practice-c94-16dc2",
      storageBucket: "practice-c94-16dc2.appspot.com",
      messagingSenderId: "944696367400",
      appId: "1:944696367400:web:7c4edd6158a71010ca981d"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}