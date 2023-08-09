import { Spinner } from "@phosphor-icons/react"

interface LoadingProps {
  className: string,
}

export const Loading = ({className} : LoadingProps) => {
  return (
    <div className={className}>
      <Spinner className="animate-spin-forever"/>
    </div>
  )
}