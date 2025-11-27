const recipes = [
  {
    title: "Masala Maggi Stir-Fry",
    mood: "quick",
    diet: "veg",
    time: "10 min",
    difficulty: "Easy",
    ingredients: [
      "1 packet instant noodles (Maggi etc.)",
      "1 small onion, chopped",
      "1 tomato, chopped",
      "1 small capsicum, sliced",
      "1 tsp oil or butter",
      "Noodle tastemaker + salt, chilli to taste",
      "Water as required"
    ],
    steps: [
      "Heat oil in a pan and sauté onions for 1 minute.",
      "Add tomato and capsicum, cook for 2–3 minutes.",
      "Add 1 cup water and bring to a boil.",
      "Break the noodles, add to the pan along with tastemaker.",
      "Cook till water is absorbed and noodles are soft.",
      "Serve hot with extra chilli flakes if you like."
    ]
  },
  {
    title: "Grilled Chicken Wrap",
    mood: "quick",
    diet: "nonveg",
    time: "15 min",
    difficulty: "Easy",
    ingredients: [
      "2 chapati / tortillas",
      "½ cup cooked shredded chicken",
      "2 tbsp mayonnaise or hung curd",
      "Lettuce or cabbage, shredded",
      "Sliced onion & tomato",
      "Salt, pepper, chilli flakes"
    ],
    steps: [
      "In a bowl, mix chicken with mayo, salt, pepper and chilli flakes.",
      "Warm chapatis / tortillas on tawa.",
      "Place lettuce, chicken mix, onion and tomato on each wrap.",
      "Roll tightly and toast on tawa for 1–2 minutes.",
      "Cut in half and serve."
    ]
  },
  {
    title: "Veggie Poha",
    mood: "healthy",
    diet: "veg",
    time: "15 min",
    difficulty: "Easy",
    ingredients: [
      "1 cup poha (flattened rice)",
      "1 small potato, diced",
      "¼ cup peas",
      "1 onion, chopped",
      "1 green chilli, chopped",
      "½ tsp mustard seeds, curry leaves",
      "Turmeric, salt, lemon, coriander"
    ],
    steps: [
      "Wash poha in a strainer and keep aside.",
      "Heat oil, add mustard seeds, curry leaves and green chilli.",
      "Add onion and potato, cook till soft, then add peas.",
      "Add turmeric and salt, mix well.",
      "Add soaked poha, mix gently and cook 2–3 minutes.",
      "Turn off gas, squeeze lemon and garnish with coriander."
    ]
  },
  {
    title: "Creamy Garlic Pasta",
    mood: "comfort",
    diet: "veg",
    time: "20 min",
    difficulty: "Medium",
    ingredients: [
      "1 cup pasta (any shape)",
      "1 tbsp butter",
      "3–4 garlic cloves, finely chopped",
      "½ cup milk + 2 tbsp cream (optional)",
      "2 tbsp grated cheese",
      "Salt, pepper, chilli flakes, oregano"
    ],
    steps: [
      "Boil pasta in salted water till al dente, then strain.",
      "In a pan, melt butter and sauté garlic for 30 seconds.",
      "Add milk (and cream if using), stir till slightly thick.",
      "Add cheese, salt, pepper, oregano and chilli flakes.",
      "Mix in boiled pasta and coat well with the sauce.",
      "Serve hot with extra cheese on top."
    ]
  },
  {
    title: "Egg Bhurji Toast",
    mood: "comfort",
    diet: "nonveg",
    time: "15 min",
    difficulty: "Easy",
    ingredients: [
      "2 eggs",
      "1 small onion, chopped",
      "1 tomato, chopped",
      "1 green chilli, chopped",
      "2–3 bread slices",
      "Salt, chilli powder, coriander"
    ],
    steps: [
      "Heat oil in a pan and sauté onion and chilli.",
      "Add tomato and cook till soft.",
      "Beat eggs with salt and chilli powder, pour into pan.",
      "Scramble till cooked, garnish with coriander.",
      "Toast bread and serve topped with bhurji."
    ]
  },
  {
    title: "Rainbow Fruit Bowl",
    mood: "healthy",
    diet: "veg",
    time: "8 min",
    difficulty: "Very Easy",
    ingredients: [
      "1 banana, sliced",
      "1 apple, chopped",
      "½ cup grapes",
      "½ cup pomegranate",
      "Honey / jaggery syrup",
      "Chaat masala or cinnamon (optional)"
    ],
    steps: [
      "Add all chopped fruits to a big bowl.",
      "Drizzle a little honey or jaggery syrup.",
      "Sprinkle chaat masala or cinnamon if you like.",
      "Mix gently and serve chilled."
    ]
  }
];

// DOM elements
const moodSelect = document.getElementById("mood");
const dietSelect = document.getElementById("diet");
const generateBtn = document.getElementById("generateBtn");
const anotherBtn = document.getElementById("anotherBtn");
const recipeCard = document.getElementById("recipeCard");
const recipeTitle = document.getElementById("recipeTitle");
const recipeMeta = document.getElementById("recipeMeta");
const ingredientsList = document.getElementById("ingredientsList");
const stepsList = document.getElementById("stepsList");

function filterRecipes() {
  const mood = moodSelect.value;
  const diet = dietSelect.value;

  return recipes.filter(r => {
    const moodMatch = mood === "any" || r.mood === mood;
    const dietMatch = diet === "any" || r.diet === diet;
    return moodMatch && dietMatch;
  });
}

function getRandomRecipe(list) {
  if (list.length === 0) return null;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function renderRecipe(recipe) {
  if (!recipe) {
    recipeTitle.textContent = "No recipe found 😢";
    recipeMeta.textContent = "Try changing your filters to 'Any'.";
    ingredientsList.innerHTML = "";
    stepsList.innerHTML = "";
    recipeCard.classList.remove("hidden");
    return;
  }

  recipeTitle.textContent = recipe.title;
  recipeMeta.textContent =
    `Mood: ${capitalize(recipe.mood)} • Diet: ${recipe.diet === "veg" ? "Vegetarian" : "Non-Veg"} • ` +
    `Time: ${recipe.time} • Difficulty: ${recipe.difficulty}`;

  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
  });

  stepsList.innerHTML = "";
  recipe.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  recipeCard.classList.remove("hidden");
}

function generateRecipe() {
  const list = filterRecipes();
  const recipe = getRandomRecipe(list);
  renderRecipe(recipe);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

generateBtn.addEventListener("click", generateRecipe);
anotherBtn.addEventListener("click", generateRecipe);

// Generate one recipe by default on page load
generateRecipe();
