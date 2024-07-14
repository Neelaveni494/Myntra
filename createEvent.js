document.addEventListener("DOMContentLoaded", () => {
  const eventForm = document.getElementById("event-form");
  const eventList = document.getElementById("event-list");

  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventName = document.getElementById("event-name").value.trim();
    const eventType = document.getElementById("event-type").value;
    const eventDate = document.getElementById("event-date").value;
    const eventDescription = document.getElementById("event-description").value.trim();

    if (eventName && eventType && eventDate && eventDescription) {
      addEvent(eventName, eventType, eventDate, eventDescription);
      eventForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

  function addEvent(name, type, date, description) {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");

    const eventContent = `
      <h3>${name}</h3>
      <p>Type: ${type}</p>
      <p>Date: ${date}</p>
      <p>Description: ${description}</p>
    `;

    eventElement.innerHTML = eventContent;
    eventList.appendChild(eventElement);
  }
});
