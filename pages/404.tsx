import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const Custom404 = () => {
	return (
		<div className='w-full mt-20  flex flex-col justify-center items-center text-center gap-6'>
			<h1 className='text-6xl lg:text-8xl font-bold  tracking-widest'>404</h1>
			<h2 className='text-2xl md:text-4xl font-semibold'>Oops, your force is not strong enough.</h2>
			<div className='sm:text-lg text-muted-foreground'>
				<p>This page you requested could not be found.</p>
				<p>May the force be with you!</p>
			</div>

			<Link href='/' className={buttonVariants({ variant: 'default', size: 'lg' })}>
				Back home
			</Link>
		</div>
	);
};

export default Custom404;
