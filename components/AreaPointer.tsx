type Props = {
  className?: string
  children: string | React.ReactNode
}

const AreaPointer = ({ className, children }: Props) => (
  <li className={`flex items-center ${className} gap-16`}>
    {children}
    <div className="min-w-[32px] min-h-[32px] w-8 h-8 inline-block rounded-full bg-pucker-up" />
  </li>
)

export default AreaPointer
