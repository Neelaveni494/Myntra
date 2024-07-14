document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const shareBtn = document.getElementById("share-btn");
  const pollLink = document.getElementById("poll-link");
  const pollUrl = document.getElementById("poll-url");
  const pollQuestionInput = document.getElementById("poll-question-input");
  const pollContainer = document.querySelector(".poll-container");
  
  let yesVotes = 0;
  let noVotes = 0;
  let pollQuestion = "Do you agree with the statement?"; // Default question

  // Event listeners for buttons
  yesBtn.addEventListener("click", () => {
    yesVotes++;
    updatePollResults();
  });

  noBtn.addEventListener("click", () => {
    noVotes++;
    updatePollResults();
  });

  shareBtn.addEventListener("click", () => {
    const url = generatePollLink();
    pollUrl.textContent = url;
    pollLink.style.display = "block";
  });

  // Function to generate poll link
  function generatePollLink() {
    const pollID = generatePollID();
    return `${window.location.origin}/polls/${pollID}`;
  }

  // Function to generate poll ID
  function generatePollID() {
    return Math.random().toString(36).substr(2, 9);
  }

  // Listen for changes in the poll question input
  pollQuestionInput.addEventListener("input", () => {
    pollQuestion = pollQuestionInput.value.trim();
    if (pollQuestion === "") {
      pollQuestion = "Do you agree with the statement?"; // Default if empty
    }
  });
});
