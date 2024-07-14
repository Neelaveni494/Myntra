// Function to fetch shopping list data from FakeStoreAPI
function fetchShoppingList() {
  const apiUrl = 'https://fakestoreapi.com/products';

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching shopping list:', error);
      return [];
    });
}

// Function to display shopping list items in the DOM
function displayShoppingList(shoppingList) {
  const shoppingListContainer = document.getElementById('shopping-list');

  // Clear previous items
  shoppingListContainer.innerHTML = '';

  // Loop through each item and create HTML elements
  shoppingList.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    image.classList.add('image');
    listItem.appendChild(image);

  
   

    const price = document.createElement('div');
    price.textContent = `$${item.price}`;
    price.classList.add('price');
    listItem.appendChild(price);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = '🛒 Add to Cart';
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.addEventListener('click', () => {
      alert(`${item.title} added to cart!`);
    });
    listItem.appendChild(addToCartButton);

    shoppingListContainer.appendChild(listItem);
  });
}

// Function to handle invite button click event
function handleInviteButtonClick() {
  // Generate a link (simulated for demonstration)
  const inviteLink = 'https://example.com/groupcart/join';

  // Show sharing options
  if (navigator.share) {
    navigator.share({
      title: 'Join my Group Cart!',
      text: 'Check out our shared shopping list!',
      url: inviteLink
    }).then(() => {
      console.log('Shared successfully');
    }).catch(error => {
      console.error('Error sharing:', error);
      // Fallback for sharing options
      alert(`Share link: ${inviteLink}`);
    });
  } else {
    // Fallback for browsers that do not support sharing API
    alert(`Share link: ${inviteLink}`);
  }
}

// Event listener for the invite button
document.addEventListener('DOMContentLoaded', () => {
  const inviteButton = document.getElementById('invite-button');

  if (inviteButton) {
    inviteButton.addEventListener('click', handleInviteButtonClick);
  }

  // Fetch shopping list data when the page loads
  fetchShoppingList()
    .then(shoppingList => {
      displayShoppingList(shoppingList);
    })
    .catch(error => {
      console.error('Error fetching shopping list:', error);
    });
});
