import { IColumnWithLinksProps } from "../../interfaces/Footer/IColumnWithLinks";


const ColumnWithLinks = (props: IColumnWithLinksProps) => {

    const { title, links } = props;

  return (
    <div className='md:w-1/5 mb-4'>
    <h5 className='font-bold'>{title}</h5>
    <ul className='mt-4 text-sm font-medium'> 
        {links.map(link => {
            return (
                <li className='mt-3'>
                    <a href={link.href} className='border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 mb-4'>{link.text}</a>
                </li>
            )
        })}
    </ul>
</div>
  )
}

export default ColumnWithLinks