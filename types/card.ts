import type { WithChildren } from './common'

export interface CardProps extends WithChildren {
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export interface CardTitleProps extends WithChildren {
  as?: keyof JSX.IntrinsicElements
  href?: string
}

export interface CardLinkProps extends WithChildren {
  href: string
}

export interface CardEyebrowProps extends WithChildren {
  as?: keyof JSX.IntrinsicElements
  decorate?: boolean
  className?: string
  dateTime?: string
}
