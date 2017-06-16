export class ImageRoute {
    public name: string;
    public apiR: string;
    public staticR: string;
    public prettyName: string;
    constructor (name: string, Options: ImageRouteOptions = {}) {
        this.name = name;
        this.apiR = Options.apiR || '/api/' + name;
        this.staticR = Options.staticR || '/static/' + name;
        this.prettyName = Options.prettyName || name.replace(/\b\w/g, l => l.toUpperCase());
    }
}

class ImageRouteOptions {
    apiR?: string;
    staticR?: string;
    prettyName?: string;
}