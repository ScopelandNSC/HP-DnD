/// <reference types="react-scripts" />
declare module 'rxjs';
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
