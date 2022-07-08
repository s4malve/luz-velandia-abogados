type Props = {
  className?: string
}

const Logo = ({ className = '' }: Props) => (
  <figure className={`flex items-center ${className} max-w-[300px]`}>
    <img src="/isotype.svg" alt="luz velandia abogados isotype" />
    <img
      src="/logotype.svg"
      className="hidden lg:inline-block"
      alt="luz velandia abogados logotype"
    />
  </figure>
)

export default Logo
