import Image from 'next/image'
import Link from 'next/link'

export default function Recipe({props}) {

  return (
    <li className="md:w-1/3 w-full p-2">
      <Link href="/recipes/recipedetail/[props.id]" as={`/recipes/recipedetail/${props.id}`} className="flex space-x-3 h-full">

        <div className="flex-1 card card-side bg-base-100 border hover:bg-slate-50 hover:border-slate-300 ">
            <figure className="relative w-[80px] h-[80px]">
                <Image
                    fill={true}
                    src={`https://cdn.martinbros.com/culinaryrecipes/${props.recipePhotoThumb}`} 
                    alt={props.recipeName}
                    sizes="80px"
                />
            </figure>
            <div className="card-body pl-3 py-0 flex-1 justify-center">
                <div className="py-3">{props.recipeName}</div>
            </div>
        </div>
      </Link>
    </li>
  )
}