import { Button } from "@/components/ui/button";

const Installation = () => {
  return (
    <section id="install" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started in Seconds
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Marketplace */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-2xl mb-3">📥</div>
            <h3 className="text-xl font-semibold mb-4">From VS Code Marketplace</h3>
            <ol className="space-y-3 text-muted-foreground text-sm">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                Open Visual Studio Code
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                Go to Extensions (Ctrl+Shift+X)
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
                Search for <strong className="text-foreground">OtterDr</strong>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">4</span>
                Click Install
              </li>
            </ol>
            <Button className="mt-6 w-full rounded-xl" asChild>
              <a href="https://marketplace.visualstudio.com/items?itemName=OtterDr.otterdr" target="_blank" rel="noopener noreferrer">
                Open Marketplace
              </a>
            </Button>
          </div>

          {/* From Source */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-2xl mb-3">🛠️</div>
            <h3 className="text-xl font-semibold mb-4">From Source</h3>
            <div className="space-y-3">
              <div className="rounded-lg bg-muted p-3 font-mono text-sm overflow-x-auto">
                <div className="text-muted-foreground"># Clone and install</div>
                <div>git clone https://github.com/OtterDr/OtterDr.git</div>
                <div>cd OtterDr</div>
                <div>npm install</div>
                <div>npm run compile</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Then open VS Code and press <kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-mono">F5</kbd> to run in Development Mode.
              </p>
            </div>
          </div>
        </div>

        {/* Extension notice */}
        <div className="mt-8 rounded-2xl border border-border bg-accent/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">🧑‍✈️Copilot:</strong> The current version of OtterDr requires the Copilot VS Code extension. You'll be taken to the extension marketplace on your first use. Once you enable Copilot, OtterDr is ready to go!
          </p>
        </div>

        {/* API Key notice (Obsolete with Version 0.1.0; placeholder text for future use)*/}
        {/*<div className="mt-8 rounded-2xl border border-border bg-accent/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">🔑 API Key:</strong> OtterDr requires an OpenAI API Key. You'll be prompted on first use. Your key is stored securely in VS Code's SecretStorage.
          </p>
        </div>*/}
      </div>
    </section>
  );
};

export default Installation;
