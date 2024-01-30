import { ReactComponent as FacebookIcon } from "../../assets/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter-icon.svg";
import Logo from "../../common/Logo";
import ColumnWithLinks from './ColumnWithLinks';

const Footer = () => {
  return (
    <div className='relativeyarnc -mb-8 px-8'>
        <div className='max-w-screen-xl mx-auto py-10 flex flex-wrap justify-between'>
            <div className='text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0'>
                <div className='flex items-center justify-center md:justify-start'>
                    <Logo className="w-8" />
                    <h5 className='ml-2 text-xl font-black text-primary-500'>Les Samarretes</h5>
                </div>
                <p className='mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4'>Treact is an Internet Technology company providing design resources such as website templates and themes.</p>
                <div className='mt-4'>
                    <a href="#" className='cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4'>
                        <FacebookIcon className='w-4 h-4' />
                    </a>
                    <a href="#" className='cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4'>
                        <TwitterIcon className='w-4 h-4' />
                    </a>
                </div>
            </div>
            
            <ColumnWithLinks 
                title='Links de interés' 
                links={[
                    { text: 'Información de interés', href: '#' },
                    { text: 'Compromiso empresarial', href: '#' },
                    { text: 'Contacto', href: '#' },
                ]} />         

            <ColumnWithLinks
                title='Soporte'
                links={[
                    { text: 'Soporte', href: '#' },
                    { text: 'Cómo comprar', href: '#' },
                    { text: 'Proceso de compra-entrega', href: '#' },
                ]} />
            
            <ColumnWithLinks
                title='Legal'
                links={[
                    { text: 'Política de privacidad', href: '/privacypolicy' },
                    { text: 'Terminos de servicio', href: '/termsofservice' },
                    { text: 'Normativa de entrega', href: '#' },
                ]} />
        </div>
    </div>
  )
}

export default Footer