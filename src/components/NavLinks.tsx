import { links } from '@/utils';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return <div className='hidden lg:flex justify-start items-center gap-x-4'>
    {links.map((link) => {
      return <NavLink to={link.href} key={link.label} className={({isActive}) => {
        return `capitalize font-normal tracking-wide ${
          isActive ? 'text-primary' : ''
        }`;
      }}>{link.label}</NavLink>
    })}
  </div>;
}

export default NavLinks;
