// 1. DATA (Database with Prices in INR)
let restaurants = [{
        name: "Exotica",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/08/08/a8/exotica.jpg?w=800&h=500&s=1",
        desc: "Banjara Hills",
        link: "https://exoticahyderabad.com/"
    },
    {
        name: "Jewel Of Nizam",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjmOidHhMgUIihLx9YHvGNfFXfsi5OyQ8wddjC8Bzp8uhTJj54o0wNwY&s",
        desc: "Gandipet",
        link: "https://www.thegolkondahotel.com/"
    },
    {
        name: "Bawarchi",
        img: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1693198886/d334c7f640e7a28158892b834e55741b.jpg",
        desc: "RTC X Roads",
        link: "https://www.bawarchirestaurants.com/"
    },
    {
        name: "Grand Hotel",
        img: "https://b.zmtcdn.com/data/pictures/7/18098427/7a24a8fa2267f10f5bdd9505e9b4fa9b_featured_v2.jpg?fit=around|960:500&crop=960:500;*,*",
        desc: "Abids",
        link: "https://www.hotelhyderabadgrand.com/"
    }
];

let categories = [{
        title: "Non-Veg",
        id: "nonveg",
        img: "https://media.istockphoto.com/id/494350327/photo/mutton-curry.jpg?s=612x612&w=0&k=20&c=hVHgWtkKFsQKorKVk30RabALq_09gJR0TsU4P0RZDfg="
    },
    {
        title: "Tiffins",
        id: "tiffins",
        img: "https://www.aladakshinapuramlo.com/wp-content/uploads/2024/08/catering-tifffins-1-1024x1024.jpg"
    },
    {
        title: "Veg",
        id: "veg",
        img: "https://img.freepik.com/free-photo/grilled-beef-pork-with-fresh-guacamole-generated-by-ai_188544-38177.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Desserts",
        id: "desserts",
        img: "https://img.freepik.com/free-photo/ice-cream-bowl-dessert-with-chocolate-cream-strawberries_181624-4908.jpg?semt=ais_hybrid&w=740&q=80"
    }
];

let foodItems = {
    nonveg: [{
            name: "Chicken Biryani",
            price: 250,
            img: "https://static.vecteezy.com/system/resources/thumbnails/040/703/949/small/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg"
        },
        {
            name: "Mutton Biryani",
            price: 350,
            img: "https://png.pngtree.com/thumb_back/fh260/background/20240328/pngtree-mutton-biryani-meal-in-a-plate-on-table-image_15645442.jpg"
        },
        {
            name: "Fish Fry",
            price: 280,
            img: "https://c.ndtvimg.com/2023-02/q8h7u3t_fish-fry_625x300_25_February_23.jpg"
        },
        {
            name: "Prawn Curry",
            price: 320,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gXbCx4Dk3A8BO2zTYUmsbvNq0EUJAXA1Tg&s"
        }
    ],
    tiffins: [{
            name: "Idly",
            price: 40,
            img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/rice_idli.webp"
        },
        {
            name: "Dosa",
            price: 50,
            img: "https://t3.ftcdn.net/jpg/05/05/40/28/360_F_505402811_prL7D5Go35LZKpQeUVEUiCLnO6spS3sk.jpg"
        },
        {
            name: "Vada",
            price: 45,
            img: "https://thumbs.dreamstime.com/b/delicious-south-indian-dish-medu-vada-serving-chutney-sambar-traditional-breakfast-photo-plate-crispy-golden-made-405438107.jpg"
        },
        {
            name: "Puri",
            price: 50,
            img: "https://www.awesomecuisine.com/wp-content/uploads/2020/03/poori-masala-kizhangu.jpg"
        }
    ],
    veg: [{
            name: "Paneer Rice",
            price: 180,
            img: "https://hungryhealthyhappy.com/wp-content/uploads/2022/01/Paneer-Curry-featured-500x500.jpg"
        },
        {
            name: "Veg Fried Rice",
            price: 150,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDs5fXn0OBdSClWOp3JWXgvSyQqiHPQk4XgiqYRNhNPHyrbgMWpvdReCYn58S96DPtVgs&usqp=CAU"
        },
        {
            name: "Sambar Rice",
            price: 120,
            img: "https://traditionallymodernfood.com/wp-content/uploads/2025/01/hotel-style-sambar-sadam-6-scaled.jpeg"
        },
        {
            name: "Curd Rice",
            price: 90,
            img: "https://i.ytimg.com/vi/NXAOKWMOUrk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATfvCwRTbwRF7jlZmmGziDqurBlA"
        }
    ],
    desserts: [{
            name: "Gulab Jamun",
            price: 60,
            img: "https://thumbs.dreamstime.com/b/gulab-jamun-beautiful-dish-jaman-heart-shape-indian-pakistani-peoples-favourite-dessert-34180888.jpg"
        },
        {
            name: "Ice Cream",
            price: 80,
            img: "https://media.istockphoto.com/id/1491655936/photo/chocolate-ice-cream-scoop.jpg?s=612x612&w=0&k=20&c=m_NDyHXn048dbKDuAfcnRwP54AM74xQMCWsUlOL-JJI="
        },
        {
            name: "Cheesecake",
            price: 150,
            img: "https://www.allrecipes.com/thmb/iHP0GvsCwHIEWfde69IuxgxcLvg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/276069homemade-cheesecakeKim4x3-eb1f8032a2e54eff99bc1ad0f9d3a8d4.jpg"
        },
        {
            name: "Gajar Halwa",
            price: 100,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsovwJU7J3Ywx_su3RguCjOsM7eeemlvxDg&s"
        }
    ]
};

