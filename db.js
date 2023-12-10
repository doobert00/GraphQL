let cars = [
    {id:"0",make:"Toyota",model:"Tacoma",tires:"0"},
    {id:"1",make:"Toyota",model:"Carolla",tires:"1"},
    {id:"2",make:"Jeep",model:"Wrangler",tires:"2"},
    {id:"3",make:"BMW",model:"M3",tires:"3"},
    {id:"4",make:"Nissa",model:"Altima",tires:"4"},
    {id:"5",make:"Honda",model:"Civic"}
];

let tires = [
    {id:"0", tireStatus:["OK","OK","OK","OK"]},
    {id:"1", tireStatus:["OK","BAD","BAD","OK"]},
    {id:"2", tireStatus:["BAD","BAD","BAD","OK"]},
    {id:"3", tireStatus:["NEW","NEW","OK","OK"]},
    {id:"4", tireStatus:["NEW","NEW","BAD","MISSING"]},
];


export default { cars, tires };