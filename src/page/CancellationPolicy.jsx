import React from "react";

const CancellationPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Cancellation Policy</h1>
            <p className="mb-6">
                At RJ Trading Company, we strive to provide the best service possible. If you need to cancel an order, please review our cancellation policy below.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Order Cancellation</h2>
            <p className="mb-6">
                You can cancel your order within 24 hours of placing it. To cancel your order, please contact our customer service team at <a href="mailto:tradingr480@gmail.com" className="text-blue-600">tradingr480@gmail.com</a> with your order number and reason for cancellation.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Non-Cancellable Orders</h2>
            <p className="mb-6">
                Orders that have already been shipped cannot be cancelled. In such cases, you may need to follow our return policy to return the item after receiving it.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
            <p className="mb-6">
                Once your cancellation request is approved, we will process a refund to your original method of payment. Refunds may take up to 5-7 business days to reflect in your account, depending on your payment provider.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-6">
                RJ Trading Company reserves the right to update or modify this cancellation policy at any time without prior notice. Any changes will be posted on this page, and your continued use of our website indicates your acceptance of the updated policy.
            </p>

            <p>
                If you have any questions or concerns about our cancellation policy, please contact us at <a href="mailto:tradingr480@gmail.com" className="text-blue-600">tradingr480@gmail.com</a>.
            </p>
        </div>
    );
};

export default CancellationPolicy;
