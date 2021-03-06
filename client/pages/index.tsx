import Container from '../Layout/Container';
import Login from '../components/Login';

export default function Home() {
  return (
    <>
      <Container
        widthPercentage={95}
        heightPercentage={95}
        additionalCss={`min-height: 600px`}
      >
        <Login />
      </Container>
    </>
  );
}
