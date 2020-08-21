interface ReviewAttributes {
    id: number,
    movie_id: number,
    comment: string,
    rate: number,
    readonly createdAt: Date;
    readonly updatedAt: Date;
};

export default  ReviewAttributes;