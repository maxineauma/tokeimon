import React from 'react';

class Searchbar extends React.Component {

    handleSearch = (e) => {
        e.preventDefault();
        const [input] = e.target.children;
        window.open("/search/"+input.value, "_self");
    }

    render() {

        return(

            <>
                <form onSubmit={this.handleSearch}>
                    <input 
                        type="text" 
                        placeholder={this.props.placeholder}
                        style={{
                            border: 0,
                            outline: 0,
                            width: "100%",
                            backgroundColor: "#F0F2F5",
                            padding: "1rem",
                            borderRadius: "2px",
                            color: "#000"
                        }}/>
                </form>
            </>

        )

    }

}

export default Searchbar;