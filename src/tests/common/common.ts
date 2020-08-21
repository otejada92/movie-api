export const createData = (Model: any, data: any) => {
    return Model.create(data);
}

export const createMovieReview = (Model: any, review: object) =>{
    return Model.create(review);
}

export const findOneMovieByTitle = (Model: any, attrValue: any) =>{
    return Model.findOne({where :  {title : attrValue}});
}

export const findMovieById = (Model: any, id: number) => {
    return Model.findOne({where: {id : id}});
}

export const deleteResourceById = (Model: any, id: number) => {
    return Model.destroy({where: {id : id}});
}

export const deleteMovieByTitle = (Model: any, attrValue: any) => {
    return Model.destroy({where: {title : attrValue}});
}