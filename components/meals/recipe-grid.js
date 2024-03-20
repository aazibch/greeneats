import RecipeCard from './recipe-card';

export default function RecipeGrid({ recipes }) {
  console.log('recipes', recipes);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map((recipe) => {
        return (
          <div key={recipe._id}>
            <RecipeCard {...recipe} />
          </div>
        );
      })}
    </div>
  );
}
