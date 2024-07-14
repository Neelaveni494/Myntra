document.addEventListener("DOMContentLoaded", () => {
  const eventItems = document.querySelectorAll(".event-item");

  eventItems.forEach(item => {
    item.addEventListener("click", () => {
      const eventId = item.id;
      alert(You selected: ${eventId.replace(/([A-Z])/g, ' $1').trim()} Event);
      // You can add the logic to redirect to another page or handle the event selection
    });
  });
});
