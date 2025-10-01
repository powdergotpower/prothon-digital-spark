import Navigation from "@/components/Navigation";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
