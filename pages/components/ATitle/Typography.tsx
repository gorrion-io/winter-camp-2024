/** @format */

type TypographyProps = {
	children: React.ReactNode;
};

export const Typography = ({ children }: TypographyProps) => (
	<h2 className="text-base font-normal text-white leading-5 font-serif pb-1">{children}</h2>
);
