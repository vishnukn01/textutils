import React from 'react'

export default function Alert(props) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <span className='alert-type'>{capitalizeFirstLetter(props.alert.type)}</span> - {props.alert.message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
  )
}
