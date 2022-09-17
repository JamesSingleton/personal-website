import Head from 'next/head'

import { Card, Section } from '@components/ui'
import { SimpleLayout } from '@components/common'

import type { WithChildren } from '@types'

interface ToolsProps extends WithChildren {
  title: string
  href?: string
}

interface ToolSectionProps extends WithChildren {
  title: string
}

function ToolsSection({ children, title }: ToolSectionProps) {
  return (
    <Section title={title}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }: ToolsProps) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool
              title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)"
              href="https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-16-core-gpu-512gb"
            >
              I use an Intel-based 16” MacBook Pro for work but for anything
              else I work on I use my M1 MacBook M1 Pro. It is a night and day
              difference and have never heard the fans turn on, even under heavy
              loads.
            </Tool>
            <Tool
              title="LG 32” UltraFine Display Ergo"
              href="https://www.amazon.com/gp/product/B08BCR862L"
            >
              I currently only have a single monitor but I&apos;m looking to get
              a second one. It is nice to have a large screen to work on and
              I&apos;m a big fan of the Ergo stand.
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Sublime Text 4">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, Sublime Text is still the best text
              editor ever made.
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Reflect">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
            <Tool title="Focus">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
