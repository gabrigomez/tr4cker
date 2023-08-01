import { Spinner } from "@phosphor-icons/react"
import { Artists } from "../../utils"
import { CardList } from "../Organisms/CardList"
import { DashboardHeader } from "../Molecules/DashboardHeader"

interface DashboardTemplateProps {
  loading: boolean,
  username: string | null,
  artists: Artists
}

export const DashboardTemplate = ({...props} : DashboardTemplateProps) => {
  return (
    <div>
      {props.loading ? (
        <div>
          <DashboardHeader title={props.username} />
          {props.artists !== null && (
            <CardList artists={props.artists} />
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center text-3xl font-semibold">
          <Spinner className="animate-spin-forever" size={36} />
        </div>
      )} 
    </div>
  )
}