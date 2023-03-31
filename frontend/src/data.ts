import {Food} from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods:Food[]=[
  {
    id: "1",
    name: "Chicken Tikka Masala",
    price: 12.99,
    tags: ["Indian", "spicy", "curry"],
    favorite: true,
    stars: 5,
    imageUrl: 'assets/ChickenTikkaMasala.jpg',
    origins: ["India", "Pakistan"],
    cookTime: ["1 hour", "stovetop"]
  },
  {
    id: "2",
    name: "Margherita Pizza",
    price: 9.99,
    tags: ["Italian", "pizza"],
    favorite: false,
    stars: 4,
    imageUrl: 'assets/MargheritaPizza.jpg',
    origins: ["Italy"],
    cookTime: ["30 mins", "oven"]
  },
  {
    id: "3",
    name: "Sushi Platter",
    price: 25.99,
    tags: ["Japanese", "sushi", "seafood"],
    favorite: true,
    stars: 4.5,
    imageUrl: 'assets/SushiPlatter.png',
    origins: ["Japan"],
    cookTime: []
  },
  {
    id: "4",
    name: "Beef Burger",
    price: 8.99,
    tags: ["American", "burger"],
    favorite: false,
    stars: 3,
    imageUrl: 'assets/BeefBurger.jpg',
    origins: ["USA"],
    cookTime: ["20 mins", "grill"]
  },
  {
    id: "5",
    name: "Pesto Pasta",
    price: 10.99,
    tags: ["Italian", "pasta", "vegetarian"],
    favorite: true,
    stars: 4.5,
    imageUrl: 'assets/PestoPasta.jpg',
    origins: ["Italy"],
    cookTime: ["20 mins", "stovetop"]
  },
  {
    id: "6",
    name: "Pad Thai",
    price: 11.99,
    tags: ["Thai", "spicy", "noodles"],
    favorite: false,
    stars: 4,
    imageUrl: 'assets/PadThai.png',
    origins: ["Thailand"],
    cookTime: ["30 mins", "wok"]
  },
]

export const sample_tags:Tag[]=[
  {name:"All",count:6},
  { name: "Indian", count: 1 },
  { name: "spicy", count: 3 },
  { name: "curry", count: 1 },
  { name: "Italian", count: 3 },
  { name: "pizza", count: 1 },
  { name: "Japanese", count: 1 },
  { name: "sushi", count: 1 },
  { name: "seafood", count: 1 },
  { name: "American", count: 1 },
  { name: "burger", count: 1 },
  { name: "pasta", count: 1 },
  { name: "vegetarian", count: 1 },
  { name: "Thai", count: 1 },
  { name: "noodles", count: 1 }


]



