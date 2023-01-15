import { describe } from 'vitest';
import { getUpdatedEntities } from '../reactQuery';


describe("getUpdatedEntities", () => {
    it("should return the previous entities when the mutation type is not delete, update or create", () => {
        const previousEntities = [{ id: 1, name: "test" }];
        // @ts-ignore
        const result = getUpdatedEntities<TestEntity>('test', { id: 2, name: "test" }, previousEntities);
        expect(result).toEqual(previousEntities);
    });

    it("should return an array without the provided entity when the mutation type is delete", () => {
        const previousEntities = [{ id: 1, name: "test" }];
        const result = getUpdatedEntities("delete", { id: 1, name: 'test' }, previousEntities);
        expect(result).toEqual([]);
    });

    it("should return an array with the provided entity when the mutation type is create", () => {
        const previousEntities = [{ id: 1, name: "test" }];
        const result = getUpdatedEntities("create", { id: 2, name: "test" }, previousEntities);
        expect(result).toEqual([...previousEntities, { id: 2, name: "test" }]);
    }
    );

});
