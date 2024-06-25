'use client';
import { Icon } from 'lucide-react';
import { Button } from '../ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';


import { useTheme } from 'next-themes';

const Darkmode = () => {

    const { setTheme } = useTheme();
    
  return (
    <Button size='icon' variant="outline">
         <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
         onClick={() => setTheme('dark')} />
         <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
         onClick={() => setTheme('light')} />
    </Button>
  )
}

export default Darkmode
