import { CheckCircle } from "@phosphor-icons/react"
import { Field, Form } from "react-final-form"

interface EditUserProps {
  onSubmit: () => void,
  validate: () => object | undefined
}

export const EditUser = ({...props} : EditUserProps) => {
  return (
    <div className="mt-4">
      <Form
        onSubmit={props.onSubmit}
        validate={props.validate}
        render={({handleSubmit}) => (
          <form className="flex flex-col items-center" action="submit" onSubmit={handleSubmit}>
            <Field name="username">
              {({input, meta}) => (
                <div className="mb-3 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-14">
                  <input
                    type="text"
                    {...input}
                    placeholder="username" 
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
            <button className="bg-black hover:bg-pink-500 duration-300 p-2 rounded-md group">
              <CheckCircle className='text-2xl mr-1 group-hover:animate-spin cursor-pointer' />
            </button>
          </form>
        )}
      />
    </div>
  )
}