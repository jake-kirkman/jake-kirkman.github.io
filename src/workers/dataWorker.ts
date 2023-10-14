/**
 * Collection of data methods that may be used in multiple places
 */


export function loadMarkdownData(pMarkdownPath: string): Promise<string | undefined> {
    return fetch(pMarkdownPath).then(pResponse => pResponse.text()); //Should be error if response is not 200
}