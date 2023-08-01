interface DashboardTitleProps {
  username: string | null,
}

export const DashboardTitle = ({username} : DashboardTitleProps) => {
  return (
    <div>
      <p className="text-3xl font-semibold">
        Hello, {username}!
      </p>
    </div>
  )
}