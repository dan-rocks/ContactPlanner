import { connect } from "mongoose"

const uri = 'mongodb://localhost:27017/contact-planner'

connect(uri).then(() => {
  console.log('DB connected successfully')
}).catch(err => {
  console.log("DB connection error: ", err)
})