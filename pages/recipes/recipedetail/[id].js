import Head from 'next/head'
import Image from 'next/image'

const RECIPE_API_POST_PATH = 'https://api.martinbros.com/public/api/culinary-recipes/recipe/';

export default function RecipeDetail({recipe}) {
  if (!recipe) return <div>Loading...</div>

  const keywords = Object.keys(recipe.recipeKeywords).map((keyword) => recipe.recipeKeywords[keyword].recipeKeyword).join(", ");

  return (
    <>
    <Head>
        <title>MB - Beef Recipes - {recipe.recipeName}</title>
        <meta name="description" content={`Description for ${recipe.recipeName}`} />
        <meta name="keywords" content={keywords} />
    </Head>

    <div className="container-content">
        <div className="flex space-x-3">
            <div className="w-auto">
            <Image 
                width={500}
                height={500}
                    src={`https://cdn.martinbros.com/culinaryrecipes/${recipe.recipePhoto}`} 
                    alt={recipe.recipeName} 
                />
            </div>
            <div>
                <h1>{recipe.recipeName}</h1>
                <p><strong>Keywords:</strong> {keywords}</p>
                <p>Added: {recipe.date}</p>
                <div dangerouslySetInnerHTML={{ __html: recipe.recipeDescription }}></div>
            </div>
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps({params, res}) {
  res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, state-while-revalidate=59'
  )
  
  const response = await fetch(`${RECIPE_API_POST_PATH}${params.id}`);
  const recipe = await response.json();

  if (!recipe) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
      props: {
          recipe
      }
  }
}