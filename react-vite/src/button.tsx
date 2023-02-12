function ButtonButton() {
  function clickToAppend() {
    const selectElementBelowButton = document.getElementById("afterclicked");
    const appendWhenClicked = document.createElement("p");
    selectElementBelowButton.append(appendWhenClicked);
    return (
      <div>
        <button onClick={appendWhenClicked}></button>
      </div>
    );
  }
}
