import { defineType, defineField } from "sanity";

export let ProductSchema= defineType({
   name:"product",
    title:"Product",
    type:"document",
    fields:[

    {name:"name",
        title:"Product Name",
        type:"string"
    },
  {
    name:"description",
    title:"Product Description",
    type:"text"
  },
  {
    name:"image",
    title:"Product Image",
    type:"array",
    of:[{type:"image"}]

  },{
    name:"price",
    title:"Product price",
    type:"number"
  },
  {
    name:"stock",
    title:"Product Stock",
    type:"number"
  },
  {
    name:"slug",
    title:"Product slug",
    type:"slug",
    options:{
        source:"name"
    }
    
  }

    ]
})