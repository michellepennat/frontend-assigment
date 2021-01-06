import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Related from "./components/Related/Related";

const App = () => {
  return (
    <div>
      <Header />
      <Container>        
        <News />
        <Related />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
