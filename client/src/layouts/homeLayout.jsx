import { Outlet } from 'react-router-dom'

const homeLayout = () => {
    return (
        <div className='homeLayout'>
            <main>
                <div className="brandlogo icons">
                    <i class="ri-quill-pen-ai-line"></i>
                </div>
                <div className="signinlogo icons">
                    <i class="ri-account-circle-line"></i>
                </div>
                <Outlet />
            </main>

            <nav>
                <div className="navbar">
                    <h3>Home</h3>
                    <h3>Code</h3>
                    <h3>Academy</h3>
                </div>
            </nav>
        </div>
    )
}

export default homeLayout