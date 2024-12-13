import { connect } from "mongoose"

const uri = process.env.DB_URL!

connect(uri).then(() => {
  console.log('DB connected successfully')
}).catch(err => {
  console.log("DB connection error: ", err)
})