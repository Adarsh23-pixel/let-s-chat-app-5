//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAs_l53cNLO8R0nzDUlDqCSGNCIOmBiP80",
      authDomain: "kwitter-28a43.firebaseapp.com",
      databaseURL: "https://kwitter-28a43-default-rtdb.firebaseio.com",
      projectId: "kwitter-28a43",
      storageBucket: "kwitter-28a43.appspot.com",
      messagingSenderId: "23835514181",
      appId: "1:23835514181:web:8d67f6e179f147b6e89a2c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() { 
          msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push
           ({ name:user_name,
             message:msg,
              like:0 
            
            }); 
            document.getElementById("msg").value = ""; }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag  = "<h4>"+name+"<img class='user_tick' src='tick.png'>"</h4>";
 message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
 like_button = "<button class'btn btn-warning' id="+ firebase_message_id +" value="+" like +" onclick='updateLike(this.id)'>"</button>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>"+like+"">"</span></button><hr>";
 row = name_with_tag + message_with_tag + like_button + span_with_tag;
 document.getElementById("output")innerHTML+ = row;


 //End code
      } });  }); }
getData();


    