let currentSelection = "";
let currentPrice = 0;
let tempOrderDetails = {}; // Stores user info before payment
let myOrders = [];

// 2. MAIN FUNCTIONS

function startApp() {
    setGreeting();
    renderRestaurants();
    renderCategories();
}

function showSection(sectionId, element) {
    let allSections = [
        'homeSection', 'restaurantSection', 'menuSection',
        'foodItemsSection', 'orderFormSection', 'paymentSelectionSection', 'myOrdersSection',
        'paymentSection', 'contactSection'
    ];

    for (let i = 0; i < allSections.length; i++) {
        let id = allSections[i];
        let section = document.getElementById(id);

        if (id === sectionId) {
            section.classList.remove('d-none');
        } else {
            section.classList.add('d-none');
        }
    }

    window.scrollTo(0, 0);
    $('.navbar-collapse').collapse('hide');

    if (element) {
        let links = document.querySelectorAll('.nav-link');
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
        }
        element.classList.add('active');
    }
}

function setGreeting() {
    let date = new Date();
    let hour = date.getHours();
    let msg = "Hello!";

    if (hour < 12) {
        msg = "Good Morning!";
    } else if (hour < 18) {
        msg = "Good Afternoon!";
    } else {
        msg = "Good Evening!";
    }
    document.getElementById('greetingMsg').innerText = msg;
}

// 3. GENERATE HTML DYNAMICALLY (Responsive Grid)

