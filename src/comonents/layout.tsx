import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, home }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
