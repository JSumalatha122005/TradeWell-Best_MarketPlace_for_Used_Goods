document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("products_initialized")) {
        const initialProducts = [
            {
                title: "Vintage Leather Sofa",
                description: "A comfortable three-seater leather sofa, perfect for a cozy living room. Minor wear and tear, but great condition.",
                price: "45000",
                imageUrl: "https://tse4.mm.bing.net/th/id/OIP.iyE6vwAFDr4JDly8TTtUXwHaEo?pid=Api&P=0&h=180",
                category: "Furniture",
                timestamp: Date.now() - 86400000 * 2,
                ownerEmail: "seller_furniture@example.com"
            },
            {
                title: "Sony Noise-Cancelling Headphones",
                description: "Used once, practically new. Excellent sound quality and battery life. Comes with original case and cables.",
                price: "1999",
                imageUrl: "https://tse3.mm.bing.net/th/id/OIP.CFMaRMcrVr7SI-cseetuygHaE8?pid=Api&P=0&h=180",
                category: "Electronics",
                timestamp: Date.now(),
                ownerEmail: "seller_electronics@example.com"
            },
            {
                title: "Classic Denim Jacket (Size M)",
                description: "Well-maintained blue denim jacket, size medium. Timeless style, ready for a new owner.",
                price: "350",
                imageUrl: "https://tse4.mm.bing.net/th/id/OIP.7MbwTRhG_1GekElz34CJRwHaHY?pid=Api&P=0&h=180",
                category: "Clothing",
                timestamp: Date.now() - 86400000 * 5,
                ownerEmail: "seller_clothing@example.com"
            },
            {
                title: "The Great Gatsby by F. Scott Fitzgerald",
                description: "Hardcover edition. A must-read classic, in great condition. Minimal highlighting.",
                price: "999",
                imageUrl: "https://tse3.mm.bing.net/th/id/OIP.b7qEt1Clybko_5f9M7kdiQHaKb?pid=Api&P=0&h=180",
                category: "Books",
                timestamp: Date.now() - 86400000, 
                ownerEmail: "seller_books@example.com"
            },
            {
                title: "Mountain Bike - 21 Speed",
                description: "Sturdy mountain bike, 21-speed. Needs a new seat, otherwise fully functional.",
                price: "28000",
                imageUrl: "https://tse1.mm.bing.net/th/id/OIP.8zsA96uNJhq-qe3Nk8WQxwHaEK?pid=Api&P=0&h=180",
                category: "Vehicles",
                timestamp: Date.now() - 86400000 * 7, 
                ownerEmail: "seller_vehicles@example.com"
            }
        ];
        localStorage.setItem("products", JSON.stringify(initialProducts));
        localStorage.setItem("products_initialized", "true"); 
    }
        const form = document.querySelector(".product-form form");
        const productListing = document.querySelector(".product-listing");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const title = form.querySelector('input[type="text"]').value.trim();
            const description = form.querySelector('textarea').value.trim();
            const price = form.querySelector('input[type="number"]').value.trim();
            const imageUrl = form.querySelector('input[type="url"]').value.trim() || "https://via.placeholder.com/200";
            const category = form.querySelector('select').value;

            if (!title || !description || !price || !category) {
                alert("Please fill out all fields.");
                return;
            }
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${imageUrl}" alt="Product Image">
                <h4>${title}</h4>
                <p>${price}</p>
                <p>${description}</p>
                <p><strong>Category:</strong> ${category}</p>
            `;
            productListing.prepend(card);
            form.reset();
        });
    });
    const currentUser = localStorage.getItem("loggedInUser");

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortBy = document.getElementById("sortBy");
    const noResults = document.getElementById("noResults");

    function displayProducts(filtered) {
      productList.innerHTML = "";
      if (filtered.length === 0) {
        noResults.style.display = "block";
        return;
      }
      noResults.style.display = "none";

      filtered.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        let favBtnHtml = '';
        let cartBtnHtml = '';
        let messageBtnHtml = '';
        let editDeleteHtml = '';

        if (currentUser) {
          favBtnHtml = `<button class="fav-btn" data-id="${index}">Favorite</button>`;
          cartBtnHtml = `<button class="cart-btn" data-id="${index}">Add to Cart</button>`;
          messageBtnHtml = `<button class="message-btn" data-id="${index}">Message</button>`;

          if (product.ownerEmail === currentUser) {
            editDeleteHtml = `<a href="edit.html?id=${index}"><button class="edit-btn">Edit</button></a>
                              <button class="delete-btn" data-id="${index}">Delete</button>`;
          }
        } else {
          favBtnHtml = `<button disabled title="Login to Favorite">Favorite</button>`;
          cartBtnHtml = `<button disabled title="Login to Add to Cart">Add to Cart</button>`;
          messageBtnHtml = `<button disabled title="Login to Message">Message</button>`;
        }

        card.innerHTML = `
          <img src="${product.imageUrl || 'https://via.placeholder.com/200'}" alt="Product Image">
          <h4>${product.title}</h4>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p>${product.description}</p>
          ${favBtnHtml}
          ${cartBtnHtml}
          ${messageBtnHtml}
          ${editDeleteHtml}
        `;

        productList.appendChild(card);
      });

      attachActions();
    }

    function attachActions() {
      document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", function () {
          const idx = parseInt(this.dataset.id);
          if (confirm("Are you sure to delete this item?")) {
            products.splice(idx, 1);
            localStorage.setItem("products", JSON.stringify(products));
            filterAndDisplay();
          }
        });
      });

      document.querySelectorAll(".fav-btn").forEach(btn => {
        btn.addEventListener("click", function () {
          const idx = parseInt(this.dataset.id);
          const product = products[idx];
          const key = "favorites_" + currentUser;
          let favs = JSON.parse(localStorage.getItem(key)) || [];
          if (!favs.some(p => p.timestamp === product.timestamp)) {
            favs.push(product);
            localStorage.setItem(key, JSON.stringify(favs));
            alert("Saved to favorites");
          } else {
            alert("Already in favorites");
          }
        });
      });

      document.querySelectorAll(".cart-btn").forEach(btn => {
        btn.addEventListener("click", function () {
          const idx = parseInt(this.dataset.id);
          const product = products[idx];
          const key = "cart_" + currentUser;
          let cart = JSON.parse(localStorage.getItem(key)) || [];
          if (!cart.some(p => p.timestamp === product.timestamp)) {
            cart.push(product);
            localStorage.setItem(key, JSON.stringify(cart));
            alert("Added to cart");
          } else {
            alert("Already in cart");
          }
        });
      });

      document.querySelectorAll(".message-btn").forEach(btn => {
        btn.addEventListener("click", function () {
          const idx = parseInt(this.dataset.id);
          const product = products[idx];
          const msg = prompt(`Message to seller of "${product.title}":`);
          if (msg && msg.trim()) {
            const key = "messages_" + product.ownerEmail;
            let msgs = JSON.parse(localStorage.getItem(key)) || [];
            msgs.push({
              from: currentUser,
              content: msg,
              productTitle: product.title,
              time: new Date().toLocaleString()
            });
            localStorage.setItem(key, JSON.stringify(msgs));
            alert("Message sent");
          }
        });
      });
    }

    function filterAndDisplay() {
      const s = searchInput.value.toLowerCase();
      const cat = categoryFilter.value;
      const sortOpt = sortBy.value;

      let filtered = products.filter(p => {
        const matchCat = !cat || p.category === cat;
        const matchText = p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s);
        return matchCat && matchText;
      });

      if (sortOpt === "priceAsc") {
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (sortOpt === "priceDesc") {
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      } else if (sortOpt === "newest") {
        filtered.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      }

      displayProducts(filtered);
    }
    filterAndDisplay();

    searchInput.addEventListener("input", filterAndDisplay);
    categoryFilter.addEventListener("change", filterAndDisplay);
    sortBy.addEventListener("change", filterAndDisplay);


    