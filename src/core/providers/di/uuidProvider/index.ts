import { v4 as uuidv4 } from "uuid"

const uuidProvider = () => {
  return uuidv4()
}

export default uuidProvider
