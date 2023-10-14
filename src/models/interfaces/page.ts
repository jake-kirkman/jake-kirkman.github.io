export default interface Page {
    Name: string;
    Path: string;
    Component: React.ComponentType<any>;
    Props?: any;
}