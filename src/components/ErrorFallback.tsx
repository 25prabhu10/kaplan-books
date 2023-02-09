type ErrorFallbackProps = {
  message?: string
}

function ErrorFallback({ message = '' }: ErrorFallbackProps) {
  return (
    <div
      role="alert"
      className="flex h-[75vh] flex-col items-center justify-center">
      <p className="text-red-800">{`Uh oh... There's a problem. Try refreshing the app.`}</p>
      <pre>{message}</pre>
    </div>
  )
}

export default ErrorFallback
