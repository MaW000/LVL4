import React, {useState, useEffect} from "react"
import axios from 'axios'

const ListContext = React.createContext()

function ListContextProvider(props){ 
    const [inputs, setinputs] = useState(
        {
            form: {
                title: '', 
                imgUrl: '', 
                description: '',
                }
        })
    const [thingsArray, setThingsArray] = useState([])
    
    useEffect(function () {
        axios.get(`https://api.vschool.io/mattwardlow/thing`)
    .then(res => {
    setThingsArray(res.data)
    .catch(err => console.log(err))
  });
    }, [])

    const handleChangeInputs = (e) => {
        const {name, value} = e.target

        setinputs(prev => ({
            form: {...prev.form,[name]: value}
        }))
    }

    const saveinput = () => {
        setinputs(prev=> ({
            form: {
                ...prev.form,
                title: '', 
                imgUrl: '', 
                description: '',
            }
        }))

        axios.post(`https://api.vschool.io/mattwardlow/thing`, {
            title: inputs.form.title,
            description: inputs.form.description,
            imgUrl: inputs.form.imgUrl,
            id: inputs.form.id
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    const deleteButton = (_id) => {
        axios.delete(`https://api.vschool.io/mattwardlow/thing/`+ _id)
            .then((res) => {
                console.log(res)
                setThingsArray(prev => {
                    return prev.filter(item => item._id !== _id)
                })   
            })
            .catch((err) => console.log(err))
    }
    
    const handleSave = (_id, editI) => {
        axios.put(`https://api.vschool.io/mattwardlow/thing/${_id}`, editI) 
            .then((res) => {
                setThingsArray(prev=> {
                    return prev.map(item => {
                        if (_id === item._id) {
                            return res.data
                        } return item
                    })
                })
            })
    }

    return(
        <ListContext.Provider value={{
            handleChangeInputs,
            saveinput,
            deleteButton,
            toggleClass,
            handleSave,
            thingsArray,
            toggle,
            targetId,
            inputs,
        }}>
           {props.children}
        </ListContext.Provider>
    )
}

export {ListContext, ListContextProvider}