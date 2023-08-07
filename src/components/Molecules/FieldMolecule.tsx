import { Field } from "react-final-form"

interface FieldMoleculeProps {
  placeholder: string,
  name: string,
  type?: string  
}

export const FieldMolecule = ({...props }: FieldMoleculeProps) => {
  return (
    <Field name={props.name}>
      {({ input, meta }) => (
        <div className="mb-3 flex flex-col w-3/4 h-14">
          <input 
            type={props.type ? props.type : 'text'}
            {...input} 
            placeholder={props.placeholder} 
            className="bg-black p-2 rounded-md"
          />
          {meta.error && meta.touched && 
            <span className="text-xs text-red-600 mt-1">
              {meta.error}
            </span>
          }
        </div>
      )}
    </Field>
  )
}