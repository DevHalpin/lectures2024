interface Container<Type> {
    title: string;
    contents: Type
}

const numContainer: Container<number> = {
    title: 'number container',
    contents: 1
}

const stringContainer: Container<string> = {
    title: 'string container',
    contents: "Cat"
}

interface Container2<K> {
    title: string;
    contents: K
};

const container3: Container2<string> = {
    title: 'container',
    contents: 1 as unknown as string
}