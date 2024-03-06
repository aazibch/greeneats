require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const Meal = require('@/models/Meal');

const databaseString = process.env.DB.replace(
  '<password>',
  process.env.DB_PASS
);

mongoose
  .connect(databaseString)
  .then(() => console.log('Connected to database...'));

const meals = [
  {
    title: 'Walnut and Lentil Bolognese',
    slug: 'walnut-and-lentil-bolognese',
    image: 'walnut-and-lentil-bolognese.jpg',
    summary:
      'Indulge in a mouth-watering burger featuring a juicy beef patty and melted cheese, all nestled within a soft bun.',
    instructions: `Whether you’re a devoted vegan or simply taking a break from meat for the evening, this healthy and hearty bolognese recipe is sure to satisfy. Here’s how to make it:
  
      1. Sauté carrots, celery, and onions.
      
      2. Add the walnuts, lentils, jar of marinara sauce, and a pinch of salt with water.
      
      3. Simmer! Cook low and slow—similar to traditional bolognese—until the lentils are tender.
      
      4. Blend! For a creamier texture, consider blending a portion of the bolognese sauce.
      
      5. Serve! Toss with your preferred pasta. For an added touch, top it off with a sprinkle of Parmesan cheese if desired.
      `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com'
  },
  {
    title: 'Vegetable Soup',
    slug: 'vegetable-soup',
    image: 'vegetable-soup.jpg',
    summary:
      'Delight in a classic vegetable soup recipe, perfect for autumn days and chilly winter nights. Start with our recipe, then customize with your favorite veggies!',
    instructions: `1. Sauté onions and celery in a large stockpot until fragrant and translucent. Take your time—it’s where the real flavor begins.
  
      2. Add garlic, zucchini, and green beans, sautéing briefly to deepen their flavors.
  
      3. Bring the pot to a boil after adding the remaining ingredients.
  
      4. Simmer over low heat with the pot covered for approximately thirty minutes, or until the vegetables are tender and the soup reaches your desired consistency.
  
      5. Serve hot, garnished with freshly grated Parmigiano and fresh basil.
      `,
    creator: 'Max Anderson',
    creator_email: 'max@example.com'
  },
  {
    title: 'Huevos Rancheros',
    slug: 'huevos-rancheros',
    image: 'huevos-rancheros.jpg',
    summary:
      'Savor runny, fried eggs atop seasoned beans, nestled on warm corn tortillas, enhanced with a medley of condiments. Homemade huevos rancheros at your fingertips!',
    instructions: `You've got breakfast under control. Now, who's making the margs? Here’s how to whip up these quick and easy huevos rancheros:
  
      1. Fry up eggs to your liking—sunny side up or over easy works!
  
      2. Simmer black beans in salsa.
  
      3. Warm tortillas.
  
      4. Assemble! Layer tortilla, beans, and egg.
  
      5. Garnish to your heart’s content! Amp it up with extra salsa, avocado, cojita cheese, cilantro, and hot sauce.
      `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com'
  },
  {
    title: 'Instant Pot Mac and Cheese',
    slug: 'instant-pot-mac-and-cheese',
    image: 'instant-pot-mac-and-cheese.jpg',
    summary:
      'Discover a rich, creamy, homemade Instant Pot mac and cheese recipe that’s both easier and tastier than the boxed version!',
    instructions: `We still can’t believe this recipe is ready in about 10 minutes. But it is! Because apparently, that’s the future we’re living in. And a future with homemade mac and cheese ready in 10 minutes sounds pretty good to us.
  
      1. Add pasta, water, and salt to the Instant Pot.
  
      2. Lock the lid and pressure cook for 4 minutes.
  
      3. Quick release the steam to prevent overcooking.
  
      4. Stir in the cheeses and heavy cream after opening the lid.
  
      5. Dig in! It’s that simple.
      `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com'
  },
  {
    title: 'Perfect Grilled Cheese',
    slug: 'perfect-grilled-cheese',
    image: 'perfect-grilled-cheese.jpg',
    summary:
      'Experience melted cheese nestled between perfectly toasted golden bread slices. We’ve perfected the classic grilled cheese sandwich!',
    instructions: `1. In a small bowl, thoroughly mix mayonnaise and butter. Spread this mixture on one side of each bread slice. Add 1/2 cup of grated cheese to one slice and cover it with the other slice.
  
      2. Place the prepared sandwich in a cold cast iron skillet. Turn the heat to low and watch carefully to prevent burning. Flip when one side turns golden brown, repeating for the other side. This process should take approximately 8-10 minutes per side—don’t rush it for the perfect crispy crust.
  
      3. Once both sides are golden brown, transfer to a plate and serve!
      `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com'
  },
  {
    title: 'Vegetarian Meatballs',
    slug: 'vegetarian-meatballs',
    image: 'vegetarian-meatballs.jpg',
    summary:
      'Enjoy savory, meaty vegetarian meatballs crafted from lentils—a delicious alternative to traditional meatballs.',
    instructions: `1. Preheat oven to 400°F. Toss tomato halves with 1 tsp Italian seasoning, 1 tsp salt, and 1/4 cup olive oil. Arrange tomatoes cut side up on a large baking sheet.
  
      2. If using dried lentils, boil in a saucepan until tender but not mushy, then drain and set aside.
  
      3. Pulse mushrooms in a food processor until pea-sized.
  
      4. Sauté onions, garlic, and mushrooms until moisture evaporates and garlic is fragrant. Combine with lentils in a food processor and pulse until blended.
  
      5. In a large bowl, mix mushroom-lentil mixture with bread crumbs, Italian seasoning, cayenne, salt, eggs, and Parmesan cheese.
  
      6. Roll mixture into balls and place on a baking sheet. Lightly brush with olive oil.
  
      7. Bake meatballs and tomatoes for 30 minutes, flipping meatballs halfway through.
  
      8. Toss roasted tomatoes and meatballs with cooked spaghetti, olive oil, fresh basil, and Parmesan cheese before serving.
      `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com'
  },
  {
    title: 'Coconut Curry Ramen',
    slug: 'coconut-curry-ramen',
    image: 'coconut-curry-ramen.jpg',
    summary:
      'Experience a rich, vegetable-filled coconut curry soup with instant ramen noodles—a quick and easy vegetarian dinner option.',
    instructions: `Alright, hungry folks, let’s get cooking! Here’s how to whip up a luxurious, veggie-packed, creamy coconut curry soup with instant ramen noodles:
  
      1. Create aromatic magic by warming a mixture of red curry paste, curry powder, sesame oil, garlic, and ginger.
  
      2. Transform that aromatic blend into a comforting soup base by adding stock, coconut milk, green onions, instant noodles (discard the spice packet), mushrooms, lime juice, baby bok choy, and salt.
  
      3. Bring it to a quick boil, adding shelled edamame for a couple of minutes.
  
      4. Divide into bowls and enjoy! For a non-vegan twist, top with perfectly cooked six-minute eggs.
      `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com'
  }
];

const importData = async () => {
  try {
    await Meal.create(meals);
    console.log('Data loaded.');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
}
