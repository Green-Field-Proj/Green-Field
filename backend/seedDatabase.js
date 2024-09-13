const bcrypt = require("bcrypt");
const {
  sequelize,
  User,
  Category,
  Product,
  Review,
  Order,
  Cart,
} = require("./models");

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });

    // Users
    const hashedPassword = await bcrypt.hash("password123", 10);
    const users = await User.bulkCreate([
      {
        username: "admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
      },
      {
        username: "seller1",
        email: "seller1@example.com",
        password: hashedPassword,
        role: "seller",
      },
      {
        username: "seller2",
        email: "seller2@example.com",
        password: hashedPassword,
        role: "seller",
      },
      {
        username: "client1",
        email: "client1@example.com",
        password: hashedPassword,
        role: "client",
      },
      {
        username: "client2",
        email: "client2@example.com",
        password: hashedPassword,
        role: "client",
      },
      {
        username: "client3",
        email: "client3@example.com",
        password: hashedPassword,
        role: "client",
      },
    ]);

    // Categories
    const categories = await Category.bulkCreate([
      { name: "Electronics" },
      { name: "Clothing" },
      { name: "Books" },
      { name: "Home & Kitchen" },
      { name: "Sports" },
    ]);

    // Products
    const products = await Product.bulkCreate([
      {
        name: "Smartphone",
        description: "Latest model smartphone",
        price: 699.99,
        stock: 50,
        discount: 0.15,
        imageUrl:
          "https://lofficielshop.tn/fr/9764-large_default/smartphone-apple-iphone-14-5g-128-go.jpg",
        categoryId: categories[0].id,
      },
      {
        name: "Laptop",
        description: "High performance laptop",
        price: 1199.99,
        stock: 30,
        discount: 0.1,
        imageUrl:
          "https://spacenet.tn/55755-large_default/apple-macbook-air-m1-8go-256-go-gris-sideral-mgn63fna.jpg",
        categoryId: categories[0].id,
      },
      {
        name: "T-shirt",
        description: "Comfortable cotton t-shirt",
        price: 19.99,
        stock: 100,
        imageUrl:
          "https://images.onlyandsons.com/22024827/4265539/001/onlysons-onsfletcherpolo-grey.jpg?v=8fd40356a0e919bef451927f4ddfa8ab&format=webp&width=1280&quality=90&key=25-0-3",
        categoryId: categories[1].id,
      },
      {
        name: "Jeans",
        description: "Stylish denim jeans",
        price: 49.99,
        stock: 60,
        imageUrl:
          "https://assets.ajio.com/medias/sys_master/root/20240430/C6Hk/6630475505ac7d77bb332482/-1117Wx1400H-467162954-black-MODEL.jpg",
        categoryId: categories[1].id,
      },
      {
        name: "Novel",
        description: "Bestselling fiction novel",
        price: 14.99,
        stock: 75,
        imageUrl:
          "https://assets-prd.ignimgs.com/2023/05/03/hp-deathly-hallows-1683157182524.jpeg",
        categoryId: categories[2].id,
      },
      {
        name: "Cookbook",
        description: "Delicious recipes from around the world",
        price: 29.99,
        stock: 40,
        imageUrl:
          "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/cookbook3.jpg",
        categoryId: categories[2].id,
      },
      {
        name: "Blender",
        description: "High-speed blender for smoothies",
        price: 89.99,
        stock: 25,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG8Ve529X2AUSseGIoc4ZWNzokeTGIoLGaA&s",
        categoryId: categories[3].id,
      },
      {
        name: "Yoga Mat",
        description: "Comfortable yoga mat for exercise",
        price: 24.99,
        stock: 50,
        imageUrl:
          "https://i5.walmartimages.com/seo/Gymax-Large-Yoga-Mat-7-x-5-x-8-mm-Thick-Workout-Mats-for-Home-Gym-Flooring-Blue_320fa79c-db0a-4828-9f94-704d4e6cebfe.dbf3f08a34894dd3ddc50446da16319c.jpeg",
        categoryId: categories[4].id,
      },
    ]);

    // Reviews
    await Review.bulkCreate([
      {
        rating: 5,
        comment: "Great product!",
        userId: users[2].id,
        productId: products[0].id,
      },
      {
        rating: 4,
        comment: "Good quality",
        userId: users[2].id,
        productId: products[1].id,
      },
      {
        rating: 3,
        comment: "Average item",
        userId: users[3].id,
        productId: products[2].id,
      },
      {
        rating: 5,
        comment: "Excellent book!",
        userId: users[4].id,
        productId: products[4].id,
      },
    ]);

    // Orders
    const order1 = await Order.create({
      totalPrice: 719.98,
      paymentStatus: "completed",
      userId: users[2].id,
    });
    const order2 = await Order.create({
      totalPrice: 49.99,
      paymentStatus: "pending",
      userId: users[3].id,
    });

    // OrderProducts
    await order1.addProducts([products[0], products[1]]);
    await order2.addProducts([products[2]]);

    // Carts
    await Cart.create({
      quantity: 1,
      userId: users[4].id,
      productId: products[5].id,
    });
    await Cart.create({
      quantity: 2,
      userId: users[2].id,
      productId: products[3].id,
    });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
