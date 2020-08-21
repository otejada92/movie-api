import  { pickBy, isUndefined } from 'lodash';

export const removeUndefined = (object: object) => {
    return pickBy(object, (property: any) => !isUndefined(property) );
}