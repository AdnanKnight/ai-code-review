import { Outlet, NavLink } from 'react-router-dom'

const homeLayout = () => {
    return (
        <div className='homeLayout'>
            <main>
                <div className="brandlogo icons glass">
                    <i className="ri-quill-pen-ai-line"></i>
                </div>
                <div className="signinlogo icons glass">
                    <i className="ri-account-circle-line"></i>
                </div>
                <Outlet />
            </main>

            <nav>
                <div className="navbar glass">
                    <NavLink to="/" end className={({ isActive }) => `nav-items${isActive ? ' active' : ''}`}>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to="/code" className={({ isActive }) => `nav-items${isActive ? ' active' : ''}`}>
                        <h3>Code</h3>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-items${isActive ? ' active' : ''}`}>
                        <h3>About</h3>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default homeLayout