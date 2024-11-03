import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

import { AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import { links } from '@/utils';
import { NavLink } from 'react-router-dom';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.label}>
              {
                <NavLink
                  to={link.href}
                  className={({ isActive }) => {
                    return `capitalize w-full ${isActive} ? 'text-primary' : ''`;
                  }}
                >{link.label}</NavLink>
              }
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
