import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { buttonVariants } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

export const Nav = () => {
    return (
        <nav className="w-full  sticky 	 top-0 left-0 border-b border-border/40 bg-background/95 z-50 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="w-full  container flex justify-between items-center h-16">
                <Link href="/" className="text-sm sm:text-xl font-semibold">
                    Winter camp 2024
                </Link>
                <div className="flex items-center gap-2">
                    <Link
                        href="https://github.com/sepetowski/winter-camp-2024"
                        passHref
                        target="_blank"
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'icon',
                        })}
                    >
                        <GithubIcon />
                    </Link>

                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};
