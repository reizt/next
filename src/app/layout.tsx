import '../globals.css';
type Props = {
	children: React.ReactNode;
};

export default function ({ children }: Props) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" />
				<link rel="stylesheet" href="https://fonts.werp.in/WerpSansJP.css" />
			</head>
			<body>{children}</body>
		</html>
	);
}
