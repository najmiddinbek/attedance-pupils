import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <Link href={"/home"}>
                AdminPanel
            </Link>
            <Link href={"/addTopic"}>
                O`quvchi qo`shish
            </Link>
            <Link href={"/"}>
                Barcha O`quvchilar
            </Link>
            <Link href={"/register"}>
                Ro`yxatdan o`tish
            </Link>
            <Link href={"/login"}>
                Login
            </Link>
        </nav>
    );
}
