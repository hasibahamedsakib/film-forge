import { Container } from "@/app/Components/Container";
import Movies from "./Components/Home/Movies";

const Main = () => {
  return (
    <section className=" bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat ">
      <Container>
        <Movies />
      </Container>
    </section>
  );
};

export default Main;
