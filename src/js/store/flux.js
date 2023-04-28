const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fav: []
		},
		actions: {
			addFab: (data) => {
				//get the store
				const store = getStore();
				const copy = store.fab.find((item) => item === data);
					if (!copy) {
						setStore({fab: [...store.fab, data]});
					}
				},
				deleteFav: (data) => {
				  const store = getStore();
				  const newList = store.fab.filter((fabItem) => fabItem !== data); 
				  setStore({fab: newList}); 
				},
			  },
			};
		  };
		  
		  export default getState;