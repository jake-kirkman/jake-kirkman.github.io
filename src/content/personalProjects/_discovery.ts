//Model Imports
import ListItem from './../../models/interfaces/listItem';
import Tag from '../../models/enums/tag';
//Markdown Imports
import PORTFOLIO_SITE from './portfolioSite.md';
import SCLG_VSCODE_EXTENSION from './salesforceCustomLabelGeneratorVSCodeExtension.md';
import APEX_NOTEBOOK_VSCODE_EXTENSION from './apexNotebooksVSCodeExtension.md';
import WRIKE_VSCODE_EXTENSION from './wrikeVscodeExtension.md';
import FLOW_VIS_VSCODE_EXTENSION from './salesforceFlowVisualiserVSCodeExtension.md';
import SF_FORMULA_AST_PARSER from './salesforceFormulaCompiler.md';
import FOOD_IN_CUPBOARD_APP from './foodInCupboardApp.md';

const PERSONAL_PROJECTS: ListItem[] = [
    {
        Label: 'Salesforce Formula AST Parser',
        Tags: [Tag.Typescript],
        Date: '2024-09',
        MarkdownDataPath: SF_FORMULA_AST_PARSER
    },
    {
        Label: 'Food In Cupboard App',
        Tags: [Tag.Typescript, Tag.ReactNative, Tag.Expo, Tag.SQLite],
        Date: '2024-08',
        MarkdownDataPath: FOOD_IN_CUPBOARD_APP
    },
    {
        Label: 'Salesforce Flow Visualiser VSCode Extension',
        Tags: [Tag.Typescript, Tag.VSCode],
        Date: '2024-06',
        MarkdownDataPath: FLOW_VIS_VSCODE_EXTENSION
    },
    {
        Label: 'Apex Notebook VSCode Extension',
        Tags: [Tag.Typescript, Tag.VSCode],
        Date: '2024-03',
        MarkdownDataPath: APEX_NOTEBOOK_VSCODE_EXTENSION
    },
    {
        Label: 'SF Custom Label VSCode Extension',
        Tags: [Tag.Typescript, Tag.VSCode],
        Date: '2024-01',
        MarkdownDataPath: SCLG_VSCODE_EXTENSION
    },
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
    }
];
export default PERSONAL_PROJECTS;