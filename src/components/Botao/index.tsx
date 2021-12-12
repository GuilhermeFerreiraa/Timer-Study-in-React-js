import React from "react";

class Botao extends React.Component {
  render(){
    const styles = {
      button:{
        backgroundColor: '#03ac2c' 
    }
  }
    return (
      <button style={styles.button}>
        Botao
      </button>
    )
  }
}

export default Botao;