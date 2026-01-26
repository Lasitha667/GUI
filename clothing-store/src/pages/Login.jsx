import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, ArrowLeft, Github, Chrome } from 'lucide-react';
import './Auth.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Backend returns text "Login successful", not JSON
                const text = await response.text();
                console.log(text);

                // Create a session object
                const userData = { username };
                login(userData);
                navigate('/');
            } else {
                const data = await response.text();
                setError(data || 'Login failed');
            }
        } catch (err) {
            // For demo purposes, if backend fails/is offline, we can simulate login to let user proceed
            // REMOVE THIS FOR PRODUCTION
            if (err.message.includes('Failed to fetch')) {
                console.warn("Dev mode: Simulating login due to connection error");
                login({ username: 'DemoUser' });
                navigate('/');
                return;
            }

            setError('An error occurred. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className="auth-container">
            <Link to="/" className="home-link">
                <ArrowLeft size={20} /> Back to Home
            </Link>

            <div className="auth-image-side" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop)' }}></div>

            <div className="auth-form-side">
                <div className="auth-form-container fade-in">
                    <h2 className="auth-title">Welcome Back</h2>
                    <p className="auth-subtitle">Please sign in to your account</p>

                    {error && <div className="auth-error">{error}</div>}

                    <div className="social-login">
                        <button type="button" className="social-btn">
                            <Chrome size={20} />
                        </button>
                        <button type="button" className="social-btn">
                            <Github size={20} />
                        </button>
                    </div>

                    <div className="auth-divider">
                        <span>Or continue with</span>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>Username</label>
                            <Mail size={18} className="input-icon" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                            />
                        </div>

                        <button type="submit" className="auth-button">Sign In</button>
                    </form>

                    <div className="auth-footer">
                        Don't have an account?
                        <Link to="/signup" className="auth-link">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
