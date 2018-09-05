import reducer from './items';
import actions from './actions';

const testItem = {
	id: 'TEST_ID',
	firstName: 'TEST_FIRST',
	lastName: 'TEST_LAST',
	birthday: '2018-09-04T22:00:00.000Z'
};

describe('Items reducer', () => {

	it('should return an empty array as initial state', () => {
		expect(
			reducer(undefined, {type: 'TEST_ACTION_TYPE'})
		).toEqual(
			[]
		);
	});

	it('should add an item to the array', () => {
		expect(
			reducer(undefined, {
				type: actions.CreateItemAction,
				payload: testItem
			})
		).toEqual(
			[testItem]
		);
	});

	it('should update an item in the array', () => {
		expect(
			reducer([testItem], {
				type: actions.UpdateItemAction,
				payload: {...testItem, firstName: 'SomeOtherFirstName'}
			})
		).toEqual(
			[{
				id: testItem.id,
				firstName: 'SomeOtherFirstName',
				lastName: testItem.lastName,
				birthday: testItem.birthday,
			}]
		);
	})

});
