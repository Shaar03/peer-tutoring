import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="container grid place-items-center gap-4 py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] bg-clip-text text-transparent">
              Unlock
            </span>{" "}
            your academic
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Potential
            </span>{" "}
            with peer tutoring
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Say goodbye to academic challenges and hello to success! Join us
          today.
        </p>

        {!localStorage.getItem("isAuthenticated") ? (
          <Button className="w-full md:w-1/3" asChild>
            <Link to="auth/register">Get Started</Link>
          </Button>
        ) : (
          <></>
        )}
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
