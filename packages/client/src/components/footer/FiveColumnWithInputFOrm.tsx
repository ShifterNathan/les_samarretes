import React from 'react'

const FiveColumnWithInputForm = () => {
  return (
    <div className='relative bg-gray-200 text-gray-700 -mb-8 px-8 py-20 lg:py-24'>
        <div className='max-w-screen-xl mx-auto relative z-10'>
            <div className='flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12'>
                <div className='px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12'>
                    <h5 className='uppercase font-bold'>Main</h5>
                    <ul className='mt-6 text-sm font-medium'>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Blog</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>FAQs</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Support</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>About Us</a>
                        </li>
                    </ul>
                </div>

                <div className='px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12'>
                    <h5 className='uppercase font-bold'>Product</h5>
                    <ul className='mt-6 text-sm font-medium'>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Log In</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Personal</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Business</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Team</a>
                        </li>
                    </ul>
                </div>

                
                <div className='px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12'>
                    <h5 className='uppercase font-bold'>Press</h5>
                    <ul className='mt-6 text-sm font-medium'>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Logos</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Events</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Stories</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Office</a>
                        </li>
                    </ul>
                </div>

                <div className='px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12'>
                    <h5 className='uppercase font-bold'>Legal</h5>
                    <ul className='mt-6 text-sm font-medium'>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>GDPR</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Privacy Policy</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Terms of Service</a>
                        </li>
                        <li className='mt-3'>
                            <a href="#" className='border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300'>Disclaimer</a>
                        </li>
                    </ul>
                </div>

                <div className='px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12 text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12'>
                    <div className='max-w-sm mx-auto lg:mx-0'>
                        <h5 className='uppercase font-bold'>Subscribe to our Newsletter</h5>
                        <p className='mt-2 lg:mt-6 text-sm font-medium text-gray-600'>We deliver high quality blog posts written by professionals weekly. And we promise no spam.</p>
                        <form action="#" className='mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0'>
                            <input type="email" placeholder="Your Email Address" className='bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full' />
                            <button type='submit' className='px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Quede en el  <Divider /> */}
        </div>
    </div>
  )
}

export default FiveColumnWithInputForm;