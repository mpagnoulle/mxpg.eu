import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] p-4 rounded-lg border border-transparent text-white text-opacity-95 bg-gray-800 hover:bg-gray-950 outline outline-gray-950 outline-0 hover:outline-2 hover:outline-offset-2 hover:outline-gray-950 dark:hover:ring-0 dark:hover:outline-gray-800 active:scale-95 transition-all ease-in-out duration-100"
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
