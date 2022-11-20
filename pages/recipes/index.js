import Head from 'next/head';
import Recipe from '../../components/recipe'

const RECIPE_API_PATH = 'https://api.martinbros.com/public/api/culinary-recipes/keyword/Beef';

export default function Recipes({recipes}) {
 
  if (!recipes) return <div>Loading...</div>

  return (
    <>
    <Head>
        <title>MB - Beef Recipes</title>
        <meta name="description" content="This is a list of MB Beef Recipes" />
        <meta name="keywords" content="Beef recipes, best beef recipes" />
    </Head>

    <div className="container-content">
        <h1>Beef Recipes</h1>
        <ul className="flex flex-wrap">
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} props={recipe} />
            ))}
        </ul>
    </div>
    </>
  )
}

export async function getServerSideProps({req, res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, state-while-revalidate=59'
    )
    
    const response = await fetch(RECIPE_API_PATH);
    const recipes = await response.json();
    return {
        props: {
            recipes
        }
    }
}