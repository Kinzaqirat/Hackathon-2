import { createClient,type ClientConfig } from "next-sanity";

const SanityClient: ClientConfig ={
projectId:"ipfv0v0i",
dataset:"production",
apiVersion:"2025-01-06",
useCdn:false
}
export default createClient(SanityClient)