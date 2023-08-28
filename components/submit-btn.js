import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] p-4 button-lg"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all" />{" "}
        </>
      )}
    </button>
  )
}
