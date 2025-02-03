import localFont from 'next/font/local'

export const urwDinArabic = localFont({
	src: [
		{
			path: "../../public/fonts/URWDINArabic-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/fonts/URWDINArabic-XLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/fonts/URWDINArabic-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/URWDINArabic-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/URWDINArabic-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/URWDINArabic-Demi.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/URWDINArabic-Bold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/URWDINArabic-Black.woff2",
			weight: "900",
			style: "normal",
		},
	],
})