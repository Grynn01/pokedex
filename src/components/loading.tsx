import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
        <Spinner />
    </div>
  )
}

export default Loading