const express= require("express")
const app= express()
const cors= require('cors');
const port= process.env.PORT || 5000;
app.use(cors())
app.use(express())


app.get('/', (req, res)=>{
    res.send("Doctors_Doms_server is running")
})


app.listen(port, ()=>{
    console.log(`runnint at ${port}`)
})