import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Return Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg mb-6">
              We want you to be happy with your purchase. If you need to return an item, please read our policy below.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Eligibility for Returns</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Returns must be initiated within <strong>7 days</strong> of delivery.</li>
              <li>Items must be unused, in original packaging, and in resalable condition.</li>
              <li>Proof of purchase is required.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Custom printed or personalized products.</li>
              <li>Digital items or design files.</li>
              <li>Products marked as final sale.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Return Process</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                To initiate a return, contact us at{" "}
                <a href="mailto:returns@rnrprintandpackers.com" className="text-primary hover:underline">
                  returns@rnrprintandpackers.com
                </a>
              </li>
              <li>Customers are responsible for return shipping costs unless the item was defective or incorrect.</li>
              <li>Once inspected, approved returns will be processed as a refund or store credit.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;