function renderRestaurants() {
    let container = document.getElementById('restaurantsList');
    container.innerHTML = "";

    for (let i = 0; i < restaurants.length; i++) {
        let res = restaurants[i];
        container.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="restaurant-card" onclick="window.open('${res.link}', '_blank')" title="Visit Website">
                    <img src="${res.img}" class="restaurant-img">
                    <div class="card-body">
                        <h5 class="text-primary">${res.name}</h5>
                        <p class="small text-muted">${res.desc}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

function renderCategories() {
    let container = document.getElementById('categoriesList');
    container.innerHTML = "";

    for (let i = 0; i < categories.length; i++) {
        let cat = categories[i];
        container.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                <div class="menu-card-background" onclick="openFoodList('${cat.id}', '${cat.title}')">
                    <img src="${cat.img}" class="menu-img">
                    <h3 class="mt-2">${cat.title}</h3>
                </div>
            </div>
        `;
    }
}

function openFoodList(catId, catTitle) {
    document.getElementById('categoryTitle').innerText = catTitle;
    let container = document.getElementById('foodList');
    container.innerHTML = "";

    let items = foodItems[catId];

    if (items) {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            container.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                    <div class="menu-card-background">
                        <img src="${item.img}" class="menu-img">
                        <h5 class="mt-2">${item.name}</h5>
                        <p class="font-weight-bold">₹${item.price}</p>
                        <button class="center-nonveg" onclick="buyItem('${item.name}', ${item.price})">Order Now</button>
                    </div>
                </div>
            `;
        }
    }
    showSection('foodItemsSection', null);
}

// 4. ORDER & PAYMENT LOGIC

function buyItem(itemName, itemPrice) {
    currentSelection = itemName;
    currentPrice = itemPrice;

    document.getElementById('orderItemName').innerText = "Ordering: " + itemName;
    document.getElementById('orderItemPrice').innerText = "Price: ₹" + itemPrice;

    document.getElementById('inputName').value = "";
    document.getElementById('inputAddress').value = "";
    document.getElementById('inputPhone').value = "";

    // Remove previous errors
    let existingErrors = document.querySelectorAll('.dynamic-error-msg');
    for (let i = 0; i < existingErrors.length; i++) {
        existingErrors[i].remove();
    }

    showSection('orderFormSection', null);
}

function proceedToPayment() {
    let nameInput = document.getElementById('inputName');
    let addressInput = document.getElementById('inputAddress');
    let phoneInput = document.getElementById('inputPhone');

    let name = nameInput.value.trim();
    let address = addressInput.value.trim();
    let phone = phoneInput.value.trim();

    let isValid = true;

    // Remove errors
    let existingErrors = document.querySelectorAll('.dynamic-error-msg');
    for (let i = 0; i < existingErrors.length; i++) {
        existingErrors[i].remove();
    }

    // Validate Name
    let nameRegex = /^[A-Za-z\s]+$/;
    if (name === "") {
        showError(nameInput, "Required");
        isValid = false;
    } else if (!nameRegex.test(name)) {
        showError(nameInput, "Invalid Input: Only letters allowed");
        isValid = false;
    }

    // Validate Address
    if (address === "") {
        showError(addressInput, "Required");
        isValid = false;
    }

    // Validate Phone
    let phoneRegex = /^\d{10}$/;
    if (phone === "") {
        showError(phoneInput, "Required");
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError(phoneInput, "Invalid Input: Must be 10 digits");
        isValid = false;
    }

    if (isValid) {
        // Save details temporarily and go to Payment
        tempOrderDetails = {
            item: currentSelection,
            price: currentPrice,
            customerName: name,
            customerAddress: address,
            customerPhone: phone
        };

        document.getElementById('finalPrice').innerText = "₹" + currentPrice;
        showSection('paymentSelectionSection', null);
    }
}

function showError(inputElement, message) {
    let errorMsg = document.createElement("p");
    errorMsg.innerText = message;
    errorMsg.style.color = "red";
    errorMsg.style.fontSize = "12px";
    errorMsg.style.marginTop = "5px";
    errorMsg.className = "dynamic-error-msg";
    inputElement.parentNode.insertBefore(errorMsg, inputElement.nextSibling);
}

function selectUPI() {
    alert("Feature coming soon! Please use Cash on Delivery.");
}

function confirmCOD() {
    // Finalize the order
    let order = {
        item: tempOrderDetails.item,
        price: tempOrderDetails.price,
        customerName: tempOrderDetails.customerName,
        time: 30
    };

    myOrders.push(order);
    showToast();
    showMyOrders();
    showSection('myOrdersSection', null);
}

function showToast() {
    let toast = document.getElementById('simpleToast');
    toast.classList.remove('d-none');
    setTimeout(function() {
        toast.classList.add('d-none');
    }, 3000);
}

function showMyOrders() {
    let container = document.getElementById('myOrdersList');
    container.innerHTML = "";

    if (myOrders.length === 0) {
        container.innerHTML = "<p class='text-center w-100'>No orders yet.</p>";
        return;
    }

    for (let i = 0; i < myOrders.length; i++) {
        let order = myOrders[i];
        container.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-3">
                <div class="card p-3 shadow-sm border-0">
                    <h5 class="text-primary">${order.item}</h5>
                    <p class="font-weight-bold">Amount: ₹${order.price}</p>
                    <p class="mb-1"><strong>To:</strong> ${order.customerName}</p>
                    <p class="text-success font-weight-bold">Delivery in: ${order.time} mins</p>
                </div>
            </div>
        `;
    }
}

function clearOrders() {
    myOrders = [];
    showMyOrders();
    alert("History Cleared!");
}