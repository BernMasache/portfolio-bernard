/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FooterComponent from '../widgets/footer'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainLayout({ children }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <div className="top-0 fixed z-10 w-full">


                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                    <div className="flex px-4 pt-5 pb-2">
                                        <button
                                            type="button"
                                            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <Tab.Group as="div" className="mt-2">

                                        <Tab.Panels as={Fragment}>

                                            <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                                <div className="flow-root">
                                                    <Link href="/about" className="-m-2 block p-2 font-medium text-gray-900">
                                                        About
                                                    </Link>
                                                </div>
                                                <div className="flow-root">
                                                    <Link href="/contact" className="-m-2 block p-2 font-medium text-gray-900">
                                                        Contact
                                                    </Link>

                                                </div>

                                                <div className="flow-root">
                                                    <Link href="/projects" className="-m-2 block p-2 font-medium text-gray-900">
                                                        Projects
                                                    </Link>
                                                </div>
                                                <div className="flow-root">
                                                    <Link href="/media" className="-m-2 block p-2 font-medium text-gray-900">
                                                        Media
                                                    </Link>
                                                </div>
                                                <div className="flow-root">
                                                    <Link href="/technologies" className="-m-2 block p-2 font-medium text-gray-900">
                                                        Technologies
                                                    </Link>
                                                </div>


                                            </div>
                                        </Tab.Panels>
                                    </Tab.Group>
                                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                        {/* Currency selector */}
                                        <form>
                                            <div className="inline-block">

                                                <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                                                    bernardmasache@gmail.com
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <header className="relative">
                    <nav aria-label="Top">
                        {/* Top navigation */}
                        <div className="bg-gray-900 p-4">
                            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                                {/* Currency selector */}
                                <form>
                                    <div>

                                        <div className="group relative -ml-2 text-white rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                                            Bernard Masache Portfolio
                                        </div>
                                    </div>
                                </form>

                                {/* <div className="flex items-center space-x-6">

                                    <Link href="/profile" className="text-sm font-medium text-white hover:text-gray-100">
                                        bernardmasache@gmail.com
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        {/* Secondary navigation */}
                        <div className="bg-white">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    {/* Logo (lg+) */}
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                        <Link href="/profile">
                                            <img
                                                className="h-16 w-16 rounded-full p-2"
                                                src="./assets/profile/profile.jpg"
                                                alt=""
                                            />
                                        </Link>
                                    </div>



                                    {/* Mobile menu and search (lg-) */}
                                    <div className="flex flex-1 items-center lg:hidden">
                                        <button
                                            type="button"
                                            className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setOpen(true)}
                                        >
                                            <span className="sr-only">Open menu</span>
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                        </button>


                                    </div>

                                    {/* Logo (lg-) */}
                                    <Link href="/profile" className="lg:hidden">
                                        <img
                                            src="./assets/profile/profile.jpg"
                                            alt=""
                                            className="h-26 w-16 rounded-full p-2"
                                        />
                                    </Link>

                                    <div className="flex flex-1 items-center justify-end">
                                        <Link href="/about" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                                            {/* about */}
                                            About
                                        </Link>

                                        <div className="flex items-center lg:ml-8">
                                            {/* contact */}

                                            <Link href="/contact" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                                                Contact
                                            </Link>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            <div className="h-24 w-full"></div>
            <main>
                {children}
                <FooterComponent />
            </main>


        </div>
    )
}
