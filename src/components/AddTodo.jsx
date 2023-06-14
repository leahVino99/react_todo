import { useState } from 'react';

function AddTodo({addMission}) {

    const [mission, setMission] = useState('');

    const onSubmit = (e) => {

        //Default behaviour of the form is to refresh the page on submit
        e.preventDefault();

        if(mission.trim()) {
            
            addMission(mission);
            setMission('');
        }

    }
  return (
    <>

        <h3 style={{marginLeft:'2rem'}}>Add Mission</h3>
        <form onSubmit={onSubmit}>
        <input type="text" style={{marginLeft:'2rem',
                                   fontSize: '1.1rem',
                                   padding:'0.4rem'}}
                            onChange = {(e)=>setMission(e.target.value)}
                            value={mission} />

        <button  style={{fontSize:'1.1rem',
                         padding:'0.4rem',
                         cursor:'pointer'}}>Add</button>
        </form>
    </>
  )
}

export default AddTodo