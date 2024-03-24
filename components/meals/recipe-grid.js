import RecipeCard from './recipe-card';

export default function RecipeGrid({ recipes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
