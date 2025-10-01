import Navigation from "@/components/Navigation";
import Apps from "@/components/Apps";
import Footer from "@/components/Footer";

const AppsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Apps />
      </div>
      <Footer />
    </div>
  );
};

export default AppsPage;
