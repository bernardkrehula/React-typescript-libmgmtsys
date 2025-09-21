import './LoginWindow.css'
import Btn from '../Btn/Btn';
import SingleInput from '../SingleInput/SingleInput';

const LoginWindow = () => {

    return(
        <div className="login-window">
            <h1>Library Management System</h1>
            <svg className="login-photo" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LockOutlinedIcon"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
            <h2>Admin Login</h2>
            <div className='login-inputs-btn'>
                <SingleInput /* onClick={} */ placeholder='' variation='login-input' ></SingleInput>
                <SingleInput /* onClick={} */ placeholder='' variation='login-input' ></SingleInput>
                <Btn onClick={() => console.log('radi')} variation='login-btn'>Login</Btn>
            </div>
            <div className='login-info'>
                <svg className="info-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoOutlinedIcon"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg>
                <div>
                    <h3>Use login info</h3>
                    <h4>Email Address: <span>testadmin@library.com</span></h4>
                    <h4>Password: <span>testpassword</span></h4>
                </div>
            </div>
        </div>
    )
}

export default LoginWindow;