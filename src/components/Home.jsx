import React, {Component} from 'react';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      images: [
        {
          id: 0,
          name: 'body image',
          image: 'assets/images/home-img3.jpeg',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
      }
      ]
    }
  }
  render() { 
    const image = this.state.images.map(image => { 
      return (
        <div className="container px-5" key={image.id}>
          <img width="100%"  src={image.image} alt={image.name} />
          <h4 className="p-4">{image.text}</h4>
        </div>
      );
    });
    return ( 
      <div className="container">
      {image}
      </div>
    );
  }
}
 
export default Body;