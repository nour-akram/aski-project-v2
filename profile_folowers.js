// const currentUserString = localStorage.getItem("currentUser");
// const usersString = localStorage.getItem("users");
// if (currentUserString) {
//     const currentUser = JSON.parse(currentUserString);

//     // const user_id = currentUser.id; 
//     const f_name = currentUser.firstName; 
//     const l_name = currentUser.lastName; 
//     // const mail = currentUser.email; 
//     const user_countery = currentUser.country; 
//     // const user_interests = currentUser.interests;
//     const user_flowers = currentUser.followers;
//     const user_image = currentUser.userImage;
//     const user_bio = currentUser.bio;
//     document.getElementById("welcomeMsg").textContent =`${f_name} ${l_name}`;
//     document.getElementById("userLocation").textContent = `${user_countery}`;
//     document.getElementById("profilePic").src = user_image;
//     document.getElementById("followersCount").textContent = user_flowers;



// const followBtn = document.querySelector(".follow-btn");
//     followBtn.addEventListener("click", () => {
//         user_flowers++;
//         document.getElementById("followersCount").textContent = user_flowers; 
//         currentUser.followers = user_flowers;
//         localStorage.setItem("currentUser", JSON.stringify(currentUser));
//     });}


// const params = new URLSearchParams(window.location.search);
// const targetUserId = localStorage.getItem("profileuserid") 

// const allUsersString = localStorage.getItem("allUsers");

// if (allUsersString) {
//     const allUsers = JSON.parse(allUsersString);
//     const targetUser = allUsers.find(user => user.id === targetUserId); 

//     console.log(targetUser,"usernow");

//     if (targetUser) {
        
//         document.getElementById("welcomeMsg").textContent = `${targetUser.firstName} ${targetUser.lastName}`;
//         document.getElementById("userLocation").textContent = targetUser.country ;
//         document.getElementById("profilePic").src = targetUser.userImage?targetUser.userImage:"./avatar.jpg" ;
//         document.getElementById("followersCount").textContent = targetUser.followers || 0;
//         document.getElementById("userTitle").textContent = targetUser.bio; 

//         const followBtn = document.querySelector(".follow-btn");
//         followBtn.addEventListener("click", () => {
//             targetUser.followers = (targetUser.followers || 0) + 1; 
//             document.getElementById("followersCount").textContent = targetUser.followers;

//             const userIndex = allUsers.findIndex(user => user.id === targetUserId);
//             if (userIndex !== -1) {
//                 allUsers[userIndex] = targetUser;
//                 localStorage.setItem("allUsers", JSON.stringify(allUsers));
//             }

//             alert(`You followed ${targetUser.firstName} ${targetUser.lastName}!`);
//         });
//     } else {
//         alert("User not found!");
//     }
// } else {
//     alert("No users data found in localStorage.");
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////

// document.querySelectorAll("ul>li").forEach(function (ele) {
//     console.log(ele);
//     ele.classList.remove("active");
//   });
//   document.querySelectorAll("ul>li")[0].classList.add("active");
  
//   document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll("ul>li").forEach(function (ele) {
//       console.log(ele);
//       ele.classList.remove("active");
//     });
//     document.querySelectorAll("ul>li")[0].classList.add("active");
  
//     console.log(document.querySelectorAll("ul>li"));
  
//     const currentUser = localStorage.getItem("currentUser");
  
//     const navItems = document.querySelectorAll("nav ul>li");
//     const loginItem = document.querySelector("li:nth-child(2)");
//     const registerItem = document.querySelector("li:nth-child(3)");
//     const saveItem = document.querySelector("li:nth-child(4)");
//     const profileItem = document.querySelector("li:nth-child(5)");
//     const logoutItem = document.querySelector("li:nth-child(6)");
  
  
  
//     if (currentUser) {
//       saveItem.classList.remove("hidden");
//       profileItem.classList.remove("hidden");
//       logoutItem.classList.remove("hidden");
  
//       loginItem.classList.add("hidden");
//       registerItem.classList.add("hidden");
  
//     } else {
//       loginItem.classList.remove("hidden");
//       registerItem.classList.remove("hidden");
  
