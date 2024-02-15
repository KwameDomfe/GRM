import { Outlet } from "react-router-dom"
import MainHeader from "../components/organisms/MainHeader"

export default function RootLayout() {
  return (
    <div id=""
        className="flex flex-column flex-row-xl
          vh-100"
    >
        <aside className="flex item-center justify-center"
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
  