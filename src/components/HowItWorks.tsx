const steps = [
  {
    number: "1",
    emoji: "😕",
    title: "Detect Errors",
    description:
      "When VS Code detects errors, your OtterDr displays confusion — letting you know something's wrong.",
  },
  {
    number: "2",
    emoji: "✂️",
    title: "Select the Code",
    description:
      "Highlight the relevant code snippet causing the issue. Keep it focused for the best AI response.",
  },
  {
    number: "3",
    emoji: "🦦",
    title: "Trigger OtterDr",
    description:
      "Click the OtterDr button in the Status Bar. The panel opens and sends your code for analysis.",
  },
  {
    number: "4",
    emoji: "🎉",
    title: "Read & Fix",
    description:
      "View the AI explanation and fix suggestions. Once resolved, your OtterDr becomes happy again!",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Four simple steps to happier debugging
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-3xl mb-4 shadow-lg">
                  {step.emoji}
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Step {step.number}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-10 pt-20 m-10 ">
        <div className="flex space-x-4">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG5ocTM5ZHZpbDMwZzlrNnBpZDA4ZnJmeWI0NnAzcHBzZGMyOW4zeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z3dFKtpYsK3RlhILxb/giphy.gif"
            alt="GIF"
            className="rounded-md overflow-hidden inline-block w-[600px] h-auto"
          />
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh3ZzU3b3U2bTFlNG1qM2k3czIzZjVua2VoZW1uaHJ2OTFpbDlueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ucfq7tCaeN6qOLuurj/giphy.gif"
            alt="GIF"
            className="rounded-md overflow-hidden inline-block w-[600px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
