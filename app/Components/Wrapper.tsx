import { FC, ReactNode } from "react"

const Wrapper:FC<{children:ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-xl mx-auto">
        {children}
    </div>
  )
}

export default Wrapper