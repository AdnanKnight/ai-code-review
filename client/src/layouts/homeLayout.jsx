import { Outlet } from 'react-router-dom'

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
                    <h3>Home</h3>
                    <h3>Code</h3>
                    <h3>Academy</h3>
                </div>
            </nav>
        </div>
    )
}

export default homeLayout