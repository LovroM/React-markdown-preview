var Test = React.createClass ({
  render: function () {
    return (
      <div>
        <Header />
        <InputContainer />
      </div>
    )
  }
})

function Header () {
  return (
    <div className="row">
      <h1 className="text-center">Markdown preview with React.js</h1>
    </div>
  )
}

function InputContainer () {
  return (
    <div className="col-md-6">
      <textarea rows="20" />
    </div>
  )
}


React.render(<Test />, document.getElementById("app"));