import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Onramp = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>The Velocity Line - Intake Questionnaire</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Helmet>
      <iframe
        data-tally-src="https://tally.so/r/A7G8YD?transparentBackground=1&formEventsForwarding=1"
        title="The Velocity Line - Intake Questionnaire"
        className="fixed inset-0 w-screen h-screen border-0"
      />
    </>
  );
};

export default Onramp;
