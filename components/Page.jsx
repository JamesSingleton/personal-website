import PageContainer from './PageContainer';
import Header from './Header';
import Footer from './Footer'

export default function Page({ title, description, sticky, children }) {
  return (
    <PageContainer title={title} description={description}>
      <Header sticky={sticky} />
      <main>
        {children}
      </main>
      <Footer />
    </PageContainer>
  );
}