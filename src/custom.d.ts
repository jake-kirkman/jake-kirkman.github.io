/**
 * This is the global type definition file for the project, meaning you can define
 * imports that may not actually exist within here and it will understand it,
 * the JS engine may complain though, so be careful there
 */

//Makes the typescript engine not care about image imports
declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.jpg" {
    const content: any;
    export default content;
}

declare module "*.png" {
    const content: any;
    export default content;
}

declare module "*.md" {
    const content: string;
    export default content;
}