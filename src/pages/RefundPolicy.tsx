import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg mb-6">
              At RNR Print and Packers, we value our customers and aim to provide high-quality printing and packaging solutions. If you are not entirely satisfied with your purchase, we're here to help.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eligibility for Refunds</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Refund requests must be made within <strong>7 days</strong> of receiving your order.</li>
              <li>To be eligible, the item must be unused, in its original packaging, and in the same condition that you received it.</li>
              <li>Proof of purchase (invoice or receipt) is required.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Refundable Items</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Customized or personalized printed products.</li>
              <li>Digital designs or downloadable items.</li>
              <li>Clearance or discounted items.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Process</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
              <li>If approved, your refund will be processed within <strong>7–10 business days</strong>, to your original method of payment.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              For any questions about refunds, email us at:{" "}
              <a href="mailto:support@rnrprintandpackers.com" className="text-primary hover:underline">
                support@rnrprintandpackers.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;