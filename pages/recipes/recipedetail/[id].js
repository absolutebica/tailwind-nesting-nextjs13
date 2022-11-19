import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function RecipeDetail() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `https://api.martinbros.com/public/api/culinary-recipes/recipe/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  const keywords = Object.keys(data.recipeKeywords).map((keyword) => data.recipeKeywords[keyword].recipeKeyword).join(", ");

  return (
    <>
    <Head>
        <title>MB - Beef Recipes - {data.recipeName}</title>
        <meta name="description" content={`Description for ${data.recipeName}`} />
        <meta name="keywords" content={keywords} />
    </Head>

    <div className="container-content">
        <div className="flex space-x-3">
            <div className="w-auto">
            <Image 
                width={500}
                height={500}
                    src={`https://cdn.martinbros.com/culinaryrecipes/${data.recipePhoto}`} 
                    alt={data.recipeName} 
                />
            </div>
            <div>
                <h1>{data.recipeName}</h1>
                <p><strong>Keywords:</strong> {keywords}</p>
                <p>Added: {data.date}</p>
                <div dangerouslySetInnerHTML={{ __html: data.recipeDescription }}></div>
            </div>
        </div>
    </div>
    </>
  )
}