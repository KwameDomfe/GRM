import { Outlet } from "react-router-dom"
import MainHeader from "../components/organisms/MainHeader"

export default function RootLayout() {
  return (
    <div id=""
        className="vh-100 flex flex-row-xl flex-column"
    >
        <aside className=""
        >
            <MainHeader />
        </aside>
        <main className="of-y-scroll"
        >
            <Outlet />
        </main>
    </div>
  )
}
  