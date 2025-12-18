const ConditionBasic = () => {
  const user = "test"

  return (
    <div>
      { user || 'top test'}
      { user && <h1>Pls login</h1> }
      { user ? "test": "not test" }
    </div>
  )
}

export default ConditionBasic 