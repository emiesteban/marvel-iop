import { JSX } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="mainLayout" data-testid="mainLayout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
