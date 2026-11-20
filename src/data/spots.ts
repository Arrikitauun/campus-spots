export type Category = "sight" | "food" | "park" | "museum" | "campus";

export interface Spot {
  id: string;
  name: string;
  category: Category;
  description: string;
  latitude: number;
  longitude: number;
}

export const CATEGORY_EMOJI: Record<Category, string> = {
  sight: "🏰",
  food: "🥪",
  park: "🌳",
  museum: "🏛️",
  campus: "🎓",
};

export const SPOTS: Spot[] = [
  {
    id: "wawel",
    name: "Wawel Royal Castle",
    category: "sight",
    description: "The castle of Polish kings on a hill above the Vistula. Do not miss the dragon at the foot of the hill.",
    latitude: 50.054,
    longitude: 19.9354,
  },
  {
    id: "rynek",
    name: "Main Market Square",
    category: "sight",
    description: "One of the largest medieval squares in Europe, with the Cloth Hall in the middle and St Mary's Basilica.",
    latitude: 50.0617,
    longitude: 19.9373,
  },
  {
    id: "plac-nowy",
    name: "Plac Nowy",
    category: "food",
    description: "The heart of Kazimierz. Famous for zapiekanki, long open baguettes sold from the round building.",
    latitude: 50.0513,
    longitude: 19.9447,
  },
  {
    id: "planty",
    name: "Planty Park",
    category: "park",
    description: "A ring of green around the Old Town, where the city walls once stood. Perfect for a walk between classes.",
    latitude: 50.0614,
    longitude: 19.933,
  },
  {
    id: "kopiec",
    name: "Kościuszko Mound",
    category: "park",
    description: "An artificial hill with one of the best views of the city. On a clear day you can see the Tatra mountains.",
    latitude: 50.0549,
    longitude: 19.8933,
  },
  {
    id: "schindler",
    name: "Schindler's Factory",
    category: "museum",
    description: "A museum about Kraków during the Second World War, in the factory of Oskar Schindler.",
    latitude: 50.0474,
    longitude: 19.9614,
  },
  {
    id: "pk",
    name: "Cracow University of Technology",
    category: "campus",
    description: "The main campus on Warszawska Street. Your second home this semester.",
    latitude: 50.0711,
    longitude: 19.9439,
  },
];
