import 'tailwindcss/tailwind.css';
import TopMenu from "../components/TopMenu";
import LeftMenu from "../components/LeftMenu";

export default function Layout({children}) {
  return (
    <>
      <TopMenu/>
      <LeftMenu/>
      <main>{children}</main>
    </>
  );
}
