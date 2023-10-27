import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Remove from "../../components/RemoveBtn";

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

export default async function TopicsList() {
    const { topics } = await getTopics();

    return (
        <>
            {topics.map((t) => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start" key={t._id}>
                    <div>
                        <h1>Ism: {t.title}</h1>
                        <h1>Familiya: {t.description}</h1>
                        <h1>Maktab: {t.school}</h1>
                        <h1>Telefon raqam: {t.telNumber}</h1>
                        <h1>Dars qoldirish kunlari: {t.darsQoldirish}</h1>
                        <h1>Malumot qo`shilgan vaqt: {new Date(t.createdAt).toLocaleString()}</h1>
                    </div>
                    <div className="flex gap-2">
                        <Remove id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

