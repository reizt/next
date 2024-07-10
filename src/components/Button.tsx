import clsx from 'clsx';

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function Button({ children, className }: Props): JSX.Element {
	return (
		<button
			type="button"
			className={clsx(
				'h-44 content-center rounded-10 border-2 border-gray-ee bg-foreground px-12 text-center text-16 leading-19 text-background duration-mouse hover:bg-gray-ee aria-disabled:pointer-events-none aria-disabled:text-gray-cc',
				className,
			)}
		>
			{children}
		</button>
	);
}
