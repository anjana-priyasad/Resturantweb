
export interface Ingredient {
  name: string;
  quantity: string;
  emoji: string;
}

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
  prepTime: string;
  calories: string;
  badge: { label: string; icon: string; color: string };
  ingredients: Ingredient[];
}

export const dishes: Dish[] = [
  {
    id: 1,
    title: "LOTEK PERKEDEL",
    subtitle: "#1 Most loved dish",
    description:
      "A traditional Indonesian salad with peanut dressing, served with crispy corn fritters (Perkedel) and fresh vegetables.",
    rating: 4.9,
    chef: "Chef Feny",
    chefQuote: "Passion regarding food",
    likes: 98,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    video: "#",
    prepTime: "25 Mins",
    calories: "320 Kcal",
    badge: { label: "Vegan", icon: "🌱", color: "from-emerald-500/30 to-emerald-600/10 border-emerald-500/40 text-emerald-300" },
    ingredients: [
      { name: "Mixed Greens", quantity: "150g", emoji: "🥬" },
      { name: "Peanut Sauce", quantity: "80ml", emoji: "🥜" },
      { name: "Corn Fritters", quantity: "4 pcs", emoji: "🌽" },
      { name: "Tofu", quantity: "100g", emoji: "🧆" },
      { name: "Bean Sprouts", quantity: "60g", emoji: "🌿" },
      { name: "Boiled Eggs", quantity: "2 pcs", emoji: "🥚" },
      { name: "Lontong Rice", quantity: "200g", emoji: "🍚" },
    ],
  },
  {
    id: 2,
    title: "LAMB STEAK",
    subtitle: "#2 Trending now",
    description:
      "Succulent grilled lamb steak seasoned with rosemary and garlic, served with a side of roasted potatoes and mint sauce.",
    rating: 4.8,
    chef: "Chef Ramsay",
    chefQuote: "Perfection on a plate",
    likes: 124,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1000",
    video: "#",
    prepTime: "40 Mins",
    calories: "680 Kcal",
    badge: { label: "Gluten-Free", icon: "🌾", color: "from-amber-500/30 to-amber-600/10 border-amber-500/40 text-amber-300" },
    ingredients: [
      { name: "Lamb Rack", quantity: "300g", emoji: "🥩" },
      { name: "Rosemary", quantity: "3 sprigs", emoji: "🌿" },
      { name: "Garlic", quantity: "4 cloves", emoji: "🧄" },
      { name: "Roasted Potatoes", quantity: "200g", emoji: "🥔" },
      { name: "Mint Sauce", quantity: "50ml", emoji: "🍃" },
      { name: "Olive Oil", quantity: "30ml", emoji: "🫒" },
      { name: "Black Pepper", quantity: "1 tsp", emoji: "🫙" },
    ],
  },
  {
    id: 3,
    title: "SALAD BOWL",
    subtitle: "#3 Healthy Choice",
    description:
      "Fresh mix of organic greens, cherry tomatoes, avocado, and quinoa with a zesty lemon vinaigrette.",
    rating: 4.7,
    chef: "Chef Sarah",
    chefQuote: "Eat fresh, live well",
    likes: 85,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
    video: "#",
    prepTime: "15 Mins",
    calories: "290 Kcal",
    badge: { label: "Keto", icon: "⚡", color: "from-cyan-500/30 to-cyan-600/10 border-cyan-500/40 text-cyan-300" },
    ingredients: [
      { name: "Mixed Greens", quantity: "120g", emoji: "🥗" },
      { name: "Cherry Tomatoes", quantity: "80g", emoji: "🍅" },
      { name: "Avocado", quantity: "1 pc", emoji: "🥑" },
      { name: "Quinoa", quantity: "100g", emoji: "🌾" },
      { name: "Lemon Juice", quantity: "2 tbsp", emoji: "🍋" },
      { name: "Feta Cheese", quantity: "40g", emoji: "🧀" },
      { name: "Olive Oil", quantity: "20ml", emoji: "🫒" },
    ],
  },
  {
    id: 4,
    title: "MARTABAK MANIS",
    subtitle: "#4 Sweet Delight",
    description:
      "Indonesian sweet pancake filled with chocolate, cheese, and peanuts. A perfect dessert.",
    rating: 4.9,
    chef: "Chef Budi",
    chefQuote: "Sweetness in every bite",
    likes: 210,
    image:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=1000",
    video: "#",
    prepTime: "30 Mins",
    calories: "520 Kcal",
    badge: { label: "Bestseller", icon: "🏆", color: "from-yellow-500/30 to-yellow-600/10 border-yellow-500/40 text-yellow-300" },
    ingredients: [
      { name: "Flour", quantity: "250g", emoji: "🌾" },
      { name: "Chocolate Spread", quantity: "80g", emoji: "🍫" },
      { name: "Cheddar Cheese", quantity: "60g", emoji: "🧀" },
      { name: "Peanuts", quantity: "50g", emoji: "🥜" },
      { name: "Butter", quantity: "40g", emoji: "🧈" },
      { name: "Eggs", quantity: "2 pcs", emoji: "🥚" },
      { name: "Condensed Milk", quantity: "60ml", emoji: "🍶" },
    ],
  },
  {
    id: 5,
    title: "NASI GORENG",
    subtitle: "#5 Classic Favorite",
    description:
      "Fried rice with chicken, prawns, and egg, seasoned with sweet soy sauce and spices.",
    rating: 4.8,
    chef: "Chef Tono",
    chefQuote: "Taste of tradition",
    likes: 175,
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=1000",
    video: "#",
    prepTime: "20 Mins",
    calories: "450 Kcal",
    badge: { label: "Spicy 🌶️", icon: "🔥", color: "from-red-500/30 to-red-600/10 border-red-500/40 text-red-300" },
    ingredients: [
      { name: "Jasmine Rice", quantity: "300g", emoji: "🍚" },
      { name: "Chicken", quantity: "150g", emoji: "🍗" },
      { name: "Prawns", quantity: "100g", emoji: "🍤" },
      { name: "Eggs", quantity: "2 pcs", emoji: "🥚" },
      { name: "Sweet Soy Sauce", quantity: "3 tbsp", emoji: "🫙" },
      { name: "Shallots", quantity: "4 pcs", emoji: "🧅" },
      { name: "Chili Paste", quantity: "2 tbsp", emoji: "🌶️" },
    ],
  },
];
