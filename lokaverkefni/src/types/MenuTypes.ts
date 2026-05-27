export type MenuItem = {
  name: string;
  price: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};
