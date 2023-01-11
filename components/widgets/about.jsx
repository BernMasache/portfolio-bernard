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
export default function AboutPage() {
    return (
        <div className="relative bg-slate-800">

            <div className="relative bg-white py-16 sm:py-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                    <div className="relative sm:py-16 lg:py-0">
                        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                            {/* Testimonial card*/}
                            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src="./assets/profile/crusade-art.jpg"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-slate-500 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-sky-100 opacity-40" />
                                <div className="relative px-8">

                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-medium text-white md:flex-grow">
                                            <svg
                                                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="relative">
                                                Graphic Designs
                                            </p>
                                        </div>

                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                        {/* Content area */}
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Software Engineering
                            </h2>
                            <div className="mt-6 space-y-6 text-gray-500">
                                <p className="text-lg">
                                    Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, PYTHON, JAVASCRIPT,PHP and SQL.
                                    Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.

                                </p>
                                <p className="text-lg">

                                </p>
                                <p className="text-base leading-7">
                                    Seeking a challenging position in a reputable organization to expand and utilize my learning, skills and knowledge. Possess excellent communication skills and have an eye for detail. Flexible to work in any environment as required.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-white py-4 sm:py-4 lg:py-4">
                <div className="relative mb-16">
                    <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Frameworks
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                        Open to learn any framework needed to perform a specific task
                    </p>
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
