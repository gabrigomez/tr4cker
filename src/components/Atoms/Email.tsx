interface EmailProps {
  email: string | null,
}

export const Email = ({email} : EmailProps) => {
  return (
    <p>
      {email}
    </p>
  )
};