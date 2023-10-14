//Model Imports
import ListItem from './../../models/interfaces/listItem';
import Tag from '../../models/enums/tag';
//Markdown Imports
import PORTFOLIO_SITE from './portfolioSite.md';
import WRIKE_VSCODE_EXTENSION from './wrikeVscodeExtension.md';
import APEX_PMD_CUSTOM_RULES from './apexPMDCustomRules.md';

const PERSONAL_PROJECTS: ListItem[] = [
    {
        Label: 'Portfolio Site',
        Tags: [Tag.React, Tag.CSS, Tag.HTML, Tag.Typescript],
        Date: '2023-10',
        MarkdownDataPath: PORTFOLIO_SITE
    },
    {
        Label: 'Wrike VSCode Extension',
        Tags: [Tag.Typescript, Tag.VSCode, Tag.Wrike, Tag.RESTApi, Tag.JSON],
        Date: '2023-01',
        MarkdownDataPath: WRIKE_VSCODE_EXTENSION
    },
    {
        Label: 'Apex PMD Custom Rules',
        Tags: [Tag.Java, Tag.Salesforce, Tag.XML],
        Date: '2022-08',
        MarkdownDataPath: APEX_PMD_CUSTOM_RULES
    },
];
export default PERSONAL_PROJECTS;