import React ,{useState}from 'react';
import Footer from './components/footer'
import Header from './components/header'
// import Displaying from './components/displaying'
// import Textbox from './components/textbox'
// import Data from './components/data'

var data = [
    {
        title: 'this is title',
        content: 'this is content'
    }
]

function App() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })
    const [notes, setNotes] = useState([])
    
    var contentChanged = (event) => {
        var value = event.target.value;
        var name = event.target.name
        // console.log("value given: " + value);
        // console.log("name given: " + name);
        setInput((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }
    var addit = () => {
        input.title != '' || input.content != '' ? setNotes(preve => [...preve, input]) : console.log('emplty')
        console.log(data)
        setInput({
            title: '',
            content: ''
        })
    }
    var deleteme = (index) => {
        var newnotes = notes.filter(data => {
            return (data.title != index.title && data.content != index.content)
        });
        setNotes(newnotes)
    }
    return(
    <div>
            <Header />
            <div className="inputs">
                <input type="Text" placeholder="Enter title here...." style={{ marginBottom: '10px', marginTop: '10px' }} onChange={contentChanged} name='title' value={input.title}/>
                <input type="Text" placeholder="Enter Content here...." style={{ marginBottom: '10px' }} onChange={contentChanged} name='content' value={input.content}/>
                    <button onClick={addit} className='Save' style={{ color: 'white' }}>Save</button>
                </div>
            <div className="text-box">
                    {
                        notes.map((data, i) => (
                            <div className="boxes" key={i}>
                                <div className="content-box">
                                    <p className="title">{data.title}</p>
                                    <p className="content">{data.content}</p>
                                    <div className="delete" onClick={()=>deleteme(data)}>Delete</div>
                                </div>
                                
                            </div>
                        ))
                    }
            </div>
            <Footer />
        </div>
    )
}
export default App