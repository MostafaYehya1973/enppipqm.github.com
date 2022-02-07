// Initialize Firebase
var config = {
	apiKey: "AIzaSyCzQ7asct5DG0frHcjLfvDigf87RwRWeCs",
	authDomain: "quickstart-1606086647352.firebaseapp.com",
	databaseURL: "https://quickstart-1606086647352-default-rtdb.firebaseio.com",
	projectId: "quickstart-1606086647352",
	storageBucket: "quickstart-1606086647352.appspot.com",
	messagingSenderId: "965183169164",
	appId: "1:965183169164:web:e10a55529e1187580911a9"
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}


