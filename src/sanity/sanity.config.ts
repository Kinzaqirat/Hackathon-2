import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { SchemTypes } from "./schema";


export const SanityConfig= defineConfig({
    name:"default",
    title:"My Shop",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset:"production",
    basePath:"/studio",
    plugins:[structureTool(),visionTool()],
    schema:{
        types:SchemTypes
    }

})