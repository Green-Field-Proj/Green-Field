import axios from "axios";
const baseURL = "http://localhost:3000/api";

const tests = [
  // User APIs
  { method: "get", url: "/user/getAll" },
  { method: "get", url: "/user/byId/1" },
  { method: "get", url: "/user/byName/testuser" },

  // Product APIs
  { method: "get", url: "/product/getAll" },
  { method: "get", url: "/product/byId/1" },
  { method: "get", url: "/product/byName/Test%20Product" },

  // Category APIs
  { method: "get", url: "/category/getAll" },
  { method: "get", url: "/category/byId/1" },
  { method: "get", url: "/category/byName/Test%20Category" },

  // Order APIs
  { method: "get", url: "/order/getAll" },
  { method: "get", url: "/order/ById/1" },

  // Review APIs
  { method: "get", url: "/review/getAll" },
  { method: "get", url: "/review/ById/1" },

  // Cart APIs
  { method: "get", url: "/cart/getitem/1" },
];

async function runTests() {
  for (const test of tests) {
    try {
      const response = await axios({ ...test, baseURL });
      console.log(`GET ${test.url} - Success (Status: ${response.status})`);
    } catch (error) {
      console.error(
        `GET ${test.url} - Failed:`,
        error.response
          ? `Status: ${error.response.status}, Message: ${
              error.response.data.message || error.response.data
            }`
          : error.message
      );
    }
  }
}

runTests();
