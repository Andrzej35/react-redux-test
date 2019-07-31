export default function ({ dispatch }) {
    return next => action => {
        if (!action.payload || !action.payload.then) {
            return next(action)
        }

        action.payload
            .then(res => res.json())
            .then(res => {
                const newAction = { ...action, payload: res }
                dispatch(newAction)
            })
            .catch(e => console.log('ERROR OCCURED ', e))

    }
}
