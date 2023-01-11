import Link from "next/link"

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
const products = [
    {
        id: 1,
        name: 'Fusion',
        category: 'UI Kit',
        href: '#',
        price: '$49',
        imageSrc: './assets/profile/IMG_0202.jpg',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
    {
      id: 1,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: './assets/profile/IMG_0107-Edit.jpg',
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 1,
        name: 'Fusion',
        category: 'UI Kit',
        href: '#',
        price: '$49',
        imageSrc: './assets/profile/IMG_0201.jpg',
        imageAlt:
          'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
      },
    
      
  ]
  
  export default function PhotographyPage() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between space-x-4">
            <h2 className="text-lg font-medium text-gray-900">Media Section</h2>
            <Link href="/media" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View all
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                  {/* <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                    <div className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                      View Product
                    </div>
                  </div> */}
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  