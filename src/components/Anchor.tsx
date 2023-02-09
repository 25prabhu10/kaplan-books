import { ReactNode } from 'react'

type AnchorProps = {
  href: string
  children: ReactNode
}

function Anchor({ href, children, ...props }: AnchorProps) {
  return (
    <a
      href={href}
      className="flex items-center rounded-lg p-2 text-base font-normal text-gray-500 hover:bg-gray-100"
      {...props}>
      {children}
    </a>
  )
}

export default Anchor
