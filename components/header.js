import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="flex-1">
                    <Link href="/" className="normal-case text-xl text-yellow-400 block">MB</Link>
                </div>
                <nav className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <Link href="/about">About</Link>
                        <ul className="p-2 bg-base-100 right-0">
                            <li><Link href="/about/history">History &amp; Culture</Link></li>
                            <li><Link href="/about/facilities-distribution">Facilities &amp; Distribution</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/recipes">Recipes</Link>
                    </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}