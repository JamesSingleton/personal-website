import PageContainer from "./PageContainer";
import Header from "./Header";
import Footer from "./Footer";
import BottomMobileNavigation from "./BottomMobileNavigation";

export default function Page({ title, description, sticky, children }) {
  return (
    <PageContainer title={title} description={description}>
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomMobileNavigation />
    </PageContainer>
  );
}
