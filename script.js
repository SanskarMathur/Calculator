const toggle_btn = document.querySelector(".toggle")
const body = document.querySelectorAll("body")
const buttons = document.querySelectorAll(".btn, .clear-btn")
const input = document.querySelector("input")
const operations = document.querySelectorAll(".equal-btn, .plus-btn, .minus-btn, .divide-btn, .multiply-btn")
Dark = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        var text =  button.value
        if(text==="C")   input.value = "0"
        else if(text==="Input")    
        {
            input.value = "Input"
            input.style.color = "rgb(134, 131, 131)"
        }
        else
        {
            if(input.value =="Input" || input.value == "0") input.value = text
            else
            {
                input.value = `${input.value}` + text
            }
            if(Dark == false)
            input.style.color = "black";
            else
            input.style.color = "whitesmoke";
        }
    })
})


toggle_btn.addEventListener("click", () => {
    body.forEach(body => {
        body.classList.toggle("dark");
    })
    if(Dark == false)
    {
        Dark = true
        toggle_btn.innerText = "Dark Mode"
        input.style.color = "whitesmoke";
    }
    else
    {
        Dark = false
        toggle_btn.innerText = "Light Mode"
        input.style.color = "black";
    }
})

operations.forEach(operation => {
    operation.addEventListener("click", () => {
        var firstText = input.value
        var operand = operation.value
        if(operand == "+")
        {
            input.value = "0"

        }
        else if(operand == "-")
        {
            input.value = "0"
        }
        else if(operand == "x")
        {
            input.value = "0"
        }
        else if(operand == "/")
        {
            input.value = "0"
        }
        else if(operand == "=")
        {
        }
    })
})