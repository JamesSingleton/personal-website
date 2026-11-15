# Agent notes

`CLAUDE.md` describes the repository: layout, commands, the page-builder
pattern and conventions. Read it first.

## ui-sdk

Before using ui-sdk, follow the ui-sdk skill if it's installed, and read `node_modules/@ui-sdk/react/docs/llms.txt`. To build a new component, also search `node_modules/@ui-sdk/react/docs/core.md` by heading, and read `rendering.md` next to it.

A ui-sdk `render` element created in a Server Component and passed to a client
part can fail to render during prerendering. Links rendered as a button should
use `ButtonLink` from `@workspace/ui/components/button-link`, which creates the
`<a>` on the client; `Button` with `asChild` around a Next `<Link>` is fine.
