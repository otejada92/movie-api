import {expect} from 'chai';
import { query } from '../../common/database/query';


describe('Query Manager: getWhereStatement()', () => { 
    
    it('should handle queries', () => {
    
    const request:any = { query : {title : 'Mocha title', comment : 'Mocha comment'}};

    const whereStatement: any = query.getWhereStatement(request, ['title', 'comment']); 
    
    expect(whereStatement.where).be.a('object');
    expect(whereStatement.where.title).be.eq('Mocha title');
    expect(whereStatement.where.comment).be.eq('Mocha comment');
  
    });

    it('should handle empty query', () => {
    
        const request:any = { query : {}};
    
        const whereStatement: any = query.getWhereStatement(request, ['title', 'comment']); 
        
        expect(whereStatement.where).be.a('object');
        expect(whereStatement.where).empty;
    });

});

describe('Query Manager: getPagination()', () => { 
    
    it('should calculate pagination parameters', () => {
        
        const request:any = { query : {page : 5 , pageSize : 10 }};

        const pagination: any = query.getPagination(request);
        
        expect(pagination).not.empty;
        expect(pagination).be.a('object');
        expect(pagination.limit).eq(10);
        expect(pagination.offset).eq(50);
    });

    it('should calculate empty query and give a default setup', () => {
        
        const request:any = { query : {}};

        const pagination: any = query.getPagination(request);
        
        expect(pagination).not.empty;
        expect(pagination).be.a('object');
        expect(pagination.limit).eq(20);
        expect(pagination.offset).eq(0);

    });

});

describe('Query Manager: getDataOrder()', () => { 
    
    it('should return data order parameters', async () => {
        
        const request:any = { query : {sortBy: 'title', orderBy : 'ASC'}};

        const dataOrder: any = query.getDataOrder(request);

        expect(dataOrder).not.empty;
        expect(dataOrder.order).be.a('array');
        expect(dataOrder.order[0]).length.gte(2);
        expect(dataOrder.order[0]).contain('title');
        expect(dataOrder.order[0]).contain('ASC');

    });

    it('should handle no order', async () => {
        
        const request:any = { query : {}};

        const dataOrder: any = query.getDataOrder(request);
        
        expect(dataOrder).not.empty;
        expect(dataOrder.order).be.a('array');
        expect(dataOrder.order).empty;
    });


});