onChange = event => {
  console.log(this);
  const newContent = [...this.state.content];
  if (event.target.id.includes("feet" || "hands")) {
    newContent[event.target.getAttribute("data-idx")][event.target.id.includes("feet") ? "feet" : "hands"][event.target.id] = event.target.value;
    this.setState({ content: newContent });
  } else {
    this.setState({ title: event.target.value });
  }
};

onChange2 = event => {
  const newContent = [...this.state.content];
  if (event.target.id.includes("feet")) {
      newContent[event.target.getAttribute("data-idx")][event.target.id.includes("feet") = "feet"][event.target.id] = event.target.value;
      this.setState({ content: newContent });
  } 
};


onChange = event => {
    const newContent = [...this.state.content]
    if(event.target.id.includes("feet")) {
        const {feet, value } = event.target.getAttribute("data-idx")[event.target.id.includes("feet")][event.target.id] = event.target.value;
        this.setState(()=> ({ [feet]: value }))
    } else if (event.target.id.includes("hands")) {
        const {hands, value } = event.target.getAttribute("data-idx")[event.target.id.includes("hands")][event.target.id] = event.target.value;
        this.setState(()=> ({ [hands]: value }))
    } else {
        this.setState({ title: event.target.value })
    }
}