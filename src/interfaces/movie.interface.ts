interface MovieAttributes {
    id: number,
    title: string,
    synopsis: string | null,
    director: string | null,
    writer: string | null,
    visible: boolean,
    readonly createdAt: Date|string;
    readonly updatedAt: Date|string;
};

export default MovieAttributes;