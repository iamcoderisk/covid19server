const express =  require ("express")
const url = require('url')
var cors = require('cors')
const app =  express ()
const dotenv = require("dotenv").config()

const patientsRoute =  require("./routes/patients")
const symtomsRoute =  require("./routes/symptoms")
app.use(cors())

app.get('/', (req, res) => {
    res.send("Yayy! Yokesolutions Api Page!")
 })
app.use('/patients',patientsRoute)
app.use('/symptoms',symtomsRoute)
  
const PORT =  process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})