import { AppNavBar } from "../common/AppNavBar";
import { useHistory } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";

export function HomePage() {
  const history = useHistory();
  return (
    <div>
      <AppNavBar />

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/generic-hero/covid-banner/banner_home_web.ashx?rev=30dfa634b9e24358921c7ff388e2a534&extension=webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>
              <Button onClick={() => history.push("/guestuser")}>
                Start Your Journey!
              </Button>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/generic-hero/covid-banner/banner_fmp_web.ashx?rev=3363fe271d7146838074033d38f354f0&extension=webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>
              <Button onClick={() => history.push("/guestuser")}>
                Start Your Journey!
              </Button>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/generic-hero/covid-banner/web.ashx?rev=a1aa2ef6f48b459b95e469846341e9b8&extension=webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>
              <Button onClick={() => history.push("/guestuser")}>
                Start Your Journey!
              </Button>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
