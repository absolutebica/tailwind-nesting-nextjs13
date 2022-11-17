import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div><Link href="/">MB</Link></div>
            <nav>
                <ul>
                    <li className="styles.hover-trigger"><Link href="/about">About</Link>
                        <ul className="styles.hover-target">
                            <li><Link href="/about/history">History &amp; Culture</Link></li>
                            <li><Link href="/about/facilities-distribution">Facilities &amp; Distribution</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}