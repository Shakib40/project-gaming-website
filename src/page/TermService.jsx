import React, { useEffect } from "react";

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
            <p className="mb-6">
                By accessing and using the website of RJ Trading Company, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms and conditions, please do not use our website.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Use of Website</h2>
            <p className="mb-6">
                The content provided on the website is for general information and use only. It is subject to change without prior notice.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-6">
                All materials, including but not limited to design, layout, graphics, and text, are owned by RJ Trading Company or used under license. Reproduction or distribution of these materials is prohibited without prior written consent.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
            <p className="mb-6">
                We strive to provide accurate and up-to-date information about our products and services. However, we do not warrant the accuracy, completeness, or reliability of any product descriptions or other content on our website.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Order Acceptance</h2>
            <p className="mb-6">
                Orders placed through our website are subject to acceptance and availability. We reserve the right to refuse or cancel any order at any time for any reason.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Pricing and Payment</h2>
            <p className="mb-6">
                All prices listed on our website are in the local currency and are subject to change without notice. Payment for orders must be made in full at the time of purchase.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
                RJ Trading Company shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use our website, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of [Country/Region], and you hereby submit to the exclusive jurisdiction of the courts in that jurisdiction.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-6">
                RJ Trading Company reserves the right to modify or replace these terms and conditions at any time without prior notice. By continuing to use our website after such changes are made, you agree to be bound by the revised terms and conditions.
            </p>

            <p className="mb-6">
                If you have any questions or concerns about our Terms and Conditions, please contact us at: <a href="mailto:tradingr480@gmail.com" className="text-blue-600">tradingr480@gmail.com</a>
            </p>
        </div>
    );
};

export default TermsAndConditions;
