import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    };
}

export default function cat({ params }: Props) {
    const { id } = params;

    if (id === 'kid') {
        notFound();
    }
    return (
        <div>
            <h1>Category Page {id}</h1>
        </div>
    );
}
