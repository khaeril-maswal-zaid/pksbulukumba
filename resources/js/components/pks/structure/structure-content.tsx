import { Card } from '@/components/ui/card';
import { usePage } from '@inertiajs/react';
export default function StructureContent() {
    const { leaders } = usePage().props;
    return (
        <div>
            {/* Leadership Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {leaders.map((leader) => (
                    <Card key={leader.id} className="overflow-hidden py-0 transition-all duration-300 hover:shadow-md">
                        <div className="flex h-full flex-col md:flex-row">
                            <div className="relative h-full w-full md:h-auto md:w-1/3">
                                <img src={leader.image || '/placeholder.svg'} alt={leader.name} className="h-full object-cover object-top" />
                            </div>
                            <div className="p-6 md:w-2/3">
                                <h3 className="mb-1 text-xl font-bold">{leader.name}</h3>
                                <p className="mb-3 text-[#F47C20]">{leader.position}</p>
                                <p className="text-sm text-gray-600">{leader.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">&laquo; Sebelumnya</button>
                    <button className="rounded-md bg-[#F47C20] px-4 py-2 text-white">1</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">2</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Selanjutnya &raquo;</button>
                </div>
            </div>
        </div>
    );
}
