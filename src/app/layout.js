import { urwDinArabic } from "@/styles/fonts"
import "./globals.css"

export const metadata = {
	title: "PUMP! Underwear - Men's Premium Designer Underwear",
	description: "Men's premium designer underwear, swimwear, and tanks. At PUMP! find Jocks, Briefs, Boxers, and more. High quality, Stylish and comfortable. All in one!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${urwDinArabic.className}`}>
				{children}
			</body>
		</html>
	);
}
