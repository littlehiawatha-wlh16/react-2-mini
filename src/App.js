import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(props){
    super(props)

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
    this.updateColor = this.updateColor.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    // this.updateSize = this.updateSize.bind(this)
  }


  // updateColor
  updateColor(val) {
    console.log('hit', val)
    this.setState({fontColor:val})
  }

  // updateSize
  updateSize(val){
    this.setState({ fontSize: val})
  }

  // updateFamily
  updateFamily(val){
    this.setState({fontFamily: val})
  }
  

  // updateEditStatus

  updateEditStatus(val){
    this.setState({allowEdit: val})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          {/* Render EditToggle */}
          <EditToggle update = {this.updateEditStatus}/>
          {/* Render ColorChanger */}
          <ColorChanger update = {this.updateColor}/>
          {/* Render SizeChanger */}
          <SizeChanger update = {this.updateSize} allowEdit = {this.state.allowEdit}/>
          {/* Render FamilyChanger */}
          <FamilyChangerr/>
        </div>
        <div className="textArea">{/* Render TextContainer */}</div>
      </div>
    );
  }
}

export default App;
