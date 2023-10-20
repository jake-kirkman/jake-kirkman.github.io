import Page from "../models/interfaces/page";
import MarkdownPage from "../pages/markdownPage";
import HOME_MD_PATH from "./../content/home.md";

import PROFESSIONAL_PROJECTS from "../content/professionalProjects/_discovery.ts";
import PERSONAL_PROJECTS from "../content/personalProjects/_discovery.ts";
import ListPage from "../pages/listPage";

const PAGE_DEFINITIONS: Readonly<Page>[] = [
    Object.freeze({
        Name: 'Home',
        Path: '/',
        Component: MarkdownPage,
        Props: {
            MarkdownFilePath: HOME_MD_PATH
        }
    }),
    Object.freeze({
        Name: 'Professional Projects',
        Path: '/professional-projects',
        Component: ListPage,
        Props: {
            PageTitle: 'Professional Projects',
            PageDescription: 'Here you\'ll find a collection of various projects I\'ve overseen, planned, designed, developed and maintained. This is by no means a comprehensive list, only the ones that I\'ve had the time to talk about',
            Items: PROFESSIONAL_PROJECTS
        }
    }),
    Object.freeze({
        Name: 'Personal Projects',
        Path: '/personal-projects',
        Component: ListPage,
        Props: {
            PageTitle: 'Personal Projects',
            PageDescription: 'Here you\'ll find a collection of various personal projects I\'ve undertaken. This is by no means a comprehensive list, just the stuff I\'ve had the time to write about',
            Items: PERSONAL_PROJECTS
        }
    }),
];
export default PAGE_DEFINITIONS;