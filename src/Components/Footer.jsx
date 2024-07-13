import React from 'react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (link) => {
        navigate(link)
    }
    return (
        <footer className="bg-gray-100 text-gray-600 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <h6 className="font-semibold mb-4">Solutions</h6>
                        <ul>
                            <li><a className="hover:underline">Marketing</a></li>
                            <li><a className="hover:underline">Analytics</a></li>
                            <li><a className="hover:underline">Commerce</a></li>
                            <li><a className="hover:underline">Insights</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <h6 className="font-semibold mb-4">Support</h6>
                        <ul>
                            <li><a className="hover:underline">Pricing</a></li>
                            <li><a className="hover:underline">Documentation</a></li>
                            <li><a className="hover:underline">Guides</a></li>
                            <li><a className="hover:underline">API Status</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <h6 className="font-semibold mb-4">Company</h6>
                        <ul>
                            <li><a className="hover:underline">About</a></li>
                            <li><a className="hover:underline">Blog</a></li>
                            <li><a className="hover:underline">Jobs</a></li>
                            <li><a className="hover:underline">Press</a></li>
                            <li><a className="hover:underline">Partners</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <h6 className="font-semibold mb-4">Legal</h6>
                        <ul>
                            <li className="hover:underline" onClick={() => handleNavigate('/privacy-policy')}>Privacy Policy </li>
                            <li className="hover:underline" onClick={() => handleNavigate('/term-service')}>Terms of Service </li>
                            <li className="hover:underline" onClick={() => handleNavigate('/refund-policy')}>Refund Policy </li>
                            <li className="hover:underline" onClick={() => handleNavigate('/cancellation-policy')}>Cancellation Policy </li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-1">
                        <h6 className="font-semibold mb-4">Subscribe to our newsletter</h6>
                        <p className="mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l border border-gray-300"
                            />
                            <button className="p-2 bg-blue-500 text-white rounded-r">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8 border-t pt-4">
                    <p className="text-sm">© 2020 Your Company, Inc. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
                        <a className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
                        <a className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                        <a className="text-gray-600 hover:text-gray-800"><i className="fab fa-github"></i></a>
                        <a className="text-gray-600 hover:text-gray-800"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
