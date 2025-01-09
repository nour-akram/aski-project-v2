

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const allUsers = JSON.parse(localStorage.getItem("allUsers"));
const allQuestions=JSON.parse(localStorage.getItem("allQuestions"))
if (currentUser) {
    
    const targetUser = allUsers.find(user => user.id === currentUser.id); 

    const f_name = currentUser.firstName; 
    const l_name = currentUser.lastName; 
    const user_country = currentUser.country; 
    const user_followers = currentUser.followers;
    const user_image = targetUser.userImage?targetUser.userImage:"./avatar.jpg";
    const user_bio = currentUser.bio;

    document.getElementById("welcomeMsg").textContent = `Welcome back, ${f_name} ${l_name}`;
    document.getElementById("userTitle").textContent = user_bio;
    document.getElementById("userLocation").textContent = user_country || "Egypt";
    document.getElementById("profilePic").src = user_image;
    document.getElementById("followersCount").textContent = user_followers || 0;

    const modal = document.getElementById('editProfileModal');
    const editBtn = document.querySelector('.edit-btn');
    const closeModal = document.getElementById('closeModal');
    const saveBtn = document.getElementById('saveBtn');
    const profilePictureInput = document.getElementById('profilePicture');
    const profilePic = document.getElementById("profilePic");

    editBtn.addEventListener('click', () => {
        modal.style.display = 'flex';

        document.getElementById('bio').value = user_bio || "";
        document.getElementById('country').value = user_country || "";
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    profilePictureInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                profilePic.src = event.target.result; 
            };

            reader.readAsDataURL(file); 
        }
    });

    saveBtn.addEventListener('click', () => {
        const bio = document.getElementById('bio').value;
        const country = document.getElementById('country').value;
        const profilePicSrc = profilePic.src; 

        currentUser.bio = bio;
        currentUser.country = country;
        currentUser.userImage = profilePicSrc; 

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        let allUsers=JSON.parse(localStorage.getItem("allUsers"));
        const userIndex = allUsers.findIndex((user) => user.id === currentUser.id);
        if (userIndex !== -1) {
          allUsers[userIndex] = currentUser;
          localStorage.setItem("allUsers", JSON.stringify(allUsers));
        }
        document.getElementById("userLocation").textContent = country;

        modal.style.display = 'none'; 
 
        window.location.href=window.location.href
        // alert("Profile updated successfully!");
    });
} else {
    alert("No user found in localStorage. Please log in or register.");
}

//////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser'); 
    
    const navItems = document.querySelectorAll('nav ul>li'); 
    const loginItem = document.querySelector('li:nth-child(2)'); 
    const registerItem = document.querySelector('li:nth-child(3)'); 
    const saveItem = document.querySelector('li:nth-child(4)');
    const profileItem = document.querySelector('li:nth-child(5)'); 
    const logoutItem = document.querySelector('li:nth-child(6)'); 

    if (currentUser) {
        saveItem.classList.remove('hidden');
        profileItem.classList.remove('hidden');
        logoutItem.classList.remove('hidden');

        loginItem.classList.add('hidden');
        registerItem.classList.add('hidden');
    } else {
        loginItem.classList.remove('hidden');
        registerItem.classList.remove('hidden');

        saveItem.classList.add('hidden');
        profileItem.classList.add('hidden');
        logoutItem.classList.add('hidden');
        btn.style.display = "none";
    }


    const activeIndex = localStorage.getItem('activeNavIndex'); 
    if (activeIndex !== null) {
        navItems[activeIndex].classList.add('active');
    }
    // console.log(activeIndex,"active index");
    // console.log(navItems,"nav items");
    
    

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');

            localStorage.setItem('activeNavIndex', index);
        });
    });
});



////////////////////////////////////////////////////////////////////////show questions of user it self
let targetQuestionsofuser = allQuestions.filter(question => question.userId === currentUser.id); 
console.log(targetQuestionsofuser,"quse");


let showQuestinsofuser=document.getElementById("showQuestinsofuser")
if(targetQuestionsofuser.length===0){
    showQuestinsofuser.innerHTML="you haven't publish Questions at all !"
    showQuestinsofuser.style=`
    margin: 7% auto;
    text-transform:captalize;
    font-size:20px;
    font-weight:900;
    opacity:0.7;
    text-align: center;
    `
}
else{

    function getUsername(userId, users) {
        const user = users.find(user => user.id === userId);
        return user ? `${user.firstName} ${user.lastName}` : "Unknown User";
      }


    targetQuestionsofuser.forEach(question => {
        const username = getUsername(question.userId, allUsers);
        const questionElement = document.createElement("div");
        questionElement.classList.add("saved-question");
  
        questionElement.innerHTML = `
          <h3>${question.title}</h3>
          <p>${question.content}</p>
          <p><strong>Posted by:</strong> ${username}</p>
          <p><strong>Likes:</strong> ${question.votes}</p>
          <div class="tags">${question.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        `;
  
        showQuestinsofuser.appendChild(questionElement);
    })



}