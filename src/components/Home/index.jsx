import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "../Map";

const Home = () => {
  const render = (status) => {
    return <h1>{status}</h1>;
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">The let out</h1>
      <Wrapper
        apiKey={"AIzaSyAtMf0z_ENH2CCRIx5VcnqbvKkVIZFnE3U"}
        render={render}
      >
        <Map />
      </Wrapper>
    </div>
  );
};

export default Home;
