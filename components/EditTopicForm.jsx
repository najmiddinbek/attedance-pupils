"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description, school, telNumber, darsQoldirish }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newSchool, setNewSchool] = useState(school);
    const [telNumber, setNewtelNumber] = useState(telNumber);
    const [darsQoldirish, setNewdarsQoldirish] = useState(darsQoldirish);

    const router = useRouter();



    function handleSubmit(e) {
        e.preventDefault();

        try {
            fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription, newSchool, telNumber, darsQoldirish }),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed to update topic");
                    }
                    router.refresh();
                    router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
            />

            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
            />
            <input
                onChange={(e) => setNewSchool(e.target.value)}
                value={newSchool}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="School"
            />
            <input
                onChange={(e) => setNewtelNumber(e.target.value)}
                value={telNumber}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="telNumber"
            />
            <input
                onChange={(e) => setNewdarsQoldirish(e.target.value)}
                value={darsQoldirish}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="darsQoldirish"
            />

            <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Update Topic
            </button>
        </form>
    );
}
