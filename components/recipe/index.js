import Image from 'next/image'
import Link from 'next/link'

export default function Recipe({props}) {
  return (
    <li className="w-1/4 m-3">
      <Link href="/recipes/recipedetail/[props.id]" as={`/recipes/recipedetail/${props.id}`} className="flex space-x-3">
        <div className="">
            <Image
                width={100}
                height={100}
                src={`https://cdn.martinbros.com/culinaryrecipes/${props.recipePhotoThumb}`} 
                alt={props.recipeName} 
            />
        </div>
        <span>{props.recipeName}</span>
      </Link>
    </li>
  )
}
