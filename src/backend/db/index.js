import Datastore from "nedb-promises"
import { app } from "electron"
import path from "path"

const basePath = app.getPath("userData")
const dbPath = path.join(basePath, "nedb")
const db = {
  system_setting: Datastore.create({
    autoload: true,
    filename: path.join(dbPath, "system_setting.db"),
  })
}
export default db
