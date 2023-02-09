import { useReducer } from 'react'
import { FiEdit, FiMenu } from 'react-icons/fi'
import { MdOutlineContentPaste } from 'react-icons/md'
import Anchor from './Anchor'

function Sidebar() {
  const [isSidebarOpen, toggleSidebar] = useReducer((prev) => !prev, true)

  return (
    <>
      <aside
        id="default-sidebar"
        className={`sticky top-0 z-40 h-screen duration-300 ${
          isSidebarOpen ? 'w-72' : 'w-20'
        }`}
        aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-white px-3 py-4 shadow-lg">
          <ul className="flex flex-col gap-1">
            <li>
              <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-500 hover:bg-gray-100"
                onClick={toggleSidebar}>
                <FiMenu size="2em" />
                <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>
                  Menu
                </span>
              </button>
            </li>
            <li>
              <Anchor href="/">
                <FiEdit size="2em" />
                <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>
                  Content Management
                </span>
              </Anchor>
            </li>
            <li>
              <Anchor href="/">
                <MdOutlineContentPaste size="2em" />
                <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>
                  Courses
                </span>
              </Anchor>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
