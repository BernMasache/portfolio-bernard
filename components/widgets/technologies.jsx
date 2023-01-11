import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
]

const frameworks = [


    {
        name: 'React',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
        url: "./assets/logos/React-icon.svg.png"
    },
    {
        name: 'NextJs',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
        url: "./assets/logos/nextjs.png"
    },
    {
        name: 'AngularJs',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
        url: "./assets/logos/angular.jpg"
    },
    {
        name: 'Laravel',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
        url: "./assets/logos/laravel.png"
    },
    {
        name: 'ExpressJs',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
        url: "./assets/logos/express.png"
    },
    {
        name: 'Sequelize',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
        url: "./assets/logos/sequelizejs.png"
    },
    {
        name: 'Loopback-4',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
        url: "./assets/logos/loopback.png"
    },
    {
        name: 'Kotlin',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
        url: "./assets/logos/kotlin.png"
    },
]
export default function TechnologiesPage() {
    return (
        <div className="relative mt-16">
            <div className="flex justify-center w-full">
                
                <span className="isolate inline-flex rounded-md shadow-sm">
                    <button
                        type="button"
                        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        Javascript
                    </button>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        Java
                    </button>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        Python
                    </button>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        PHP
                    </button>
                </span>
            </div>
            <div className="bg-white py-4 sm:py-4 lg:py-4">
                <div className="relative mb-16">
                    <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Technologies
                    </h2>
                   
                </div>
                <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 mb-8">

                    <dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-5">
                        {frameworks.map((feature) => (
                            <div key={feature.name}>
                                <dt>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
                                        {/* <feature.icon className="h-8 w-8" aria-hidden="true" /> */}
                                        <img src={feature.url} alt="" className='object-cover h-12 w-12 rounded-xl' />
                                    </div>
                                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{feature.name}</p>
                                </dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>


        </div>
    )
}
