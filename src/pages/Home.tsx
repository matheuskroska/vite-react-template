import { Button } from '../components/Button';
import { ReactComponent as Logo } from './circle.svg';

function Home() {
  return (
    <>
      <h1>
        Hello World
        <Logo />
      </h1>
      <Button variant="primary" children="primary button" />
      <Button variant="secondary" children="secondary button" />
      <Button variant="tertiary" children="tertiary button" />
    </>
  );
}

export default Home;
