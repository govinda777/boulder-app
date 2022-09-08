export interface Welcome4 {
    rss: RSS;
}

export interface RSS {
    channel:          Channel;
    "_xmlns:dc":      string;
    "_xmlns:content": string;
    "_xmlns:atom":    string;
    "_xmlns:media":   string;
    _version:         string;
}

export interface Channel {
    title:         Description;
    description:   Description;
    link:          Array<LinkClass | string>;
    generator:     string;
    lastBuildDate: string;
    language:      Description;
    item:          Item[];
}

export interface Description {
    __cdata: string;
}

export interface Item {
    title:       Description;
    description: Description;
    link:        string;
    guid:        GUID;
    creator:     Creator;
    enclosure:   Enclosure;
    content:     Content;
}

export interface Content {
    _medium:  string;
    _url:     string;
    __prefix: string;
}

export interface Creator {
    __prefix: string;
    __cdata:  string;
}

export interface Enclosure {
    _url:    string;
    _length: string;
    _type:   string;
}

export interface GUID {
    _isPermaLink: string;
    __text:       string;
}

export interface LinkClass {
    _href:    string;
    _rel:     string;
    _type:    string;
    __prefix: string;
}
