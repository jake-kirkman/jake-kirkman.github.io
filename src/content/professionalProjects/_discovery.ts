//Model Imports
import ListItem from './../../models/interfaces/listItem';
import Tag from '../../models/enums/tag';
//Markdown Imports
import TRANSACTION_APPROVALS from './transactionApprovals.md';
import ONBOARDING_PORTAL from './onboardingPortal.md';
import INCOME_PROTECTION from './incomeProtection.md';
import ACTIVITIES_2 from './activities2.md';

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
        Label: 'Activities 2.0',
        Tags: [Tag.Salesforce, Tag.Apex, Tag.HTML, Tag.CSS, Tag.Javascript, Tag.LWC],
        Date: '2021-11',
        MarkdownDataPath: ACTIVITIES_2
    },
];
export default PROFESSIONAL_PROJECTS;