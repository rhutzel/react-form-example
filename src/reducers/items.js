import actions from './actions';

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.CreateItemAction:
			return [
				...state,
				{
					id: action.payload.id,
					firstName: action.payload.firstName,
					lastName: action.payload.lastName,
					birthday: action.payload.birthday,
				}
			];
		case actions.UpdateItemAction:
			return state.map(item => (item.id === action.payload.id) ?
				{
					...item,
					firstName: action.payload.firstName,
					lastName: action.payload.lastName,
					birthday: action.payload.birthday,
				} : item
			);
		default:
			return state;
	}
};

export default reducer;