//       saveItem.classList.add("hidden");
//       profileItem.classList.add("hidden");
//       logoutItem.classList.add("hidden");
      
//     }
  
//     const activeIndex = localStorage.getItem("activeNavIndex");
//     if (activeIndex !== null) {
//       navItems[activeIndex].classList.add("active");
//     }
//     // console.log(activeIndex, "active index");
//     // console.log(navItems, "nav items");
  
//     navItems.forEach((item, index) => {
//       item.addEventListener("click", () => {
//         navItems.forEach((li) => li.classList.remove("active"));
//         item.classList.add("active");
  
//         localStorage.setItem("activeNavIndex", index);
//       });
//     });
  
    
//   });
//   /////////////////////////////////////////////show questions of this user
//   const allUsers = JSON.parse(localStorage.getItem("allUsers"));
//   const allQuestions=JSON.parse(localStorage.getItem("allQuestions"))
//   let targetQuestionsofuser = allQuestions.filter(question => question.userId === targetUserId); 
// console.log(targetQuestionsofuser,"quse");


// let showQuestinsofuser=document.getElementById("showQuestinsofuser")
// if(targetQuestionsofuser.length===0){
//     showQuestinsofuser.innerHTML="you haven't publish Questions at all !"
//     showQuestinsofuser.style=`
//     margin: 7% auto;
//     text-transform:captalize;
//     font-size:20px;
//     font-weight:900;
//     opacity:0.7;
//     text-align: center;
//     `
// }
// else{

//     function getUsername(userId, users) {
//         const user = users.find(user => user.id === userId);
//         return user ? `${user.firstName} ${user.lastName}` : "Unknown User";
//       }


//     targetQuestionsofuser.forEach(question => {
//         const username = getUsername(question.userId, allUsers);
//         const questionElement = document.createElement("div");
//         questionElement.classList.add("saved-question");
//         questionElement.style=`
//         width:70%;
//         margin:10px auto;
//         `;
//         questionElement.innerHTML = `
//           <h3>${question.title}</h3>
//           <p>${question.content}</p>
//           <p><strong>Posted by:</strong> ${username}</p>
//           <p><strong>Likes:</strong> ${question.votes}</p>
//           <div class="tags">${question.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
//         `;
  
//         showQuestinsofuser.appendChild(questionElement);
//     })



// }
const targetUserId = localStorage.getItem("profileuserid");

const allUsersString = localStorage.getItem("allUsers");

if (allUsersString) {
    const allUsers = JSON.parse(allUsersString);
    const targetUser = allUsers.find(user => user.id === targetUserId);

    console.log(targetUser, "usernow");

    if (targetUser) {
        document.getElementById("welcomeMsg").textContent = `${targetUser.firstName} ${targetUser.lastName}`;
        document.getElementById("userLocation").textContent = targetUser.country;
        document.getElementById("profilePic").src = targetUser.userImage ? targetUser.userImage : "./avatar.jpg";
        document.getElementById("followersCount").textContent = targetUser.followers || 0;
        document.getElementById("userTitle").textContent = targetUser.bio;

        const followBtn = document.querySelector(".follow-btn");

        if (targetUser.followers && targetUser.followers > 0) {
            followBtn.textContent = "Unfollow";
        } else {
            followBtn.textContent = "Follow";
        }

        followBtn.addEventListener("click", () => {
            if (followBtn.textContent === "Unfollow") {
                targetUser.followers = Math.max(0, (targetUser.followers || 0) - 1);
                followBtn.textContent = "Follow"; 
            } else {
                targetUser.followers = (targetUser.followers || 0) + 1;
                followBtn.textContent = "Unfollow";
            }

            document.getElementById("followersCount").textContent = targetUser.followers;

            const userIndex = allUsers.findIndex(user => user.id === targetUserId);
            if (userIndex !== -1) {
                allUsers[userIndex] = targetUser;
                localStorage.setItem("allUsers", JSON.stringify(allUsers));
            }

            alert(`${followBtn.textContent} ${targetUser.firstName} ${targetUser.lastName}!`);
        });
    } else {
        alert("User not found!");
    }
} else {
    alert("No users data found in localStorage.");
}
