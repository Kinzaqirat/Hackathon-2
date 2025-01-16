import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { SchemTypes } from "./schema";


export const SanityConfig= defineConfig({
    name:"default",
    title:"My Shop",
    projectId:"ipfv0v0i",
    dataset:"production",
    basePath:"/studio",
    plugins:[structureTool(),visionTool()],
    schema:{
        types:SchemTypes
    }

})