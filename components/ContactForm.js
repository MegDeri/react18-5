var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
          id: 'one',
        }),
        React.createElement('label', {
          htmlFor: 'one',
        }, ": imie"),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
          id: 'two',
        }),
        React.createElement('label', {
          htmlFor: 'two',
        }, ": nazwisko"),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
          id: 'three',
        }),
        React.createElement('label', {
          htmlFor: 'three',
        }, ": email"),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt"),
      )
    )
  },
})