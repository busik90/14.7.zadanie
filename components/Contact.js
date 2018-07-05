var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className='contactItem'>
        <img className='contactImage' src={'./images/contact-icon-1.png'} />
        <div className='textBox'>
          <p className='contactLabel'><span>Imię: {this.props.item.firstName}</span></p>
          <p className='contactLabel'><span>Nazwisko: {this.props.item.lastName}</span></p>
          <p className='contactEmail'>
            <span>Email: <a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a></span>
          </p>
        </div>
      </div>
    )
  },
});