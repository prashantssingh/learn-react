import React from 'react';

class AddFishForm extends React.Component {
  nameRef   = React.createRef();
  priceRef  = React.createRef();
  statusRef = React.createRef();
  descRef   = React.createRef();
  imageRef  = React.createRef(); 

  createFish = event => {
    event.preventDefault();
    const fish = {
      name : this.name.value.value,
      price : parse.Float(this.price.value.value),
      status : this.status.value.value,
      desc : this.desc.value.value,
      image : this.image.value.value,
    }
    this.props.addFish(fish);
  }
  render() {
    return(
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />          
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="Desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" type="text" ref={this.imageRef} placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;