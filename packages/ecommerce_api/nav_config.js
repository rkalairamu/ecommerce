const config = {
  headerConfig: [
    {
      clothing: {
        path: "/shopping/clothing",
        title: "Clothing",
      },
    },
    {
      electronics: {
        path: "/shopping/electronics",
        title: "Electronics",
      },
    },
    {
      mobiles: {
        path: "/shopping/mobiles",
        title: "Mobiles",
      },
    },
  ],
  leftNavConfig: [
    {
      profile: {
        path: "/profile",
        title: "Profile",
      },
    },
    {
      cart: {
        path: "/cart",
        title: "Cart",
      },
    },
    {
      orders: {
        path: "/orders",
        title: "Orders",
      },
    },
  ],
  secondaryConfig: [
    {
      checkout: {
        path: "/cart/checkout",
        title: "Checkout",
      },
    },
    {
      payment: {
        path: "/orders/payment",
        title: "Payment",
      },
    },
  ],
};

module.exports = config;
