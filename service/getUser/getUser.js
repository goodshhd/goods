
export const getUser = () => (
    fetch('http://localhost:8000/users')
        .then((res) => {
            if(res.ok) {
                return res.json()
            } else console.error("Something went wrong")
        })
        .catch(( error ) => console.error(error))
);
