import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AI & Automation Consulting | 10x Velocity</title>
        <meta
          name="description"
          content="10x Velocity uses AI to amplify human potential, not replace it. Learn about our human-centered approach to automation consulting based in Louisville, KY."
        />
        <link rel="canonical" href="https://10xvelocity.ai/about" />
      </Helmet>
      <main className="min-h-screen bg-velocity-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-gradient">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 space-y-8 text-velocity-light">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                At 10x Velocity, we start with a conviction: AI isn't here to replace people. It's here to unleash them.
              </p>
              
              <p className="text-lg leading-relaxed">
                Too often, technology is sold as a silver bullet or a software to plug in, processes to automate, jobs to eliminate. That view misses the point. The real power of AI is not in erasing human work, but in amplifying human genius. It is an unlock, not a replacement.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-3xl font-bold mb-6 heading-gradient">
                The Human Core of AI
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  We're influenced by thinkers like Ethan Mollick (Wharton professor, The Unicorn's Shadow) and Jeremy Utley (Ideaflow), who both remind us that creativity and innovation are not side effects of work, they are its core.
                </p>
                
                <p className="text-lg leading-relaxed">
                  AI, in our view, is not a tool to control creativity, but a catalyst to multiply it. It clears away the noise of repetitive tasks so your people can focus on the ideas, strategies, and connections that actually move the needle.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-3xl font-bold mb-6 heading-gradient">
                How We Work
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  We bring a structured, pragmatic approach to transformation, but we never lose sight of the bigger picture.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-velocity-accent mb-3">
                      Unlock, Don't Replace
                    </h3>
                    <p className="text-base leading-relaxed">
                      We don't deploy AI to cut jobs. We deploy it to unlock the full capacity of your team.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-velocity-accent mb-3">
                      Human-Centered Design
                    </h3>
                    <p className="text-base leading-relaxed">
                      Every solution begins with your people, their frustrations, and their untapped potential.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-velocity-accent mb-3">
                      Velocity at Scale
                    </h3>
                    <p className="text-base leading-relaxed">
                      We focus on compounding improvements that create sustainable acceleration, not one-off wins.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-velocity-accent mb-3">
                      Culture First
                    </h3>
                    <p className="text-base leading-relaxed">
                      Technology adoption succeeds when people believe in it. We build systems that teams embrace, not resist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-3xl font-bold mb-6 heading-gradient">
                Why We Exist
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Organizations today are drowning in busyness. Brilliant minds spend their days on tasks that stifle, rather than spark, their creativity. Leaders feel the weight of doing more with less, while the future seems to accelerate away.
                </p>
                
                <p className="text-lg leading-relaxed font-medium">
                  We exist to change that story.
                </p>
                
                <p className="text-lg leading-relaxed">
                  10x Velocity is not just about automation it's about giving people back the time and space to think, to build, to lead. Because when humans are freed to focus on the meaningful, the results don't just improve...they multiply.
                </p>
                
                <div className="text-center pt-8">
                  <p className="text-2xl font-bold heading-gradient">
                    This is the era of augmented genius. We're here to help you embrace it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default About;