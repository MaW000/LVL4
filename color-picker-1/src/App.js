import { useState } from 'react';
import { HexColorPicker as Picker } from 'react-colorful';
import InputRow from './Components/InputRow';

function App() {
  const [colors, setcolors] = useState({inputs: [{id: 1, color:'#000000'},{id: 2, color:'#000000'}]})
  const [counter, setCounter] = useState(3)
  const [toggle, setToggle] = useState(false)
  const [x, setX] = useState(1)
  const [deg, setDeg] = useState(50)
  const colorsArr = colors.inputs.map(item => item.color)
  let styles = {
    background: `linear-gradient(${deg}deg, ${colorsArr})`
  }
  let p = `background: linear-gradient(${deg}deg, ${colorsArr}); 
-moz-background: linear-gradient(${deg}deg, ${colorsArr}); 
-webkit: linear-gradient(${deg}deg, ${colorsArr})`
  
  function addInput() {
    setCounter(prev => prev += 1)
    let newElement = {id: counter, color:'#000000'}

    setcolors(prev => ({
      inputs: [...prev.inputs, newElement ],
    })) 
  }

  function changeColor(e) {
    let p = e
    const newList = colors.inputs.map((item) =>{
      if (x === item.id) {
        return {
          ...item,
          color: p
        }
      } else {
        return item
      }
    })
    setcolors(prev => ({
      inputs: newList
    }))
  }

  function togglePicker(e) {
    setX(parseInt(e.target.parentElement.id))
    setToggle(!toggle)
    
  } 
  
  function setDegree(e) {
    
    setDeg(e.target.value)
  }
  
  const inputGen = colors.inputs.map(prev => {
    return (
      <InputRow
        id = {prev.id}
        color = {prev.color}
        key = {prev.id}
        togglePicker = {togglePicker}
        toggle = {toggle}
        x = {x}
        changeColor = {changeColor}
      />
    )
  })

  return (
    <div className='app'>
      <div className='output'>
        <div className='color-output' style={styles}></div>
        <textarea readOnly value={p} className='text-output'></textarea>
      </div>
      <div className='input'>
        <h2>Options</h2>
        {inputGen}
        <div className='input2'>
        <button onClick={addInput}>Add Color</button>
        <input placeholder='degree' type='number' onChange={setDegree}/>
        </div>
      </div>
    </div>
  );
}

export default App;
