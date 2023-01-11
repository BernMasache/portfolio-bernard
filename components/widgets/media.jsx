/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
    {
        name: 'Video Coverage',
        description:
            'Any activity require video content creation, phynocut media is there for it',
    },
    {
        name: 'Audio Production',
        description: 'Producing, mixing and mastering'
    },
    {
        name: 'Graphic designing',
        description:
            'Poster and artworks designs or all sizes',
    },
]

export default function MediaPage() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                    <div>
                        <div className="border-b border-gray-200 pb-10">
                            <h2 className="font-medium text-gray-500">Photography</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Graphic Designs</p>
                        </div>

                        <dl className="mt-10 space-y-10">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div>
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src="./assets/profile/JECOM service.jpg"
                                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="./assets/profile/IMG_0224-Edit-2.jpg"
                                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="./assets/profile/IMG_0202.jpg"
                                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="./assets/profile/IMG_0201.jpg"
                                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="./assets/profile/IMG_0107-Edit.jpg"
                                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
