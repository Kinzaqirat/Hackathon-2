import { createClient, } from "next-sanity";
export const SanityClient=createClient({
projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
dataset:"production",
apiVersion:"2025-01-06",
useCdn:false
})
