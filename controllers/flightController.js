const Flights = require("../models/Flight"); 

let count = 1;
exports.createFlight = async (req, res) => {
    try{
        const flight = await req.body;
        flight.id = count;
        count++
        Flights.model.push(flight);

        return res.status(201).json({
            message: "Booking successful",
            flight: flight
        })

    }
   catch(e){
        return res.json({message : e.message});
    }
}
exports.allFlights = async (req,res) => {
    try{
        const flights = Flights.model;
        if(!flights) return res.status(500).send("Server error");
        
        return res.status(200).json(flights);
    }
    catch(e){
        return res.json({message : e.message});
    }
    
  }

exports.oneFlight = async (req,res) => {
    try{
        const {id} = req.params;

        const flight = await Flights.model.find((flight) => flight.id == id);
        if(!flight) return res.status(403).send("Flight does not exist");

        res.status(200).json(flight);
    }
    catch(e){
        return res.json({message: e});
    }
  }

exports.updateFlight = async (req,res) => {   
    try{
        const {id} = req.params;
        const {title, time, price, date} = req.body;
        
        let flight = await Flights.model.find((flight) => flight.id == id);
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;

        res.status(200).json({
            message: "Updated Successfully",
            flight: flight
    })
    }
    catch(e){
        return res.status(500).json({message: e.message});
    }
}

exports.deleteFlight = async (req,res)=>{
    const {id} = req.params;

    try{
        const deletedFlight = await Flights.model.find((flight) => flight.id == id);
        const index = Flights.model.indexOf(deletedFlight);
        Flights.model.splice(index, 1);

        return res.status(200).json({
            message: "Deleted Successfully",
            flight: deletedFlight
        })

    }
    catch(e){
        return res.status(500).send(e);
    }
  }

