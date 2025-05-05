'use client';
import Link from "next/link";
import menu_data from "@/data/menu-data";
import { usePathname } from "next/navigation";


export default function HeaderNavMenus() {
    const pathname = usePathname();
    return (
        <ul className="navigation">
            {menu_data.map((menu) =>
                menu.sub_menu ? (
                    <li
                        key={menu.id}
                        className={`menu-item ${menu.sub_menu && menu.sub_menu.some(sub => pathname === sub.link) ? 'menu-item-has-children active' : ''}`}
                    >
                        <Link href="#">{menu.title}</Link>
                        <ul className="sub-menu">
                            {menu.sub_menu.map((sub, i) => (
                                <li key={i} className={pathname === sub.link ? 'active' : ''}>
                                    <Link href={sub.link}>{sub.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ) : (
                    <li key={menu.id} className={pathname === menu.link ? 'active' : ''}>
                        <Link href={menu.link}>{menu.title}</Link>
                    </li>
                )
            )}
        </ul>
    )
}
