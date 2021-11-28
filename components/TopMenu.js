import Link from 'next/link'

export default function TopMenu() {
	return <>
		<header className="fixed top-0 left-0 right-0 flex justify-between">
			<div>
				<Link href="/">
					Website
				</Link>
			</div>
			<div>
				<ul>
					<li>
						<a>Account</a>
						<ul>
							<li>
								<Link href="/settings">
									Impostazioni
								</Link>
							</li>
							<li>
								<Link href="/logout">
									Esci
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</header>
	</>
}
