export const validateString = (value, maxLength) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false
  }

  return true
}

export const getErrorMessage = error => {
  let message

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message)
  } else if (typeof error === "string") {
    message = error
  } else {
    message = "Something went wrong"
  }

  return message
}

export function textToIconName(input = '') {
  const replacers = [
      {
          in: /\+/g,
          out: "plus"
      },
      {
          in: /\./g,
          out: "dot"
      },
      {
          in: /&/g,
          out: "-and-"
      },
      {
          in: ' ',
          out: ''
      },
      {
          in: '_',
          out: ''
      }
  ]
  let output = input.toLowerCase()
  output = output[0].toUpperCase() + output.slice(1)
  replacers.forEach(replacer => {
      output = output.replace(replacer.in, replacer.out)
  })
  return output
}
