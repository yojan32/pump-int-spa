'use client'
import { useEffect, useState } from 'react'
import { customeContentPage } from '@/lib/pageCustomizedClient'
import RenderComponentWP from './RenderComponentWP'
import Script from 'next/script'

export default function TestPage() {
	const [pageContent, setPageContent] = useState();

	useEffect(() => {
		const fetchPageData = async () => {
			const data = await customeContentPage();
			setPageContent(data);
		};
		fetchPageData();
	}, []);

	return (
		<>
			{pageContent && (
				<RenderComponentWP content={pageContent?.editCode} />
			)}
		</>
	)
}