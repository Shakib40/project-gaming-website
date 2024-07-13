import React from "react";

const RefundPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
            <p className="mb-6">
                Thank you for shopping at RJ Trading. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund or exchange. Please see below for more information on our return policy.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Returns</h2>
            <p className="mb-6">
                All returns must be postmarked within thirty (30) days of the purchase date. All returned items must be in new and unused condition, with all original tags and labels attached.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
            <p className="mb-6">
                After receiving your return and inspecting the condition of your item, we will process your return or exchange. Please allow at least seven (7) days from the receipt of your item to process your return or exchange.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
            <p className="mb-6">
                The following items cannot be returned or exchanged:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Gift cards</li>
                <li>Clearance items</li>
            </ul>
            <p className="mb-6">
                For defective or damaged products, please contact us at <a href="mailto:support@yourcompany.com" className="text-blue-600">support@yourcompany.com</a> to arrange a refund or exchange.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Questions</h2>
            <p className="mb-6">
                If you have any questions concerning our return policy, please contact us at: <a href="mailto:tradingr480@gmail.com" className="text-blue-600">tradingr480@gmail.com</a>
            </p>
        </div>
    );
};

export default RefundPolicy;
