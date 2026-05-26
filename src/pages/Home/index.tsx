import Header from "../../components/Header";
import CardsList from "./Cards";
import Footer from "../../components/Footer";

const Home = () => (
<>
    <Header tipo="home" />
    <div className="container">
        <CardsList />
    </div>
    <Footer />
</>
);

export default Home;
