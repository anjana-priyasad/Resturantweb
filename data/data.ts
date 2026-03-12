
export interface Dish {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  chef: string;
  chefQuote: string;
  likes: number;
  image: string;
  video: string;
}

export const dishes: Dish[] = [
  {
    id: 1,
    title: "LOTEK PERKEDEL",
    subtitle: "#1 Most loved dish",
    description: "A traditional Indonesian salad with peanut dressing, served with crispy corn fritters (Perkedel) and fresh vegetables.",
    rating: 4.9,
    chef: "Chef Feny",
    chefQuote: "Passion regarding food",
    likes: 98,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    video: "#",
  },
  {
    id: 2,
    title: "LAMB STEAK",
    subtitle: "#2 Trending now",
    description: "Succulent grilled lamb steak seasoned with rosemary and garlic, served with a side of roasted potatoes and mint sauce.",
    rating: 4.8,
    chef: "Chef Ramsay",
    chefQuote: "Perfection on a plate",
    likes: 124,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1000",
    video: "#",
  },
  {
    id: 3,
    title: "SALAD BOWL",
    subtitle: "#3 Healthy Choice",
    description: "Fresh mix of organic greens, cherry tomatoes, avocado, and quinoa with a zesty lemon vinaigrette.",
    rating: 4.7,
    chef: "Chef Sarah",
    chefQuote: "Eat fresh, live well",
    likes: 85,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
    video: "#",
  },
  {
    id: 4,
    title: "MARTABAK MANIS",
    subtitle: "#4 Sweet Delight",
    description: "Indonesian sweet pancake filled with chocolate, cheese, and peanuts. A perfect dessert.",
    rating: 4.9,
    chef: "Chef Budi",
    chefQuote: "Sweetness in every bite",
    likes: 210,
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=1000",
    video: "#",
  },
  {
    id: 5,
    title: "NASI GORENG",
    subtitle: "#5 Classic Favorite",
    description: "Fried rice with chicken, prawns, and egg, seasoned with sweet soy sauce and spices.",
    rating: 4.8,
    chef: "Chef Tono",
    chefQuote: "Taste of tradition",
    likes: 175,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1000",
    video: "#",
  },
];
