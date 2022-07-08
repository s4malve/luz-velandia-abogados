type Props = {
  comment: string
  user: {
    name: string
    avatar: string
    job: string
  }
}

const CardComment = ({ comment, user }: Props) => (
  <div className="flex flex-col p-6 rounded-lg shadow-sm gap-y-4 shadow-dark-72 bg-brilliance text-dark">
    <p className="italic text-dark/75">{comment}</p>
    <div className="flex items-center gap-x-4">
      <img
        src={user.avatar}
        alt=""
        className="object-cover object-top w-16 h-16 overflow-hidden rounded-full"
      />
      <div className="">
        <span className="block font-semibold">{user.name}</span>
        <span>{user.job}</span>
      </div>
    </div>
  </div>
)

export default CardComment
