
// Variable of Sidebar
const sidebar = document.querySelector(".sidebar");

// Variable of Menu Options
const menuToggleButtons = document.querySelectorAll(".menuToggle");
const menuListItems = document.querySelectorAll(".menuList");


// Function of Sidebar - starts
function openSidebar() {
    sidebar.style.width = 'auto';
    sidebar.style.transition = "all 0.5s ease-in-out";
}

function closeSidebar() {
    sidebar.style.width = '0';
    sidebar.style.transition = "all 0.5s ease-in-out";
}
// Function of Sidebar - ends

// Function of Menu options - starts
menuToggleButtons.forEach(function(menuToggle, index) {
    menuToggle.addEventListener("click", function() {
    if (menuListItems[index].style.display === "none") {
        menuListItems.forEach(function(menuList) {
        menuList.style.display = "none";
      });
      menuListItems[index].style.display = "block";
    } else {
      menuListItems[index].style.display = "none";
    }
  });
});
// Function of Menu options - ends













