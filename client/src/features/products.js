const products = [
  {
    id: 1,
    name: "Apple Vision Pro",
    title: "Revolutionary Mixed-Reality Headset",
    rating: 4.8,
    description: "Innovative AR and VR headset for immersive experiences.",
    imageLink: "https://i.pinimg.com/564x/48/d1/12/48d1129c65ec7f70f8d9efb7e89ddebe.jpg",
    price: 599
  },
 
  {
    id: 2,
    name: "Sony WH-1000XM4",
    title: "Noise-Canceling Wireless Headphones",
    rating: 4.6,
    description: "Superior sound quality with top-notch noise cancellation.",
    imageLink: "https://i.pinimg.com/564x/a1/c2/09/a1c2094d0949f134e0d1cdf68276c14b.jpg",
    price: 349
  },
  {
    id: 3,
    name: "Samsung Galaxy S21 Ultra",
    title: "Flagship Smartphone with Superior Features",
    rating: 4.7,
    description: "High-end smartphone with powerful performance and display.",
    imageLink: "https://i.pinimg.com/564x/4b/32/11/4b3211f9f178dd025178594521e3c381.jpg",
    price: 699
  },
  {
    id: 4,
    name: "Dell XPS 13",
    title: "Ultra-Slim Laptop with Stunning Display",
    rating: 4.5,
    description: "Sleek design and powerful performance in a premium laptop.",
    imageLink: "https://i.pinimg.com/564x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg",
    price: 1299
  },
  {
    id: 5,
    name: "GoPro HERO10 Black",
    title: "Action Camera for Adventure Seekers",
    rating: 4.8,
    description: "Capture every moment with stunning video resolution.",
    imageLink: "https://i.pinimg.com/564x/bf/27/f3/bf27f3575e5a4c4caec2f689147bb10a.jpg",
    price: 399
  },
  {
    id: 6,
    name: "Amazon Echo Dot (4th Gen)",
    title: "Smart Speaker with Alexa",
    rating: 4.4,
    description: "Compact smart speaker with Alexa voice assistant integration.",
    imageLink: "https://i.pinimg.com/564x/04/8d/21/048d212c9f09c73930f48ae9eac5a8b4.jpg",
    price: 129
  },
  {
    id: 7,
    name: "Nikon Z6 II",
    title: "Mirrorless Camera with High-Speed Performance",
    rating: 4.7,
    description: "Versatile camera for stunning photos and 4K video.",
    imageLink: "https://i.pinimg.com/564x/0b/22/21/0b2221b3e36f32e131602fa0e35f1fb7.jpg",
    price: 1699
  },
  {
    id: 8,
    name: "Microsoft Surface Pro 7",
    title: "2-in-1 Tablet and Laptop Hybrid",
    rating: 4.5,
    description: "Versatile hybrid device with high-resolution display.",
    imageLink: "https://i.pinimg.com/564x/99/15/f8/9915f8ab61c4b05c8378f83e244eeff8.jpg",
    price: 749
  },
  {
    id: 9,
    name: "Bose QuietComfort 35 II",
    title: "Wireless Headphones with Active Noise Cancellation",
    rating: 4.6,
    description: "Comfortable headphones with superior noise cancellation.",
    imageLink: "https://i.pinimg.com/564x/48/eb/a6/48eba67d7e1835f2947659b0f2f843c6.jpg",
    price: 299
  },
  {
    id: 10,
    name: "DJI Mavic Air 2",
    title: "Compact Drone with High-End Features",
    rating: 4.7,
    description: "Capture breathtaking aerial shots with advanced features.",
    imageLink: "https://i.pinimg.com/564x/f0/3c/bb/f03cbb074711c8012d27652b2cd90319.jpg",
    price: 799
  },
  {
    id: 11,
    name: "Fitbit Charge 5",
    title: "Advanced Fitness Tracker with Built-in GPS",
    rating: 4.4,
    description: "Track fitness with GPS, heart rate, and more.",
    imageLink: "https://i.pinimg.com/564x/78/d1/54/78d154162b4e4d34cc70c084e3a1b137.jpg",
    price: 229
  },
  {
    id: 12,
    name: "Logitech MX Master 3",
    title: "Advanced Wireless Mouse for Productivity",
    rating: 4.5,
    description: "Ergonomic design with customizable buttons for productivity.",
    imageLink: "https://i.pinimg.com/564x/ae/0e/ab/ae0eabe264cd74d3f628c1c1a80f7034.jpg",
    price: 99
  },
  {
    id: 13,
    name: "Apple Watch Series 7",
    title: "Smartwatch with Advanced Health Features",
    rating: 4.8,
    description: "Stay connected and monitor health with advanced features.",
    imageLink: "https://i.pinimg.com/564x/66/c4/bb/66c4bb616f5d875003617d300be26857.jpg",
    price: 399
  },
  {
    id: 14,
    name: "Canon EOS R5",
    title: "High-Performance Mirrorless Camera",
    rating: 4.7,
    description: "Capture stunning images with 8K video recording.",
    imageLink: "https://i.pinimg.com/736x/e2/d1/00/e2d100210bcffaf0d816f01d4ff81027.jpg",
    price: 3899
  },
  {
    id: 15,
    name: "Sony PlayStation 5",
    title: "Next-Gen Gaming Console",
    rating: 4.9,
    description: "Experience next-gen gaming with stunning graphics.",
    imageLink: "https://i.pinimg.com/564x/46/1a/d6/461ad682037de029619fbab6e8586763.jpg",
    price: 499
  },
  {
    id: 16,
    name: "Google Nest Hub (2nd Gen)",
    title: "Smart Display with Google Assistant",
    rating: 4.5,
    description: "Control smart devices and stream content easily.",
    imageLink: "https://i.pinimg.com/564x/a2/e2/23/a2e2230e02ca774a709e7f255b13ee56.jpg",
    price: 129
  },
  {
    id: 17,
    name: "Asus ROG Zephyrus G14",
    title: "Powerful Gaming Laptop with AMD Ryzen 9",
    rating: 4.6,
    description: "Game with powerful AMD Ryzen processor and NVIDIA graphics.",
    imageLink: "https://i.pinimg.com/564x/c8/1c/26/c81c264dab1ee80a78c1c65c5b065fb4.jpg",
    price: 1299
  },
  {
    id: 18,
    name: "Samsung Galaxy Buds Pro",
    title: "True Wireless Earbuds with Active Noise Cancellation",
    rating: 4.4,
    description: "Enjoy high-quality sound with active noise cancellation.",
    imageLink: "https://i.pinimg.com/736x/44/0b/d3/440bd3f0840ebd99b70b4c95670b72ca.jpg",
    price: 199
  },
  {
    id: 19,
    name: "Amazon Kindle Paperwhite",
    title: "E-Reader with Adjustable Warm Light",
    rating: 4.7,
    description: "Read anywhere with high-resolution display and warm light.",
    imageLink: "https://i.pinimg.com/736x/16/b6/5f/16b65f182115394e419cd9d3a2891102.jpg",
    price: 139
  },
  {
    id: 20,
    name: "Razer BlackWidow V3 Pro",
    title: "Wireless Mechanical Gaming Keyboard",
    rating: 4.6,
    description: "Enhance gaming with wireless mechanical keyboard.",
    imageLink: "https://i.pinimg.com/564x/cb/03/41/cb0341508e106e20b701880fc6032c26.jpg",
    price: 229
  },
];

export default products;
