import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-6">
                At RJ Trading, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Register for an account</li>
                <li>Place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us via email or contact form</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
                We may use the information we collect from you to:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Process and fulfill orders</li>
                <li>Send you promotional emails</li>
                <li>Improve our website and customer service</li>
                <li>Respond to your inquiries and requests</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Service providers who assist us in operating our website or conducting our business</li>
                <li>Third parties who provide services on our behalf, such as payment processing</li>
                <li>Law enforcement or government agencies when required by law</li>
            </ul>

            <p className="mb-6">
                If you have any questions or concerns about our Privacy Policy, please contact us at: <a href="mailto:tradingr480@gmail.com" className="text-blue-600">tradingr480@gmail.com</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
