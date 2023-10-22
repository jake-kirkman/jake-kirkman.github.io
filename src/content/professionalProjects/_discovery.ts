//Model Imports
import ListItem from './../../models/interfaces/listItem';
import Tag from '../../models/enums/tag';
//Markdown Imports
import TRANSACTION_APPROVALS from './transactionApprovals.md';
import ONBOARDING_PORTAL from './onboardingPortal.md';
import INCOME_PROTECTION from './incomeProtection.md';
import ACTIVITIES_2 from './activities2.md';
import APPRAISALS from './appraisals.md';
import EXPENSE_MANAGEMENT from './expenseManagement.md';
import RISK_MANAGEMENT from './riskManagement.md';
import TICKETS_AND_ACTIONS from './ticketsAndActions.md';

const PROFESSIONAL_PROJECTS: ListItem[] = [
    {
        Label: 'Transaction Approval System',
        Tags: [Tag.React, Tag.CSS, Tag.HTML, Tag.Typescript],
        Date: '2023-07',
        MarkdownDataPath: TRANSACTION_APPROVALS
    },
    {
        Label: 'Onboarding Portal',
        Tags: [Tag.Salesforce, Tag.Apex, Tag.HTML, Tag.CSS, Tag.Javascript, Tag.LWC, Tag.RESTApi, Tag.JSON],
        Date: '2022-12',
        MarkdownDataPath: ONBOARDING_PORTAL
    },
    {
        Label: 'Income Protection',
        Tags: [Tag.Salesforce, Tag.Apex, Tag.HTML, Tag.CSS, Tag.Javascript, Tag.LWC, Tag.RESTApi, Tag.JSON],
        Date: '2022-06',
        MarkdownDataPath: INCOME_PROTECTION
    },
    {
        Label: 'Tickets and Actions',
        Tags: [Tag.Salesforce, Tag.Apex, Tag.HTML, Tag.CSS, Tag.Javascript, Tag.LWC, Tag.RESTApi, Tag.JSON],
        Date: '2022-06',
        MarkdownDataPath: TICKETS_AND_ACTIONS
    },
    {
        Label: 'Activities 2.0',
        Tags: [Tag.Salesforce, Tag.Apex, Tag.HTML, Tag.CSS, Tag.Javascript, Tag.LWC],
        Date: '2021-11',
        MarkdownDataPath: ACTIVITIES_2
    },
    {
        Label: 'Appraisals',
        Tags: [Tag.Salesforce, Tag.Apex],
        Date: '2021-04',
        MarkdownDataPath: APPRAISALS
    },
    // {
    //     Label: 'Risk Management',
    //     Tags: [Tag.Salesforce, Tag.Apex, Tag.HTML, Tag.CSS, Tag.Javascript, Tag.LWC],
    //     Date: '2020-12',
    //     MarkdownDataPath: RISK_MANAGEMENT
    // },
    {
        Label: 'Expense Management',
        Tags: [Tag.Salesforce, Tag.Apex, Tag.HTML, Tag.CSS, Tag.Javascript, Tag.Visualforce],
        Date: '2020-07',
        MarkdownDataPath: EXPENSE_MANAGEMENT
    },
];
export default PROFESSIONAL_PROJECTS;