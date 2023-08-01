interface UsernameProps {
  username: string | null,
}

export const Username = ({username} : UsernameProps) => {
  return (
    <p className="text-3xl font-semibold">
      Hello, {username}!
    </p>
  )
}