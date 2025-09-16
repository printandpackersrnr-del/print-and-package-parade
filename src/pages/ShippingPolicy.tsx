import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Shipping Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg mb-6">
              At RNR Print and Packers, we deliver across India with trusted courier partners.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Processing Time</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Orders are processed within <strong>2–3 business days</strong> after payment confirmation.</li>
              <li>Customized orders may take longer; timelines will be communicated at checkout.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Methods & Costs</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Standard Shipping: 5–7 business days.</li>
              <li>Express Shipping: 2–3 business days (extra charges apply).</li>
              <li>Shipping fees are calculated at checkout based on order size and location.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">International Shipping</h2>
            <p className="mb-6">
              Currently, we do not offer international shipping.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Delays & Issues</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We are not responsible for delays caused by courier services, weather, or incorrect address details.</li>
              <li>
                If your package is lost or damaged in transit, contact us at{" "}
                <a href="mailto:shipping@rnrprintandpackers.com" className="text-primary hover:underline">
                  shipping@rnrprintandpackers.com
                </a>{" "}
                within 48 hours of delivery attempt.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;