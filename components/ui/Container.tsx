import React, { CSSProperties, forwardRef } from 'react'
import clsx from 'clsx'

import type { WithChildrenAndClassName, WithChildren } from '@types'

const OuterContainer = forwardRef<HTMLDivElement, WithChildrenAndClassName>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  }
)

OuterContainer.displayName = 'OuterContainer'

const InnerContainer = forwardRef<HTMLDivElement, WithChildrenAndClassName>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    )
  }
)

InnerContainer.displayName = 'InnerContainer'

interface ContainerComponent
  extends React.ForwardRefExoticComponent<
    WithChildrenAndClassName & React.RefAttributes<HTMLDivElement>
  > {
  Outer: React.ForwardRefExoticComponent<
    WithChildrenAndClassName & React.RefAttributes<HTMLDivElement>
  >
  Inner: React.ForwardRefExoticComponent<
    WithChildrenAndClassName & React.RefAttributes<HTMLDivElement>
  >
}

export const Container = forwardRef<HTMLDivElement, WithChildrenAndClassName>(
  ({ children, ...props }, ref) => {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
  }
) as ContainerComponent

Container.displayName = 'Container'

Container.Outer = OuterContainer
Container.Inner = InnerContainer
