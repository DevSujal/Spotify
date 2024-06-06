

export const changeTheme = () => {
    const classList = document.getElementById("root").classList
    if(classList.contains("light-theme")){
        classList.remove("light-theme")
    }else{
        classList.add("light-theme")
    }
}

