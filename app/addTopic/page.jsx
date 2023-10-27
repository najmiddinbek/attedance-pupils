"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [school, setSchool] = useState("");
    const [telNumber, setTelNumber] = useState("");
    const [darsQoldirish, setDarsQoldirish] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !school || !telNumber || !darsQoldirish) {
            alert("Barcha maydonlarni to`ldiring...");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description, school, telNumber, darsQoldirish }),
            });

            if (res.ok) {
                router.push("/simplePage");
            } else {
                throw new Error("Failed to create a topic");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Ism"
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Familiya"
            />
            <input
                onChange={(e) => setSchool(e.target.value)}
                value={school}
                className="border border-slate-500 px-8 py-2"
                type="number"
                placeholder="School"
            />
            <input
                onChange={(e) => setTelNumber(e.target.value)}
                value={telNumber}
                className="border border-slate-500 px-8 py-2"
                type="number"
                placeholder="telNumber"
            />
            <input
                onChange={(e) => setDarsQoldirish(e.target.value)}
                value={darsQoldirish}
                className="border border-slate-500 px-8 py-2"
                type="number"
                placeholder="darsQoldirish"
            />

            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
                Qo`shish
            </button>
        </form>
    );
}
