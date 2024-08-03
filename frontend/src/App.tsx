import "./App.css";
import Apps from "./components/Apps";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <br/>
      <main className="pt-16 pb-8 px-4 mr-auto">
        <Apps />
      </main>
      <br/>
      <Footer />
    </>
  );
}

export default App;

