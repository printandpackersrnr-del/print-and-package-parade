import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg mb-6">
              At RNR Print and Packers, your privacy is important to us. This policy explains how we collect, use, and safeguard your personal data.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name, email address, phone number.</li>
              <li>Billing and shipping address.</li>
              <li>Payment details (processed securely via third-party payment providers).</li>
              <li>Order history and customer communication.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To process and deliver your orders.</li>
              <li>To communicate about promotions, offers, and updates (if you opt-in).</li>
              <li>To improve our services and website experience.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing of Information</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We do not sell or rent your personal data.</li>
              <li>We may share data with trusted third-party partners (e.g., shipping providers, payment processors) only to fulfill your order.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="mb-6">
              We use SSL encryption and industry-standard measures to protect your information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>
              You can request access, correction, or deletion of your personal data anytime by emailing us at:{" "}
              <a href="mailto:privacy@rnrprintandpackers.com" className="text-primary hover:underline">
                privacy@rnrprintandpackers.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;