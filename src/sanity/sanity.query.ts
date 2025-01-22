import { groq } from 'next-sanity';
import React from 'react'
import { SanityClient } from './sanity.client';

export default async function Sanityquery() {
    const data=await SanityClient.fetch(groq ` *[_type == "product" ] 
        {
        imagePath,
        name,
        description,
        isFeaturedProduct,
        category,
        stockLevel

        }
        `)
         console.log(data);
}
