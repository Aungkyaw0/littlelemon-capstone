import GuestLayout from "../layouts/GuestLayout";
import Hero from '../componenets/Hero'
import WeeklySpecial from "../componenets/WeeklySpecial";

function Home() {
  return (
    <GuestLayout>
      <Hero />
      <WeeklySpecial />
    </GuestLayout>
  );
}

export default Home;
