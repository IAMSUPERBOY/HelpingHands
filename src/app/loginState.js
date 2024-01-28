import loginContext from "./loginContext";

const loginState=(props)=>{
    const state={
        "loggedIn":false
    }
    return
    (
        <loginContext.provider value={state}>
            {props.children}
        </loginContext.provider>
    )
}