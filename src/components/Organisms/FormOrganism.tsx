import { ReactNode } from "react"
import { Form } from "react-final-form"

interface FormOrganismProps {
  onSubmit: () => void,
  validate: (values?: any)  => object | undefined,
  children: ReactNode
}

export const FormOrganism = ({...props} : FormOrganismProps) => {
  return (
    <div className="mt-4">
      <Form
        onSubmit={props.onSubmit}
        validate={props.validate}
        render={({handleSubmit}) => (
          <form className="flex flex-col items-center" action="submit" onSubmit={handleSubmit}>
            {props.children}            
          </form>
        )}
      />
    </div>
  )
}