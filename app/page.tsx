export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sean Dowdall
      </h1>
      <p className="mb-4">
        I&apos;m Employee #2 and Software Engineer II at{' '}
        <a
          href="https://devally.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          DevAlly
        </a>
        , where I build workflow automation and developer tooling for
        accessibility compliance.
      </p>
      <p className="mb-4">
        Before DevAlly I interned
        at{' '}
        <a
          href="https://www.iris-eng.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          IRIS Technology
        </a>{' '}
        in Barcelona, where I spent time researching GPT-3 fine-tuning, Elasticsearch
        pipelines, and creating RAG chatbots with LangChain.
      </p>
      <p className="mb-8">
        Outside of work I like running, functional fitness, and building side{' '}
        <a href="/projects" className="underline underline-offset-4">
          projects
        </a>
        . I&apos;ve launched iOS apps including{' '}
        <a href="/projects/buck" className="underline underline-offset-4">
          Buck
        </a>
        , a men&apos;s mental health app built through Enterprise Ireland&apos;s
        New Frontiers programme, and{' '}
        <a href="/projects/max" className="underline underline-offset-4">
          Max
        </a>
        , a free local-first fitness app.
      </p>
      <p className="mb-8">
        I also enjoy developer productivity, good tooling, and tightening up
        small workflows over time. If that&apos;s your thing too, check out my{' '}
        <a
          href="https://github.com/seandowdall/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          dotfiles
        </a>
        .
      </p>

      <div>
        <h2 className="mb-4 text-base font-medium tracking-tight">
          Current goals
        </h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Run a sub-20 5k (22:28 currently).</li>
          <li className="mb-2">Become proficient at Rust.</li>
        </ul>
      </div>
    </section>
  )
}
