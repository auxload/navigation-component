export const data = [
  { label: "Home", subMenu: false, path: "/" },
  { label: "About", subMenu: false, path: "/about" },
  {
    label: "Services",
    subMenu: true,
    menu: [
      { label: "Create your product", path: "/" },
      { label: "Daily Subscription to your bussines", path: "/" },
      { label: "Other stuff to see", path: "/" },
    ],
  },
  { label: "Contact", subMenu: false, path: "/contact" },
];
