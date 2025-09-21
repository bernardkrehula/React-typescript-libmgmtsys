import './LoginWindow.css'
import Btn from '../Btn/Btn';
import SingleInput from '../SingleInput/SingleInput';

const LoginWindow = () => {

    return(
        <div className="login-window">
            <h1>Library Management System</h1>
            <svg className="login-photo" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LockOutlinedIcon"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
            <h2>Admin Login</h2>
            <div className='login-inputs'>
                <SingleInput /* onClick={} */ placeholder='pass' variation='login-input' value='4'></SingleInput>
                <SingleInput /* onClick={} */ placeholder='pass' variation='login-input' value='4'></SingleInput>
            </div>
            <Btn onClick={() => console.log('radi')} variation='login'>Login</Btn>
            
        </div>
    )
}

export default LoginWindow;