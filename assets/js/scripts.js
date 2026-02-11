// Tabs: Start
window.addEventListener("load", function () {
  // store tabs variable
  var myTabs = document.querySelectorAll("ul.tabs__nav > li");
  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }
    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes = document.querySelectorAll(".tabs__pane");
    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }
    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }
  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks);
  }
});
// Tabs: End

// Custom Video Controls: Start
const videos = document.querySelectorAll(".video-player");
const playPauseButtons = document.querySelectorAll(".play-pause-btn");

// Loop through each video player and button to add functionality
videos.forEach((video, index) => {
  const button = playPauseButtons[index];

  function togglePlayPause() {
    if (video.paused || video.ended) {
      video.play();
      button.classList.remove("play");
      button.classList.add("pause");
    } else {
      video.pause();
      button.classList.remove("pause");
      button.classList.add("play");
    }
  }

  button.addEventListener("click", togglePlayPause);
});

// Custom Video Controls: End
