const stats = [
    { id: 1, name: 'History in market', value: '10 years' },
    { id: 2, name: 'Products Count', value: '1,000+' },
    { id: 3, name: 'Our Orders', value: '2,500+' },
]
export default function Stats() {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-6 lg:px-2 mt-24">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our company in numbers
                    </p>
                </div>
            </div>
            
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">

                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col text-center justify-center items-center shadow-lg relative mb-3 rounded-3xl border bg-white/70  py-5 text-left shadow lg:px-12">
                            <span className="underline underline-offset-8 relative text-4xl font-bold text-indigo-500 leading-none">{stat.value}</span>
                            <p className="relative text-lg mt-5 text-gray-800">{stat.name}</p>
                          </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
