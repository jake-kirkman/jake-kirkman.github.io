import Tag from "../enums/tag";

export default interface ListItem {
    Label: string;
    MarkdownDataPath: string;
    Tags: Tag[];
    Date: string;
}