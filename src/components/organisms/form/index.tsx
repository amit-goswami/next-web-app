import React from 'react'
import Joi from 'joi'

interface IFormProps {
  children: React.ReactNode
  className?: string
  validationSchema: Joi.ObjectSchema
  initialValues: Record<string, string | number | boolean>
  id?: string
  getFormDetails?: (data: Record<string, string | number | boolean>) => void
  getFormData: (data: Record<string, string | number | boolean>) => void
}

interface IFormContext {
  values: Record<string, any>
  errors: Record<string, string>
  setValues: React.Dispatch<
    React.SetStateAction<Record<string, string | number | boolean>>
  >
}

export const FormContext = React.createContext<IFormContext | undefined>(
  undefined
)

export const useFormContext = (): IFormContext => {
  const context = React.useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}

export const Form = ({ ...props }: IFormProps) => {
  const [values, setValues] = React.useState(props.initialValues)
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  React.useEffect(() => {
    if (props.getFormDetails) {
      props.getFormDetails(values)
    }
  }, [values])

  const handleValidation = (event: React.FormEvent) => {
    event.preventDefault()
    const result = props.validationSchema.validate(values, {
      abortEarly: false
    })
    if (result.error) {
      const error: Record<string, string> = {}
      result.error.details.forEach((data) => {
        error[data.path[0]] = data.message
      })
      setErrors(error)
    } else {
      setErrors({})
      props.getFormData(values)
    }
  }

  return (
    <FormContext.Provider value={{ values, errors, setValues }}>
      <form
        className={props.className}
        onSubmit={(event) => handleValidation(event)}
        id={props.id}
      >
        {props.children}
      </form>
    </FormContext.Provider>
  )
}
