// Function to handle form submission
document.getElementById("message-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const messageText = document.getElementById("message-input").value.trim();

  if (messageText === "") {
    return; // Do not send empty messages
  }

  displayMessage(messageText, "self");

  // Clear input after sending message
  document.getElementById("message-input").value = "";
});

// Function to display a new message
function displayMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to toggle emoji picker visibility
function toggleEmojiPicker() {
  const emojiPicker = document.getElementById("emoji-picker");
  emojiPicker.style.display = emojiPicker.style.display === "none" ? "block" : "none";
}

// Function to add emoji to the input
function addEmoji(emoji) {
  const messageInput = document.getElementById('message-input');
  messageInput.value += emoji;
  toggleEmojiPicker(); // Close the emoji picker after selection
}

// Function to redirect to Polls.html
function redirectToPolls() {
  window.location.href = "Polls.html";
}
