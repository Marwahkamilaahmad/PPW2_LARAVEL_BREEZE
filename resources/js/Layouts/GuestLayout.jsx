
import { Link } from '@inertiajs/react';
// import RuastoreLogo from 'public/images/ruastorelogo.jpg'


export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <img src='images/reading-book.png' style={{width : '120px'}}/>
                    <p className='text-lg font-medium text-gray-900 dark:text-white text-center'>Ruas Store</p>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
