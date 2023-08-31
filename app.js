const { sequelize, users, aadhardetails, address, roles} = require('./models')
const express = require('express')
const app = express()
app.use(express.json())

//POST new user details

app.post('/users', async(req, res) =>{
    const{name, email, number} = req.body
    
    try {
        const user = await users.create({name, email, number})
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

//GET all user 

app.get('/users', async(req, res) =>{
    try {
        const user = await users.findAll()

        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'Something went wrong'})
    }
})

// GET single user

app.get('/users/:id', async(req, res) =>{
    const id = req.params.id
    try {
        const user = await users.findOne({
            where: {id}
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})

// DELETE user

app.delete('/users/:id', async(req, res) =>{
    const id = req.params.id
    try {
        const user = await users.findOne({
            where: {id}
        })
        await user.destroy()
        return res.json({message:'User deleted successfully!'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})
 
// Update the existing user

app.put('/users/:id', async(req, res) =>{
    const id = req.params.id
    const {name, email, number} = req.body;
    try {
        const existingUser = await users.findOne({
            where: {id}
        })

        if (!existingUser){
            return res.status(404).json({message:'User not found'})
        }
        if (name){
            existingUser.name = name
        }
        if (email){
            existingUser.email = email
        }
        if (number){
            existingUser.number = number
        }

        await existingUser.save();
        return res.json(existingUser)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Error updating user data'})
    }
})

//Create aadhar for user

app.post('/users/:id/aadhar', async(req, res) =>{
    const id = req.params.id
    try {
          const user =  await users.findOne({
            where: {id}
        })
        const { name, aadharNumber } = req.body;
        const aadharCreation = await aadhardetails.create({name, aadharNumber})
        user.aadhar_id = aadharCreation.aadhar_id
        await user.save()
        return res.json(aadharCreation)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})

//Get aadhar details for single user


app.get('/users/:id/aadhar', async(req, res) =>{
    const id = req.params.id
    try {
        const user = await users.findOne({
            where: {id}
        })
        const aadhar_id = user.aadhar_id
        const aadhar_details = await aadhardetails.findOne({
            where: {aadhar_id}
        })
        
        return res.json(aadhar_details)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})

// Create address for user

app.post('/users/:id/addresses', async( req, res ) => {
    const id = req.params.id
    try {
          const user =  await users.findOne({
            where: {id}
        })
        const { name,street,city,country } = req.body;
        userid = id
        const addressCreation = await address.create({name, street, city, country, userid})
        console.log(user.id)
        await addressCreation.save()
        return res.json(addressCreation)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})

// Get all addresses for a user

app.get('/users/:id/addresses', async(req, res) => {
    const id = req.params.id
    try {
        await users.findOne({
            where: {id}
        })
        const addresses = await address.findAll({
            where: {userid: id}
        })
        return res.json(addresses)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})

// Get single address for a user

app.get('/users/:id/addresses/:addressId', async(req, res) => {
    const id = req.params.id
    const addressId = req.params.addressId
    try {
        await users.findOne({
            where: {id}
        })
        const addresses = await address.findOne({
            where: {id: addressId}
        })
        return res.json(addresses)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})

// Update the user address

app.put('/users/:id/addresses/:addressId', async(req, res) =>{
    const id = req.params.id
    const addressId = req.params.addressId
    const {name, street, city, country} = req.body;
    try {
        await users.findOne({
            where: {id}
        })
        const existingAddress = await address.findOne({
            where: {id: addressId}
        })

        if (!existingAddress){
            return res.status(404).json({message:'User not found'})
        }
        if (name){
            existingAddress.name = name
        }
        if (street){
            existingAddress.street = street
        }
        if (city){
            existingAddress.city = city
        }
        if (country){
            existingAddress.country = country
        }

        await existingAddress.save();
        return res.json(existingAddress)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Error updating user data'})
    }
})

// Add roles to the user

app.post('/users/:id/roles', async(req, res) =>{
    const id = req.params.id;
    const{roleName} = req.body;
    try {
          await users.findOne({
          where: {id}
      })
      const role = await roles.create({roleName})
      await role.save()
      return res.json(role)
  } catch (error) {
      console.log(error)
      return res.status(500).json({error:'User not found'})
  }
})

//Get role of the user

app.get('/users/:id/roles', async(req, res) => {
    const id = req.params.id
    try {
        await users.findOne({
            where: {id}
        })
        const role = await roles.findAll({
            where: {userId : id}
            })
        return res.json(role)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'User not found'})
    }
})

app.listen(5000, async() =>{
    console.log('server up and running on http://localhost:5000')
    await sequelize.authenticate()
    console.log('database connected')
})
    