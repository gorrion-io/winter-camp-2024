import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body className='scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-secondary'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
