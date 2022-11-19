import Head from 'next/head';
import useSWR from 'swr'
import Recipe from '../../components/recipe'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR('https://api.martinbros.com/public/api/culinary-recipes/keyword/Beef', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

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
            {data.map((recipe) => (
                <Recipe key={recipe.id} props={recipe} />
            ))}
        </ul>
    </div>
    </>
  )
}
