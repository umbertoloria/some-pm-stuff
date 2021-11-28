import 'tailwindcss/tailwind.css'
import TopMenu from "../components/TopMenu";

export default function Layout({children}) {
	return (
		<>
			<TopMenu/>
			<main>{children}</main>
		</>
	)
}
